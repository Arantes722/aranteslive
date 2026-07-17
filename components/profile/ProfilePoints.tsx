import { Coins, TrendingUp } from "lucide-react";

interface ProfilePointsProps {
    points?: number;
}

export function ProfilePoints({
    points = 0,
}: ProfilePointsProps) {

    return (

        <section
            className="
                overflow-hidden
                rounded-3xl
                border
                border-neutral-800
                bg-[#080808]
            "
        >

            <div
                className="
                    h-2
                    w-full
                    bg-gradient-to-r
                    from-red-600
                    via-red-500
                    to-red-400
                "
            />

            <div
                className="
                    p-7
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
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
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-2xl
                                bg-red-500/10
                            "
                        >

                            <Coins
                                size={28}
                                className="text-red-500"
                            />

                        </div>

                        <div>

                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.25em]
                                    text-neutral-500
                                "
                            >
                                Store Points
                            </p>

                            <h2
                                className="
                                    mt-1
                                    text-5xl
                                    font-black
                                    leading-none
                                "
                            >
                                {points.toLocaleString()}
                            </h2>

                        </div>

                    </div>

                    <div
                        className="
                            hidden
                            rounded-2xl
                            border
                            border-red-500/20
                            bg-red-500/10
                            px-4
                            py-2
                            lg:flex
                            lg:items-center
                            lg:gap-2
                        "
                    >

                        <TrendingUp
                            size={18}
                            className="text-red-500"
                        />

                        <span
                            className="
                                text-sm
                                font-medium
                                text-red-400
                            "
                        >
                            Earn more on stream
                        </span>

                    </div>

                </div>

                <div
                    className="
                        mt-8
                        border-t
                        border-neutral-800
                        pt-5
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            text-sm
                        "
                    >

                        <span
                            className="
                                text-neutral-500
                            "
                        >
                            Available Balance
                        </span>

                        <span
                            className="
                                font-semibold
                            "
                        >
                            {points.toLocaleString()} pts.
                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}