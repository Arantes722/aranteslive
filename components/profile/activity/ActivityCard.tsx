import { Activity } from "lucide-react";

import ActivityItem from "./ActivityItem";

interface ActivityCardProps {
    activities: any[];
}

export default function ActivityCard({
    activities,
}: ActivityCardProps) {

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
                    h-1
                    bg-gradient-to-r
                    from-red-600
                    via-red-500
                    to-red-400
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
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            bg-red-500/10
                        "
                    >

                        <Activity
                            size={20}
                            className="text-red-500"
                        />

                    </div>

                    <div>

                        <h2
                            className="
                                text-xl
                                font-bold
                            "
                        >
                            Activity
                        </h2>

                        <p
                            className="
                                text-sm
                                text-neutral-500
                            "
                        >
                            Recent profile activity
                        </p>

                    </div>

                </div>

                <div
                    className="
                        mt-7
                        space-y-4
                    "
                >

                    {activities.length === 0 ? (

                        <div
                            className="
                                rounded-2xl
                                border
                                border-dashed
                                border-neutral-700
                                py-10
                                text-center
                                text-neutral-500
                            "
                        >
                            No activity yet.
                        </div>

                    ) : (

                        activities.map((activity) => (

                            <ActivityItem
                                key={activity.id}
                                type={activity.type}
                                title={activity.title}
                                description={activity.description}
                                points={activity.points}
                                createdAt={activity.created_at}
                            />

                        ))

                    )}

                </div>

            </div>

        </section>

    );

}