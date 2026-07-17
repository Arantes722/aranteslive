"use client";

import Link from "next/link";

export function Hero() {

    // Depois vamos substituir isto pela API da Twitch
    const isLive = true;


    return (
        <section
            className={`
                relative
                overflow-hidden
                rounded-3xl
                bg-black
                min-h-[260px]
                flex
                items-center
                transition-all
                duration-500

                ${
                    isLive
                    ?
                    `
                    border
                    border-red-500/80
                    shadow-[0_0_35px_rgba(239,68,68,0.25)]
                    `
                    :
                    `
                    border
                    border-neutral-800
                    `
                }
            `}
        >


            {/* Background Image */}

            <div
                className="
                    absolute
                    inset-0
                    bg-cover
                    bg-center
                "
                style={{
                    backgroundImage:
                        "url('/images/casino.png')",
                }}
            />



            {/* Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-black
                    via-black/90
                    to-transparent
                "
            />




            {/* Content */}

            <div
                className="
                    relative
                    z-10
                    max-w-xl
                    px-8
                    py-8
                "
            >



                {/* Status */}

                <div
                    className={`
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-semibold

                        ${
                            isLive
                            ?
                            `
                            bg-red-500/20
                            text-red-400
                            `
                            :
                            `
                            bg-neutral-800
                            text-neutral-400
                            `
                        }
                    `}
                >

                    <span
                        className={`
                            h-2
                            w-2
                            rounded-full

                            ${
                                isLive
                                ?
                                "bg-red-500 animate-pulse"
                                :
                                "bg-neutral-500"
                            }
                        `}
                    />


                    {isLive ? "LIVE NOW" : "OFFLINE"}

                </div>





                {/* Brand */}

                <h1
                    className="
                        mt-4
                        text-5xl
                        font-black
                        tracking-tight
                    "
                >
                    Arantes
                    <span className="text-red-500">
                        Live
                    </span>

                </h1>





                {/* Description */}

                <p
                    className="
                        mt-3
                        max-w-md
                        text-neutral-300
                    "
                >
                    Gaming, casino and entertainment.
                    Building a community from day one.
                </p>





                {/* Button */}

                <div className="mt-6">

                    <Link
                        href="/live"
                        className={`
                            inline-flex
                            rounded-xl
                            px-7
                            py-3
                            font-semibold
                            transition-all
                            duration-300


                            ${
                                isLive
                                ?
                                `
                                bg-red-600
                                hover:bg-red-500
                                hover:shadow-[0_0_30px_rgba(239,68,68,.5)]
                                `
                                :
                                `
                                bg-neutral-800
                                hover:bg-neutral-700
                                `
                            }
                        `}
                    >

                        {
                            isLive
                            ?
                            "Watch Live"
                            :
                            "Follow Channel"
                        }

                    </Link>

                </div>


            </div>


        </section>
    );
}