import Link from "next/link";

interface OfferCardProps {
    name: string;
    bonus: string;
    image: string;
    badge: string;
    href: string;
}


export function OfferCard({
    name,
    bonus,
    image,
    badge,
    href,
}: OfferCardProps) {

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
                hover:border-red-500/40
            "
        >

            {/* Background Image */}

            <img
                src={image}
                alt={name}
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



            {/* Default Overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-black/20
                    to-black/40
                "
            />



            {/* Hover Dark Layer */}

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



            {/* Badge */}

            <div
                className="
                    absolute
                    left-3
                    top-3
                    rounded-full
                    border
                    border-white/10
                    bg-black/50
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    text-white
                    backdrop-blur
                "
            >
                {badge}
            </div>



            {/* Hover Actions */}

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
                    href={href}
                    className="
                        rounded-xl
                        bg-red-600
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        shadow-[0_0_20px_rgba(239,68,68,.35)]
                        transition
                        hover:bg-red-500
                    "
                >
                    Claim Bonus
                </Link>



                <Link
                    href={href}
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
                    Show More
                </Link>

            </div>

        </div>
    );
}