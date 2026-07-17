import {
    History,
    Plus,
    Minus,
} from "lucide-react";


interface Activity {

    id: string;
    title: string;
    description?: string | null;
    points?: number | null;
    created_at: string;

}



interface ProfileActivityProps {

    activities?: Activity[];

}



export function ProfileActivity({

    activities = [],

}: ProfileActivityProps) {


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
                    gap-3
                "
            >

                <History
                    size={24}
                    className="text-red-500"
                />


                <h2
                    className="
                        text-xl
                        font-bold
                    "
                >
                    Activity
                </h2>


            </div>






            {
                activities.length === 0 ?

                (

                    <p
                        className="
                            mt-6
                            text-sm
                            text-neutral-500
                        "
                    >
                        No recent activity.
                    </p>

                )


                :

                (

                    <div
                        className="
                            mt-6
                            space-y-3
                        "
                    >

                        {
                            activities.map((activity) => {


                                const positive =
                                    (activity.points ?? 0) > 0;



                                return (

                                    <div
                                        key={activity.id}
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            rounded-2xl
                                            border
                                            border-neutral-800
                                            bg-neutral-900
                                            px-5
                                            py-4
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
                                                className={`
                                                    flex
                                                    h-10
                                                    w-10
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    ${
                                                        positive
                                                        ? "bg-green-500/10"
                                                        : "bg-red-500/10"
                                                    }
                                                `}
                                            >

                                                {
                                                    positive ?

                                                    (
                                                        <Plus
                                                            size={18}
                                                            className="text-green-500"
                                                        />
                                                    )

                                                    :

                                                    (
                                                        <Minus
                                                            size={18}
                                                            className="text-red-500"
                                                        />
                                                    )

                                                }


                                            </div>





                                            <div>


                                                <p
                                                    className="
                                                        font-semibold
                                                    "
                                                >
                                                    {activity.title}
                                                </p>


                                                {
                                                    activity.description &&

                                                    <p
                                                        className="
                                                            text-sm
                                                            text-neutral-500
                                                        "
                                                    >
                                                        {activity.description}
                                                    </p>

                                                }



                                                <p
                                                    className="
                                                        mt-1
                                                        text-xs
                                                        text-neutral-600
                                                    "
                                                >
                                                    {
                                                        new Date(
                                                            activity.created_at
                                                        ).toLocaleDateString(
                                                            "pt-PT"
                                                        )
                                                    }
                                                </p>


                                            </div>



                                        </div>







                                        <span
                                            className={`
                                                font-bold
                                                ${
                                                    positive
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                }
                                            `}
                                        >

                                            {
                                                positive
                                                ? "+"
                                                : ""
                                            }

                                            {activity.points ?? 0}
                                            {" "}pts

                                        </span>


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