import { Coins, RefreshCw, ShoppingBag } from "lucide-react";

interface PointsCardProps {
    points?: number;
}

export default function PointsCard({
    points = 0,
}: PointsCardProps) {

    return (

        <section
            className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-neutral-800
                bg-[#080808]
            "
        >

            <div
                className="
                    h-1
                    bg-gradient-to-r
                    from-red-600
                    via-red-500
                    to-red-400
                "
            />

            <div
                className="
                    flex
                    h-[135px]
                    items-center
                    justify-center
                    px-6
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-red-500/10
                        "
                    >

                        <Coins
                            size={22}
                            className="text-red-500"
                        />

                    </div>

                    <div>

                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.22em]
                                text-neutral-500
                            "
                        >
                            Store Points
                        </p>

                        <div
                            className="
                                mt-2
                                flex
                                items-center
                                gap-2
                            "
                        >

                            <h2
                                className="
                                    text-2xl
                                    font-black
                                    leading-none
                                "
                            >
                                {points.toLocaleString()}
                            </h2>

                            <button
                                className="
                                    rounded-lg
                                    p-1.5
                                    text-neutral-500
                                    transition
                                    hover:bg-neutral-800
                                    hover:text-white
                                "
                            >
                                <RefreshCw size={14} />
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <button
                className="
                    absolute
                    bottom-3
                    right-3
                    flex
                    items-center
                    gap-1.5
                    rounded-lg
                    bg-red-500/10
                    px-3
                    py-1.5
                    text-xs
                    font-medium
                    text-red-400
                    transition
                    hover:bg-red-500
                    hover:text-white
                "
            >

                <ShoppingBag size={13} />

                Shop

            </button>

        </section>

    );

}