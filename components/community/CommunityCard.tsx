import Link from "next/link";

import { ArrowUpRight, BadgeCheck } from "lucide-react";

import {
  FaDiscord,
  FaYoutube,
  FaTiktok,
  FaTelegramPlane,
  FaTwitch,
} from "react-icons/fa";

interface CommunityCardProps {
  item: {
    name: string;
    description: string;
    icon: string;
    link: string;
  };
}

const icons = {
  Twitch: FaTwitch,
  Discord: FaDiscord,
  Telegram: FaTelegramPlane,
  YouTube: FaYoutube,
  TikTok: FaTiktok,
};

export function CommunityCard({ item }: CommunityCardProps) {
  const Icon = icons[item.name as keyof typeof icons] ?? BadgeCheck;

  return (
    <Link
      href={item.link}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-neutral-800
        bg-[#080808]
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-red-500/30
        hover:bg-neutral-950
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-40
          w-40
          rounded-full
          bg-red-500/5
          blur-3xl
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Badge */}

      {item.name === "Discord" && (
        <div
          className="
            absolute
            right-5
            top-5
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            px-3
            py-1
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-red-400
          "
        >
          Popular
        </div>
      )}

      <div className="relative">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-red-500/10
          "
        >
          <Icon size={28} className="text-red-500" />
        </div>

        <h2
          className="
            mt-8
            text-2xl
            font-black
          "
        >
          {item.name}
        </h2>

        <p
          className="
            mt-3
            leading-7
            text-neutral-400
          "
        >
          {item.description}
        </p>

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
          "
        >
          <span
            className="
              text-sm
              font-semibold
              text-red-400
            "
          >
            Join now
          </span>

          <ArrowUpRight
            size={18}
            className="
              transition
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </div>
    </Link>
  );
}
