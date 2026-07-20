import {
    CalendarHeart,
    Clock3,
} from "lucide-react";

interface ProfileOverviewProps {
    profile: any;
}

export function ProfileOverview({
    profile,
}: ProfileOverviewProps) {

    const followingDate =
        profile?.following_since
            ? new Date(profile.following_since)
            : null;

    const followingSince =
        followingDate
            ? followingDate.toLocaleDateString(
                  "en-GB",
                  {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                  }
              )
            : "Not following";

    const watchtimeMinutes =
        profile?.watchtime_minutes ?? 0;

    const hours =
        Math.floor(
            watchtimeMinutes / 60
        );

    const minutes =
        watchtimeMinutes % 60;

    return (

        <div
            className="
                grid
                h-full
                grid-cols-2
                gap-6
            "
        >

            {/* Following Since */}

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
                        w-full
                        bg-gradient-to-r
                        from-red-500
                        to-pink-500
                    "
                />

                <div
                    className="
                        flex
                        h-[135px]
                        items-center
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
                                bg-red-500/10
                            "
                        >

                            <CalendarHeart
                                size={18}
                                className="text-red-500"
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
                                Following Since
                            </p>

                            <h2
                                className="
                                    mt-1
                                    text-xl
                                    font-bold
                                    leading-none
                                "
                            >
                                {followingSince}
                            </h2>

                        </div>

                    </div>

                </div>

            </section>

            {/* Watchtime */}

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
                        w-full
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
                                bg-cyan-500/10
                            "
                        >

                            <Clock3
                                size={18}
                                className="text-cyan-400"
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
                                Watchtime
                            </p>

                            <h2
                                className="
                                    mt-1
                                    text-xl
                                    font-bold
                                    leading-none
                                "
                            >
                                {hours}h {minutes}m
                            </h2>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    );

}