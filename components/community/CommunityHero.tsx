import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CommunityHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-neutral-800
        bg-[#080808]
        p-10
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          right-0
          top-0
          h-96
          w-96
          rounded-full
          bg-red-500/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          max-w-4xl
        "
      >
        <span
          className="
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            px-4
            py-2
            text-xs
            font-bold
            tracking-[0.25em]
            text-red-500
          "
        >
          ARANTESLIVE COMMUNITY
        </span>

        <h1
          className="
            mt-8
            text-6xl
            font-black
            leading-none
          "
        >
          Join the
          <br />
          Community.
        </h1>

        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-neutral-400
          "
        >
          Stay connected across every platform. Join the Discord, watch live on
          Twitch, follow exclusive content and never miss giveaways, updates or
          new rewards.
        </p>

        <div
          className="
            mt-10
            flex
            flex-wrap
            gap-4
          "
        >
          <Link
            href="#"
            className="
              rounded-2xl
              bg-red-500
              px-7
              py-4
              font-bold
              transition
              hover:bg-red-600
            "
          >
            Join Discord
          </Link>

          <Link
            href="#"
            className="
              flex
              items-center
              gap-2
              rounded-2xl
              border
              border-neutral-700
              px-7
              py-4
              font-semibold
              transition
              hover:border-red-500/30
              hover:bg-white/5
            "
          >
            Watch Twitch
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
