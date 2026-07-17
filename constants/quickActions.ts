export type QuickActionType =
    | "casino"
    | "giveaway"
    | "live"
    | "shop";

export type QuickActionColor =
    | "red"
    | "emerald"
    | "purple";

export interface QuickAction {
    id: number;
    type: QuickActionType;
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    href: string;
    color: QuickActionColor;
}

export const quickActions: QuickAction[] = [
    {
        id: 1,
        type: "casino",
        badge: "FEATURED CASINO",
        title: "RoyalSpin",
        subtitle: "€500 + 200 Free Spins",
        button: "Claim Bonus",
        href: "/casinos/royalspin",
        color: "red",
    },
    {
        id: 2,
        type: "giveaway",
        badge: "WEEKLY GIVEAWAY",
        title: "€100 Balance",
        subtitle: "Join before it ends",
        button: "Join Giveaway",
        href: "/giveaways",
        color: "emerald",
    },
    {
        id: 3,
        type: "live",
        badge: "LIVE STREAM",
        title: "Casino Night",
        subtitle: "Watch ArantesLive",
        button: "Watch Stream",
        href: "/live",
        color: "red",
    },
    {
        id: 4,
        type: "shop",
        badge: "MERCH STORE",
        title: "Coming Soon",
        subtitle: "Exclusive Collection",
        button: "Learn More",
        href: "/shop",
        color: "purple",
    },
];