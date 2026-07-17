import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import {
    getTwitchUser,
} from "@/lib/twitch/api";

export async function GET(request: Request) {

    const requestUrl =
        new URL(request.url);

    const code =
        requestUrl.searchParams.get("code");

    if (!code) {

        return NextResponse.redirect(
            new URL("/login", request.url)
        );

    }

    const cookieStore =
        await cookies();

    const supabase =
        createServerClient(

            process.env.NEXT_PUBLIC_SUPABASE_URL!,

            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,

            {

                cookies: {

                    getAll() {

                        return cookieStore.getAll();

                    },

                    setAll(cookiesToSet) {

                        cookiesToSet.forEach(
                            ({
                                name,
                                value,
                                options
                            }) => {

                                cookieStore.set(
                                    name,
                                    value,
                                    options
                                );

                            }
                        );

                    }

                }

            }

        );

    const {
        data,
        error
    } =
        await supabase.auth.exchangeCodeForSession(code);

    if (error) {

        console.error(
            "OAuth Error:",
            error
        );

        return NextResponse.redirect(
            new URL("/login", request.url)
        );

    }

    const accessToken =
        data.session?.provider_token;

    if (!accessToken) {

        console.error(
            "Missing Twitch token"
        );

        return NextResponse.redirect(
            new URL("/login", request.url)
        );

    }

    const {
        data: {
            user
        }
    } =
        await supabase.auth.getUser();

    if (user) {

        try {

            const twitchUser =
                await getTwitchUser(
                    accessToken
                );

            const isBroadcaster =
                twitchUser.login.toLowerCase()
                ===
                process.env.TWITCH_USERNAME!.toLowerCase();

            const {
                error: profileError
            } =
                await supabase
                    .from("profiles")
                    .upsert({

                        id: user.id,

                        username:
                            twitchUser.login,

                        twitch_username:
                            twitchUser.login,

                        avatar_url:
                            twitchUser.profile_image_url,

                        email:
                            user.email ?? null,

                        provider:
                            "twitch",

                        twitch_id:
                            twitchUser.id,

                        twitch_access_token:
                            accessToken,

                        twitch_role:
                            isBroadcaster
                                ? "Broadcaster"
                                : "Viewer",

                        twitch_is_broadcaster:
                            isBroadcaster,

                    });

            if (profileError) {

                throw profileError;

            }

            console.log(
                "TWITCH PROFILE CREATED"
            );

        }
        catch (error) {

            console.error(
                "TWITCH PROFILE ERROR:",
                error
            );

        }

    }

    return NextResponse.redirect(
        new URL("/profile", request.url)
    );

}