import { Award } from "lucide-react";


interface BadgeData {
    name: string;
    description: string;
    image_url?: string | null;
}


interface UserBadge {
    id: string;
    earned_at: string;
    badges: BadgeData[];
}



interface ProfileBadgesProps {
    badges?: UserBadge[];
}



export function ProfileBadges({
    badges = [],
}: ProfileBadgesProps) {


    const totalBadges = badges.length;



    return (

        <section
            className="
                rounded-3xl
                border
                border-neutral-800
                bg-[#080808]
                p-8
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
                        gap-3
                    "
                >

                    <Award
                        size={24}
                        className="text-red-500"
                    />


                    <h2
                        className="
                            text-xl
                            font-bold
                        "
                    >
                        Badges
                    </h2>


                </div>



                <span
                    className="
                        rounded-full
                        border
                        border-neutral-800
                        bg-neutral-900
                        px-3
                        py-1
                        text-xs
                        text-neutral-400
                    "
                >
                    Total {totalBadges}
                </span>


            </div>







            {
                badges.length === 0 ?

                (

                    <p
                        className="
                            mt-6
                            text-sm
                            text-neutral-500
                        "
                    >
                        No badges unlocked yet.
                    </p>

                )


                :

                (

                    <div
                        className="
                            mt-6
                            grid
                            gap-3
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {
                            badges.map((item) => {

                                const badge = item.badges?.[0];


                                if (!badge) return null;



                                return (

                                    <div
                                        key={item.id}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            rounded-2xl
                                            border
                                            border-neutral-800
                                            bg-neutral-900
                                            p-4
                                        "
                                    >


                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-red-500/10
                                            "
                                        >

                                            {
                                                badge.image_url ?

                                                (
                                                    <img
                                                        src={badge.image_url}
                                                        alt={badge.name}
                                                        className="
                                                            h-7
                                                            w-7
                                                            object-contain
                                                        "
                                                    />
                                                )

                                                :

                                                (
                                                    <Award
                                                        size={18}
                                                        className="text-red-500"
                                                    />
                                                )

                                            }


                                        </div>





                                        <div
                                            className="
                                                min-w-0
                                            "
                                        >

                                            <p
                                                className="
                                                    truncate
                                                    text-sm
                                                    font-semibold
                                                "
                                            >
                                                {badge.name}
                                            </p>


                                            <p
                                                className="
                                                    truncate
                                                    text-xs
                                                    text-neutral-500
                                                "
                                            >
                                                {badge.description}
                                            </p>


                                        </div>



                                    </div>

                                );

                            })
                        }


                    </div>

                )

            }


        </section>

    );

}