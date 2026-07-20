import {
    Link2,
    CheckCircle2,
} from "lucide-react";

interface ConnectionCardProps {
    username?: string;
}

export default function ConnectionCard({
    username = "Unknown",
}: ConnectionCardProps) {

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
                    from-purple-600
                    via-purple-500
                    to-purple-400
                "
            />

            <div
                className="
                    flex
                    h-[135px]
                    items-center
                    justify-between
                    p-5
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-purple-500/10
                        "
                    >

                        <Link2
                            size={18}
                            className="text-purple-400"
                        />

                    </div>

                    <div>

                        <p
                            className="
                                text-[9px]
                                uppercase
                                tracking-[0.20em]
                                text-neutral-500
                            "
                        >
                            Connected Account
                        </p>

                        <h2
                            className="
                                mt-1
                                text-xl
                                font-bold
                                leading-none
                            "
                        >
                            Twitch
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-neutral-500
                            "
                        >
                            @{username}
                        </p>

                    </div>

                </div>

                <div
                    className="
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-green-500/20
                        bg-green-500/10
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-green-400
                    "
                >

                    <CheckCircle2 size={14} />

                    Connected

                </div>

            </div>

        </section>

    );

}