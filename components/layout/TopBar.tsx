import Link from "next/link";
import { Coins } from "lucide-react";

import { createClient } from "@/lib/supabase/server";

import LogoutButton from "@/components/auth/LogoutButton";
import LoginButton from "../auth/LoginButton";
import NotificationBell from "@/components/notifications/NotificationBell";

export async function TopBar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const profile = user?.user_metadata;

  const [{ data: userProfile }, { data: notifications }] = user
    ? await Promise.all([
        supabase
          .from("profiles")
          .select("points")
          .eq("id", user.id)
          .single(),

        supabase
          .from("notifications")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", {
            ascending: false,
          })
          .limit(10),
      ])
    : [{ data: null }, { data: [] }];

  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        flex
        h-20
        w-full
        items-center
        justify-between
        border-b
        border-neutral-800
        bg-[#050505]/95
        px-8
        backdrop-blur
      "
    >
      {/* Logo */}

      <Link
        href="/"
        className="
          group
          flex
          flex-col
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            text-3xl
            font-bold
            tracking-tight
          "
        >
          <span
            className="
              h-3
              w-3
              rounded-full
              bg-red-500
              shadow-[0_0_15px_rgba(239,68,68,.8)]
              transition
              group-hover:scale-125
            "
          />

          <span>
            Arantes
            <span className="text-red-500">Live</span>
          </span>
        </div>

        <p className="text-xs text-neutral-500">
          Casino • Community • Entertainment
        </p>
      </Link>

      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        {/* Wallet */}

        {user && (
          <Link
            href="/store"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-neutral-800
              bg-neutral-950
              p-3
              transition
              hover:border-red-500/30
              hover:bg-white/5
            "
          >
            <Coins
              size={18}
              className="text-red-500"
            />

            <span
              className="
                text-sm
                font-bold
              "
            >
              {(userProfile?.points ?? 0).toLocaleString()}
            </span>
          </Link>
        )}

        {/* Notifications */}

        {user && (
          <NotificationBell
            notifications={notifications ?? []}
          />
        )}

        {/* User */}

        {user ? (
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-950
              px-3
              py-2
              transition
              hover:border-red-500/30
            "
          >
            <Link href="/profile">
              <img
                src={
                  profile?.avatar_url ??
                  "/default-avatar.png"
                }
                alt="avatar"
                className="
                  h-10
                  w-10
                  cursor-pointer
                  rounded-full
                  transition
                  hover:ring-2
                  hover:ring-red-500
                "
              />
            </Link>

            <Link
              href="/profile"
              className="
                hidden
                transition
                hover:text-red-500
                md:block
              "
            >
              <p className="font-semibold">
                {profile?.name ??
                  profile?.preferred_username ??
                  "User"}
              </p>

              <p className="text-xs text-neutral-500">
                Twitch
              </p>
            </Link>

            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
}