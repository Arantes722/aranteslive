"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Flame,
    Gift,
    Radio,
    ShoppingBag,
    ArrowRight,
} from "lucide-react";

const cards = [
    {
        icon: Flame,
        color: "text-red-500",
        glow: "shadow-red-500/20",
        title: "Exclusive Bonus",
        description: "Claim up to €500 + 200 Free Spins",
        button: "Claim Bonus",
        href: "/casinos",
    },
    {
        icon: Gift,
        color: "text-emerald-500",
        glow: "shadow-emerald-500/20",
        title: "Weekly Giveaway",
        description: "Join this week's community giveaway.",
        button: "Join Now",
        href: "/giveaways",
    },
    {
        icon: Radio,
        color: "text-red-500",
        glow: "shadow-red-500/20",
        title: "Live Streams",
        description: "Casino streams & community nights.",
        button: "Watch Live",
        href: "/live",
    },
    {
        icon: ShoppingBag,
        color: "text-purple-500",
        glow: "shadow-purple-500/20",
        title: "Merch Store",
        description: "Exclusive products coming soon.",
        button: "Explore",
        href: "/shop",
    },
];

export function SidebarHighlights() {

    const [active, setActive] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setActive((value) => (value + 1) % cards.length);

        }, 6000);

        return () => clearInterval(interval);

    }, []);

    const card = cards[active];
    const Icon = card.icon;

    return (

        <Link
            href={card.href}
            className="
                group
                block
                overflow-hidden
                rounded-2xl
                border
                border-neutral-800
                bg-gradient-to-br
                from-neutral-900
                to-black
                p-4
                transition-all
                duration-500
                hover:border-red-500/40
            "
        >

            <div className="flex items-center gap-3">

                <div
                    className={`
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-neutral-800
                        shadow-lg
                        ${card.glow}
                    `}
                >
                    <Icon
                        size={20}
                        className={card.color}
                    />
                </div>

                <div>

                    <p className="text-sm font-bold">
                        {card.title}
                    </p>

                    <p className="mt-1 text-xs text-neutral-400">
                        {card.description}
                    </p>

                </div>

            </div>

            <div
                className="
                    mt-5
                    flex
                    items-center
                    justify-between
                "
            >

                <span
                    className="
                        text-xs
                        font-semibold
                        text-red-400
                    "
                >
                    {card.button}
                </span>

                <ArrowRight
                    size={16}
                    className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                    "
                />

            </div>

            <div
                className="
                    mt-4
                    flex
                    justify-center
                    gap-2
                "
            >

                {cards.map((_, i) => (

                    <span
                        key={i}
                        className={`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-300

                            ${
                                i === active
                                    ? "w-6 bg-red-500"
                                    : "w-1.5 bg-neutral-700"
                            }
                        `}
                    />

                ))}

            </div>

        </Link>

    );

}