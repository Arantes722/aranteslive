import { CalendarHeart } from "lucide-react";

interface FollowingCardProps {
    followingSince?: string | null;
}

export default function FollowingCard({
    followingSince,
}: FollowingCardProps) {

    const date = followingSince
        ? new Date(followingSince).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
          })
        : "Not Following";

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
                    from-red-500
                    to-pink-500
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

                        <CalendarHeart
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
                            Following Since
                        </p>

                        <h2
                            className="
                                mt-2
                                text-2xl
                                font-black
                                leading-none
                            "
                        >
                            {date}
                        </h2>

                    </div>

                </div>

            </div>

        </section>

    );

}