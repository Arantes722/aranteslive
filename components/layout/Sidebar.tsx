import { SidebarNavigation } from "./SidebarNavigation";
import { QuickAction } from "@/components/sidebar/QuickAction";

import { casinoOffers } from "@/constants/home";
import { giveaways } from "@/constants/giveaways";

type SidebarIcon =
  | "home"
  | "casino"
  | "gift"
  | "live"
  | "community"
  | "shop"
  | "redeem";

interface SidebarSection {
  title: string;
  items: {
    title: string;
    href: string;
    icon: SidebarIcon;
    count?: number;
  }[];
}

const sections: SidebarSection[] = [
  {
    title: "Discover",
    items: [
      {
        title: "Home",
        href: "/",
        icon: "home",
      },
      {
        title: "Casinos & Offers",
        href: "/casinos",
        icon: "casino",
        count: casinoOffers.length,
      },
      {
        title: "Giveaways & Raffles",
        href: "/giveaways",
        icon: "gift",
        count: giveaways.length,
      },
    ],
  },

  {
    title: "Community",
    items: [
      {
        title: "Live",
        href: "/live",
        icon: "live",
      },
      {
        title: "Community",
        href: "/community",
        icon: "community",
      },
    ],
  },

  {
    title: "Rewards",
    items: [
      {
        title: "Shop",
        href: "/shop",
        icon: "shop",
      },
      {
        title: "Redeem",
        href: "/redeem",
        icon: "redeem",
      },
    ],
  },
];

export async function Sidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-20
        hidden
        h-[calc(100vh-80px)]
        w-72
        border-r
        border-neutral-800
        bg-gradient-to-b
        from-[#080808]
        to-[#030303]
        p-6
        lg:flex
        lg:flex-col
      "
    >
      <SidebarNavigation sections={sections} />

      <div className="mt-auto pt-6">
        <QuickAction />
      </div>
    </aside>
  );
}