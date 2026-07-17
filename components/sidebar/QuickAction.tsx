"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    Dice5,
    Gift,
    Radio,
    ShoppingBag,
    ArrowRight,
} from "lucide-react";

import {
    quickActions,
    QuickActionColor,
    QuickActionType,
} from "@/constants/quickActions";

const icons = {
    casino: Dice5,
    giveaway: Gift,
    live: Radio,
    shop: ShoppingBag,
};

const colors = {
    red: {
        badge:
            "border-red-500/20 bg-red-500/10 text-red-400",
        icon:
            "bg-red-500/10 text-red-500",
        button:
            "hover:border-red-500/40 hover:bg-red-500/5",
    },

    emerald: {
        badge:
            "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
        icon:
            "bg-emerald-500/10 text-emerald-500",
        button:
            "hover:border-emerald-500/40 hover:bg-emerald-500/5",
    },

    purple: {
        badge:
            "border-purple-500/20 bg-purple-500/10 text-purple-400",
        icon:
            "bg-purple-500/10 text-purple-500",
        button:
            "hover:border-purple-500/40 hover:bg-purple-500/5",
    },
};

export function QuickAction() {

    const [index, setIndex] = useState(0);

    const changeSlide = (newIndex: number) => {
        setIndex(newIndex);
    };

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((current) =>
                (current + 1) % quickActions.length
            );

        }, 12000);

        return () => clearInterval(interval);

    }, []);

    const action = quickActions[index];

    const Icon = icons[action.type as QuickActionType];

    const color = colors[action.color as QuickActionColor];

    return (

        <div
            className="
                transition-opacity
                duration-500
            "
        >

            <div
                className="
                    rounded-3xl
                    border
                    border-neutral-800
                    bg-gradient-to-br
                    from-neutral-900
                    to-[#090909]
                    p-5
                "
            >

                {/* Badge */}

                <div
                    className={`
                        mb-4
                        inline-flex
                        rounded-full
                        border
                        px-3
                        py-1
                        ${color.badge}
                    `}
                >
                    <span
                        className="
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.22em]
                        "
                    >
                        {action.badge}
                    </span>
                </div>

                {/* Header */}

                <div className="flex items-center gap-3">

                    <div
                        className={`
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            ${color.icon}
                        `}
                    >
                        <Icon size={22} />
                    </div>

                    <div>

                        <h3 className="font-semibold">
                            {action.title}
                        </h3>

                        <p
                            className="
                                text-xs
                                text-neutral-400
                            "
                        >
                            {action.subtitle}
                        </p>

                    </div>

                </div>

                {/* Button */}

                <Link
                    href={action.href}
                    className={`
                        mt-5
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-neutral-800
                        px-4
                        py-3
                        transition
                        ${color.button}
                    `}
                >
                    <span
                        className="
                            text-sm
                            font-semibold
                        "
                    >
                        {action.button}
                    </span>

                    <ArrowRight size={18} />

                </Link>

                {/* Progress */}

                <div
                    className="
        mt-5
        flex
        justify-center
        gap-2
    "
                >

                    {quickActions.map((_, i) => (

                        <button
                            key={i}
                            onClick={() => changeSlide(i)}
                            aria-label={`Show card ${i + 1}`}
                            className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${i === index
                                    ? "w-6 bg-white"
                                    : "w-1.5 bg-neutral-700 hover:w-3 hover:bg-neutral-500"
                                }
            `}
                        />

                    ))}

                </div>

            </div>

        </div>

    );

}