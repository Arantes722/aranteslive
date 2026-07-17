interface ProfileStatsProps {
    following?: number | string | null;
    followingSince?: string | null;
    watchtime?: number | null;
    giveawaysWon?: number | null;
}



function formatWatchtime(hours?: number | null) {

    if (!hours) {
        return "0h";
    }


    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;


    if (days > 0) {
        return `${days}d ${remainingHours}h`;
    }


    return `${hours}h`;

}




export function ProfileStats({

    following,
    followingSince,
    watchtime,
    giveawaysWon,

}: ProfileStatsProps) {



    return (

        <section
            className="
                grid
                gap-4
                md:grid-cols-3
            "
        >




            {/* Following */}


            <div
                className="
                    rounded-2xl
                    border
                    border-neutral-800
                    bg-[#080808]
                    p-5
                "
            >

                <p className="text-sm text-neutral-500">
                    Following
                </p>


                <p
                    className="
                        mt-2
                        text-2xl
                        font-bold
                    "
                >
                    {followingSince
                        ?
                        new Date(followingSince)
                            .toLocaleDateString("pt-PT")
                        :
                        "Unknown"
                    }
                </p>


                <p className="mt-1 text-xs text-neutral-600">
                    Following since
                </p>


            </div>









            {/* Watchtime */}


            <div
                className="
                    rounded-2xl
                    border
                    border-neutral-800
                    bg-[#080808]
                    p-5
                "
            >

                <p className="text-sm text-neutral-500">
                    Watchtime
                </p>



                <p
                    className="
                        mt-2
                        text-2xl
                        font-bold
                    "
                >
                    {formatWatchtime(watchtime)}
                </p>



                <p className="mt-1 text-xs text-neutral-600">
                    Total watched
                </p>


            </div>









            {/* Raffles */}


            <div
                className="
                    rounded-2xl
                    border
                    border-neutral-800
                    bg-[#080808]
                    p-5
                "
            >

                <p className="text-sm text-neutral-500">
                    Raffles Won
                </p>



                <p
                    className="
                        mt-2
                        text-2xl
                        font-bold
                    "
                >
                    {giveawaysWon ?? 0}
                </p>



                <p className="mt-1 text-xs text-neutral-600">
                    Community rewards
                </p>


            </div>





        </section>

    );

}