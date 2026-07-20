import { Radio, Lock } from "lucide-react";

interface ProfileHeaderProps {
    profile?: any;
    user?: any;
}

export function ProfileHeader({
    profile,
    user,
}: ProfileHeaderProps) {

    const username =
        profile?.username ?? "unknown";

    const avatar =
        profile?.avatar_url ??
        "/default-avatar.png";

    const id =
        user?.id
            ? user.id.slice(0, 4)
            : "0000";

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
                    flex
                    flex-col
                    gap-8
                    p-8
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-6
                    "
                >

                    <img
                        src={avatar}
                        alt="Avatar"
                        className="
                            h-32
                            w-32
                            rounded-full
                            border
                            border-neutral-700
                            object-cover
                        "
                    />

                    <div>

                        <h1
                            className="
                                text-4xl
                                font-black
                            "
                        >
                            {username}
                        </h1>

                        <div
                            className="
                                mt-2
                                flex
                                items-center
                                gap-2
                                text-neutral-400
                            "
                        >

                            <span>@{username}</span>

                            <Lock
                                size={14}
                                className="text-neutral-600"
                            />

                        </div>

                        <div
                            className="
                                mt-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-purple-500/20
                                bg-purple-500/10
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-purple-400
                            "
                        >

                            <Radio size={16} />

                            Connected with Twitch

                        </div>

                    </div>

                </div>

                <div
                    className="
                        rounded-2xl
                        border
                        border-neutral-800
                        bg-neutral-900
                        px-5
                        py-4
                        text-center
                        min-w-[140px]
                    "
                >

                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-neutral-500
                        "
                    >
                        User ID
                    </p>

                    <p
                        className="
                            mt-2
                            text-2xl
                            font-bold
                        "
                    >
                        #{id}
                    </p>

                </div>

            </div>

        </section>

    );

}

