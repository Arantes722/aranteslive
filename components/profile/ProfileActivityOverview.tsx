interface ActivityOverviewProps {
    activities?: any[];
}



export function ProfileActivityOverview({
    activities = [],
}: ActivityOverviewProps) {



    const categories = {
        All: activities.length,

        Shop: activities.filter(
            (activity) =>
                activity.category === "shop"
        ).length,


        Raffles: activities.filter(
            (activity) =>
                activity.category === "raffle"
        ).length,


        Stream: activities.filter(
            (activity) =>
                activity.category === "stream"
        ).length,


        Originals: activities.filter(
            (activity) =>
                activity.category === "original"
        ).length,


        "World Cup": activities.filter(
            (activity) =>
                activity.category === "worldcup"
        ).length,

    };





    return (

        <section
            className="
                rounded-3xl
                border
                border-neutral-800
                bg-[#080808]
                p-6
            "
        >


            <div
                className="
                    mb-6
                    flex
                    items-center
                    justify-between
                "
            >

                <h2 className="text-lg font-bold">
                    Activity Overview
                </h2>


                <span
                    className="
                        text-xs
                        text-neutral-500
                    "
                >
                    Total activity
                </span>


            </div>







            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-3
                    xl:grid-cols-6
                "
            >


                {Object.entries(categories).map(
                    ([name,value]) => (

                        <div
                            key={name}
                            className="
                                rounded-2xl
                                border
                                border-neutral-800
                                bg-neutral-900
                                p-5
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    text-neutral-500
                                "
                            >
                                {name}
                            </p>


                            <p
                                className="
                                    mt-2
                                    text-3xl
                                    font-bold
                                "
                            >
                                {value}
                            </p>


                        </div>

                    )
                )}


            </div>



        </section>

    );

}