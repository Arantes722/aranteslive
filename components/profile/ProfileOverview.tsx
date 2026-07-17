import { CalendarDays, ShieldCheck } from "lucide-react";

interface ProfileOverviewProps {
    profile: any;
}

export function ProfileOverview({
    profile,
}: ProfileOverviewProps) {

    const memberSince =
        profile?.created_at
            ? new Date(profile.created_at).toLocaleDateString(
                  "en-GB",
                  {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                  }
              )
            : "Unknown";

    const role =
        profile?.twitch_role ?? "Viewer";

    return (

        <div
            className="
                grid
                gap-6
                lg:grid-cols-2
            "
        >

            <section
                className="
                    rounded-3xl
                    border
                    border-neutral-800
                    bg-[#080808]
                    p-6
                "
            >

                <div className="flex items-center gap-4">

                    <div
                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-red-500/10
                        "
                    >

                        <CalendarDays
                            size={22}
                            className="text-red-500"
                        />

                    </div>

                    <div>

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-wider
                                text-neutral-500
                            "
                        >
                            Member Since
                        </p>

                        <h3
                            className="
                                mt-1
                                text-xl
                                font-bold
                            "
                        >
                            {memberSince}
                        </h3>

                    </div>

                </div>

            </section>

            <section
                className="
                    rounded-3xl
                    border
                    border-neutral-800
                    bg-[#080808]
                    p-6
                "
            >

                <div className="flex items-center gap-4">

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

                        <ShieldCheck
                            size={22}
                            className="text-purple-400"
                        />

                    </div>

                    <div>

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-wider
                                text-neutral-500
                            "
                        >
                            Account Status
                        </p>

                        <h3
                            className="
                                mt-1
                                text-xl
                                font-bold
                            "
                        >
                            {role}
                        </h3>

                    </div>

                </div>

            </section>

        </div>

    );

}