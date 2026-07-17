import Link from "next/link";

interface GiveawayCardProps {
    giveaway: {
        title: string;
        prize: string;
        status: string;
        description: string;
        image?: string;
    };
}


export function GiveawayCard({
    giveaway,
}: GiveawayCardProps) {

    return (
        <div
            className="
                group
                relative
                h-[250px]
                w-[175px]
                overflow-hidden
                rounded-3xl
                border
                border-neutral-800
                bg-black
                transition-all
                duration-500
                hover:border-yellow-500/40
            "
        >


            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-yellow-900/20
                    via-black
                    to-black
                "
            />



            {/* Image */}

            {giveaway.image && (
                <img
                    src={giveaway.image}
                    alt={giveaway.title}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-105
                        group-hover:blur-[2px]
                    "
                />
            )}



            {/* Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-black/40
                "
            />



            {/* Hover Layer */}

            <div
                className="
                    absolute
                    inset-0
                    bg-black/40
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                "
            />



            {/* Status Badge */}

            <div
                className="
                    absolute
                    left-3
                    top-3
                    rounded-full
                    border
                    border-yellow-500/30
                    bg-black/50
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    text-yellow-400
                    backdrop-blur
                "
            >
                {giveaway.status}
            </div>



            {/* Hover Buttons */}

            <div
                className="
                    absolute
                    inset-0
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-3
                    opacity-0
                    translate-y-3
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                "
            >

                <Link
                    href="/giveaways"
                    className="
                        rounded-xl
                        bg-yellow-500
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        text-black
                        shadow-[0_0_20px_rgba(234,179,8,.35)]
                        transition
                        hover:bg-yellow-400
                    "
                >
                    Enter Giveaway
                </Link>


                <Link
                    href="/giveaways"
                    className="
                        rounded-xl
                        border
                        border-white/30
                        bg-black/50
                        px-5
                        py-2.5
                        text-xs
                        font-semibold
                        text-white
                        backdrop-blur
                        transition
                        hover:bg-white/10
                    "
                >
                    Details
                </Link>

            </div>



            {/* Bottom Info */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-4
                    transition-all
                    duration-300
                    group-hover:opacity-0
                "
            >

                <h3
                    className="
                        text-sm
                        font-bold
                        line-clamp-2
                    "
                >
                    {giveaway.title}
                </h3>


                <p
                    className="
                        mt-1
                        text-xs
                        text-yellow-400
                        font-semibold
                    "
                >
                    {giveaway.prize}
                </p>


            </div>


        </div>
    );
}