import {
    Radio,
    CheckCircle2,
    Link2,
} from "lucide-react";

interface ProfileConnectionsProps {
    user?: any;
    profile?: any;
}

export function ProfileConnections({
    user,
    profile,
}: ProfileConnectionsProps) {

    const username =
        profile?.username ??
        user?.user_metadata?.preferred_username ??
        "Unknown";

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
                    from-purple-600
                    via-purple-500
                    to-purple-400
                "
            />

            <div className="p-7">

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
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-purple-500/10
                        "
                    >

                        <Link2
                            size={22}
                            className="text-purple-400"
                        />

                    </div>

                    <div>

                        <h2
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            Connections
                        </h2>

                        <p
                            className="
                                text-sm
                                text-neutral-500
                            "
                        >
                            Linked accounts
                        </p>

                    </div>

                </div>

                <div
                    className="
                        mt-8
                        rounded-2xl
                        border
                        border-neutral-800
                        bg-neutral-900/60
                        p-5
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
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-purple-500/10
                                "
                            >

                                <Radio
                                    size={22}
                                    className="text-purple-400"
                                />

                            </div>

                            <div>

                                <h3
                                    className="
                                        font-semibold
                                    "
                                >
                                    Twitch
                                </h3>

                                <p
                                    className="
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
                                gap-2
                                rounded-full
                                border
                                border-green-500/20
                                bg-green-500/10
                                px-3
                                py-1
                                text-sm
                                font-medium
                                text-green-400
                            "
                        >

                            <CheckCircle2 size={16} />

                            Connected

                        </div>

                    </div>

                </div>

                <div
                    className="
                        mt-6
                        rounded-2xl
                        border
                        border-dashed
                        border-neutral-700
                        p-5
                        text-center
                    "
                >

                    <p
                        className="
                            text-sm
                            text-neutral-500
                        "
                    >
                        More account connections will be available soon.
                    </p>

                </div>

            </div>

        </section>

    );

}