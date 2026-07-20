import { NextResponse } from "next/server";

import { createServerClient } from "@supabase/ssr";

import { cookies } from "next/headers";

import { getTwitchUser } from "@/lib/twitch/api";

import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    },
  );

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    console.error("SESSION ERROR:", error);

    return NextResponse.redirect(new URL("/login", request.url));
  }

  const accessToken = data.session?.provider_token;

  if (!accessToken) {
    console.error("NO TWITCH TOKEN");

    return NextResponse.redirect(new URL("/login", request.url));
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    try {
      const twitchUser = await getTwitchUser(accessToken, "");

      if (!twitchUser) {
        throw new Error("Twitch user missing");
      }

      console.log("TWITCH USER:", twitchUser.login);

      const isBroadcaster =
        twitchUser.login.toLowerCase() ===
        process.env.TWITCH_USERNAME!.toLowerCase();

      const { data: existing } = await supabaseAdmin

        .from("profiles")

        .select("id")

        .eq("id", user.id)

        .maybeSingle();

      const profile = {
        username: twitchUser.login,

        twitch_username: twitchUser.login,

        avatar_url: twitchUser.profile_image_url,

        email: user.email ?? null,

        provider: "twitch",

        twitch_id: twitchUser.id,

        twitch_access_token: accessToken,

        twitch_role: isBroadcaster ? "Broadcaster" : "Viewer",

        twitch_is_broadcaster: isBroadcaster,
      };

      if (existing) {
        await supabaseAdmin

          .from("profiles")

          .update(profile)

          .eq("id", user.id);
      } else {
        await supabaseAdmin

          .from("profiles")

          .insert({
            id: user.id,

            ...profile,
          });
      }

      console.log("TWITCH PROFILE CREATED");
    } catch (error) {
      console.error("PROFILE ERROR:", error);
    }
  }

  return NextResponse.redirect(new URL("/profile", request.url));
}
