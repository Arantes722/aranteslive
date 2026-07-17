import { Coins } from "lucide-react";

import { RedeemModal } from "@/components/profile/RedeemModal";


interface ProfilePointsProps {
    points?: number;
}



export function ProfilePoints({
    points = 0,
}: ProfilePointsProps) {


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
                    flex-col
                    gap-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                "
            >


                <div
                    className="
                        flex
                        items-center
                        gap-5
                    "
                >

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-red-500/10
                        "
                    >

                        <Coins
                            size={28}
                            className="text-red-500"
                        />

                    </div>



                    <div>

                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-widest
                                text-neutral-500
                            "
                        >
                            Store Points
                        </p>


                        <div
                            className="
                                mt-1
                                flex
                                items-baseline
                                gap-2
                            "
                        >

                            <span
                                className="
                                    text-4xl
                                    font-bold
                                "
                            >
                                {points}
                            </span>


                            <span
                                className="
                                    text-neutral-400
                                "
                            >
                                pts.
                            </span>

                        </div>


                    </div>


                </div>





                <RedeemModal />


            </div>


        </section>

    );

}