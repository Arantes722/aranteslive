"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Home,
    Dice5,
    Radio,
    Gift,
    Users,
    ShoppingBag,
    Ticket,
} from "lucide-react";

const icons = {
    home: Home,
    casino: Dice5,
    gift: Gift,
    live: Radio,
    community: Users,
    shop: ShoppingBag,
    redeem: Ticket,
};

type SidebarIcon = keyof typeof icons;

interface SidebarNavigationProps {
    sections: {
        title: string;
        items: {
            title: string;
            href: string;
            icon: SidebarIcon;
            count?: number;
        }[];
    }[];
}

export function SidebarNavigation({
    sections,
}: SidebarNavigationProps) {

    const pathname = usePathname();

    return (
        <nav
            className="
                flex
                flex-1
                flex-col
                justify-center
                gap-8
            "
        >
            {sections.map((section) => (

                <div key={section.title}>

                    {/* Section Header */}

                    <div
                        className="
                            mb-4
                            flex
                            items-center
                            gap-3
                            px-2
                        "
                    >
                        <p
                            className="
                                whitespace-nowrap
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.28em]
                                text-neutral-600
                            "
                        >
                            {section.title}
                        </p>

                        <div className="h-px flex-1 bg-neutral-800" />

                    </div>

                    <div className="space-y-2">

                        {section.items.map((item) => {

                            const Icon = icons[item.icon];

                            const active =
                                pathname === item.href ||
                                (item.href !== "/" &&
                                    pathname.startsWith(item.href));

                            const comingSoon =
                                item.href === "/shop" ||
                                item.href === "/redeem";

                            return (

                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`
                                        group
                                        relative
                                        flex
                                        items-center
                                        gap-4
                                        overflow-hidden
                                        rounded-2xl
                                        px-4
                                        py-3
                                        transition-all
                                        duration-300

                                        ${
                                            active
                                                ? `
                                                    bg-gradient-to-r
                                                    from-red-500/10
                                                    via-red-500/5
                                                    to-transparent
                                                    text-white
                                                `
                                                : `
                                                    text-neutral-400
                                                    hover:bg-gradient-to-r
                                                    hover:from-red-500/10
                                                    hover:to-transparent
                                                    hover:text-white
                                                `
                                        }
                                    `}
                                >

                                    {/* Active Indicator */}

                                    {active && (
                                        <>
                                            <span
                                                className="
                                                    absolute
                                                    left-0
                                                    top-2
                                                    bottom-2
                                                    w-1
                                                    rounded-r-full
                                                    bg-red-500
                                                "
                                            />

                                            <span
                                                className="
                                                    absolute
                                                    left-0
                                                    top-2
                                                    bottom-2
                                                    w-3
                                                    bg-red-500/30
                                                    blur-md
                                                "
                                            />
                                        </>
                                    )}

                                    {/* Icon */}

                                    <Icon
                                        size={20}
                                        className={`
                                            relative
                                            z-10
                                            transition-all
                                            duration-300

                                            ${
                                                active
                                                    ? "text-red-500 scale-110"
                                                    : "group-hover:text-red-500 group-hover:scale-110"
                                            }
                                        `}
                                    />

                                    {/* Title */}

                                    <span
                                        className="
                                            relative
                                            z-10
                                            text-sm
                                            font-medium
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    >
                                        {item.title}
                                    </span>

                                    {/* Right Badge */}

                                    {item.count !== undefined ? (

                                        <span
                                            className="
                                                ml-auto
                                                rounded-full
                                                border
                                                border-red-500/20
                                                bg-red-500/10
                                                px-2.5
                                                py-1
                                                text-[10px]
                                                font-bold
                                                text-red-400
                                            "
                                        >
                                            {item.count}
                                        </span>

                                    ) : comingSoon ? (

                                        <span
                                            className="
                                                ml-auto
                                                rounded-full
                                                border
                                                border-neutral-700
                                                bg-neutral-900
                                                px-2
                                                py-1
                                                text-[9px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.15em]
                                                leading-none
                                                text-neutral-500
                                            "
                                        >
                                            Soon
                                        </span>

                                    ) : null}

                                </Link>

                            );

                        })}

                    </div>

                </div>

            ))}
        </nav>
    );
}