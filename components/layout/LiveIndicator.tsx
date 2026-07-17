"use client";

import Link from "next/link";

interface LiveIndicatorProps {
    live?: boolean;
    viewers?: number;
}


export function LiveIndicator({
    live = false,
    viewers = 0,
}: LiveIndicatorProps) {

    return (

        <Link
            href="/live"
            className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-neutral-800
                bg-neutral-950
                px-4
                py-2
                transition
                hover:border-red-500/40
            "
        >

            <span
                className={`
                    h-3
                    w-3
                    rounded-full

                    ${
                        live
                        ? `
                            bg-red-500
                            animate-pulse
                        `
                        :
                        `
                            bg-neutral-600
                        `
                    }
                `}
            />


            <div>

                <p
                    className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                    "
                >
                    {
                        live
                        ? "Live Now"
                        : "Offline"
                    }
                </p>


                {
                    live && (

                        <p
                            className="
                                text-[11px]
                                text-neutral-500
                            "
                        >
                            {viewers} viewers
                        </p>

                    )
                }

            </div>


        </Link>

    );
}