"use client";

import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

import { X } from "lucide-react";

import { FaTwitch } from "react-icons/fa";

import { createClient } from "@/lib/supabase/client";

interface LoginModalProps {
  open: boolean;

  onClose: () => void;
}

export function LoginModal({
  open,

  onClose,
}: LoginModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function login() {
    const supabase = createClient();

    const scopes = [
      "user:read:email",

      "moderator:read:followers",

      "channel:read:subscriptions",

      "channel:read:vips",

      "moderator:read:moderators",
    ].join(" ");

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "twitch",

      options: {
        redirectTo: `${window.location.origin}/auth/callback`,

        scopes,
      },
    });

    if (error) {
      console.error("TWITCH LOGIN ERROR:", error);
    }
  }

  if (!mounted || !open) {
    return null;
  }

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-[99999]
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-md
      "
    >
      <div
        className="
          relative
          w-[90%]
          max-w-md
          rounded-3xl
          border
          border-red-500/30
          bg-[#090909]
          p-8
          shadow-[0_0_40px_rgba(239,68,68,0.15)]
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            text-neutral-500
            hover:text-red-500
          "
        >
          <X size={18} />
        </button>

        <div className="text-center">
          <h1
            className="
              text-4xl
              font-black
            "
          >
            Arantes
            <span className="text-red-500">Live</span>
          </h1>

          <h2
            className="
              mt-6
              text-2xl
              font-bold
            "
          >
            Sign in to ArantesLive
          </h2>

          <p
            className="
              mt-3
              text-sm
              text-neutral-400
            "
          >
            Connect your Twitch account.
          </p>
        </div>

        <button
          onClick={login}
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-red-600
            py-3
            font-semibold
            hover:bg-red-500
          "
        >
          <FaTwitch size={20} />
          CONTINUE WITH TWITCH
        </button>
      </div>
    </div>,

    document.body,
  );
}
