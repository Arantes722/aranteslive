import { Clock3 } from "lucide-react";

interface WatchtimeCardProps {
    minutes?: number;
}

export default function WatchtimeCard({
    minutes = 0,
}: WatchtimeCardProps) {

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return (

        <section
            className="
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
                    from-cyan-500
                    to-blue-500
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
                            bg-cyan-500/10
                        "
                    >

                        <Clock3
                            size={22}
                            className="text-cyan-400"
                        />

                    </div>

                    <div
                        className="
                            flex
                            flex-col
                            gap-1
                        "
                    >

                        <p
                            className="
                                text-[10px]
                                uppercase
                                tracking-[0.20em]
                                text-neutral-500
                            "
                        >
                            Watchtime
                        </p>

                        <h2
                            className="
                                text-2xl
                                font-black
                                leading-none
                            "
                        >
                            {hours}h {remainingMinutes}m
                        </h2>

                    </div>

                </div>

            </div>

        </section>

    );

}