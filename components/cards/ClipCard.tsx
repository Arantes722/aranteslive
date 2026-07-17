import Link from "next/link";

interface ClipCardProps {
    clip: {
        title: string;
        description: string;
        category: string;
        image?: string;
    };
}


export function ClipCard({
    clip,
}: ClipCardProps) {

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


            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    bg-neutral-900
                "
            />


            {/* Image */}

            {clip.image && (
                <img
                    src={clip.image}
                    alt={clip.title}
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
                    from-black/80
                    via-black/30
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
                {clip.category}
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
                    gap-0
                    opacity-0
                    translate-y-3
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                "
            >

                <Link
                    href="/clips"
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
                    Watch Clip
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
                    {clip.title}
                </h3>


            </div>


        </div>
    );
}