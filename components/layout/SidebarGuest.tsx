import Link from "next/link";

import {
  Home,
  Dice5,
  Radio,
  Gift,
  BookOpen,
  Users,
  User,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    title: "Casinos",
    href: "/casinos",
    icon: Dice5,
  },
  {
    title: "Live",
    href: "/live",
    icon: Radio,
  },
  {
    title: "Giveaways",
    href: "/giveaways",
    icon: Gift,
  },
  {
    title: "Guides",
    href: "/guides",
    icon: BookOpen,
  },
  {
    title: "Community",
    href: "/community",
    icon: Users,
  },
];

export function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        hidden
        h-screen
        w-72
        border-r
        border-neutral-800
        bg-[#050505]
        p-6
        lg:block
      "
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-3xl font-bold tracking-tight"
      >
        Arantes
        <span className="text-red-500">
          Live
        </span>
      </Link>

      <p className="mt-2 text-sm text-neutral-500">
        Casino • Community • Entertainment
      </p>

      {/* Menu */}
      <nav className="mt-12 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="
                group
                flex
                items-center
                gap-4
                rounded-xl
                px-4
                py-3
                text-neutral-400
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              <Icon
                size={20}
                className="
                  transition
                  group-hover:text-red-500
                "
              />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Community Card */}
      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          rounded-2xl
          border
          border-red-500/20
          bg-red-500/10
          p-5
        "
      >
        <p className="font-semibold">
          Join Community
        </p>

        <p className="mt-2 text-sm text-neutral-400">
          Exclusive offers, giveaways and updates.
        </p>

        <button
          className="
            mt-4
            w-full
            rounded-xl
            bg-red-600
            py-2
            text-sm
            font-semibold
            transition
            hover:bg-red-500
          "
        >
          Join Now
        </button>
      </div>
    </aside>
  );
}