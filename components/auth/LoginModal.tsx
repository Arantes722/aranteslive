"use client";

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
    if (!open) return null;

    async function login() {
        const supabase = createClient();

        const { error } = await supabase.auth.signInWithOAuth({
            provider: "twitch",
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            console.error(error);
        }
    }

    return (
        <div
            className="
    fixed
    inset-0
    z-[99999]
    grid
    place-items-center
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
                {/* Close */}

                <button
                    onClick={onClose}
                    className="
            absolute
            right-4
            top-4
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            text-neutral-500
            transition
            hover:bg-red-500/10
            hover:text-red-500
          "
                >
                    <X size={16} />
                </button>

                {/* Logo */}

                <div className="text-center">
                    <h1 className="text-4xl font-black tracking-tight">
                        Arantes
                        <span className="text-red-500">Live</span>
                    </h1>

                    <h2 className="mt-6 text-2xl font-bold">
                        Sign in to ArantesLive
                    </h2>

                    <p className="mt-3 text-sm text-neutral-400">
                        You are about to be redirected to Twitch.
                    </p>
                </div>

                {/* Twitch */}

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
            transition
            hover:bg-red-500
            hover:shadow-[0_0_20px_rgba(239,68,68,.35)]
          "
                >
                    <FaTwitch size={20} />

                    CONTINUE WITH TWITCH
                </button>

                {/* Footer */}

                <p
                    className="
            mt-8
            text-center
            text-xs
            text-neutral-500
          "
                >
                    By signing in, you agree to our
                </p>

                <div
                    className="
            mt-2
            flex
            justify-center
            gap-2
            text-sm
          "
                >
                    <button className="text-red-500 hover:underline">
                        Terms of Service
                    </button>

                    <span className="text-neutral-600">
                        and
                    </span>

                    <button className="text-red-500 hover:underline">
                        Privacy Policy
                    </button>
                </div>
            </div>
        </div>
    );
}