import Link from "next/link";

interface SocialCardProps {
    social: {
        name: string;
        href: string;
        icon: string;
        image?: string;
    };
}


export function SocialCard({
    social,
}: SocialCardProps) {

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
                hover:border-purple-500/40
            "
        >


            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-purple-900/20
                    via-black
                    to-black
                "
            />


            {/* Image */}

            {social.image && (
                <img
                    src={social.image}
                    alt={social.name}
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



            {/* Platform Badge */}

            <div
                className="
                    absolute
                    left-3
                    top-3
                    rounded-full
                    border
                    border-purple-500/30
                    bg-black/50
                    px-3
                    py-1
                    text-[11px]
                    font-semibold
                    text-purple-400
                    backdrop-blur
                "
            >
                COMMUNITY
            </div>



            {/* Hover Button */}

            <div
                className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    translate-y-3
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                "
            >

                <Link
                    href={social.href}
                    className="
                        rounded-xl
                        bg-purple-600
                        px-6
                        py-3
                        text-xs
                        font-bold
                        shadow-[0_0_20px_rgba(168,85,247,.35)]
                        transition
                        hover:bg-purple-500
                    "
                >
                    Join Now
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
                    "
                >
                    {social.name}
                </h3>


                <p
                    className="
                        mt-1
                        text-xs
                        text-neutral-400
                    "
                >
                    Join ArantesLive
                </p>

            </div>


        </div>
    );
}