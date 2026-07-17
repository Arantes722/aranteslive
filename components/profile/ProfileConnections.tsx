import {
    Radio,
    CheckCircle,
    User,
} from "lucide-react";


interface ProfileConnectionsProps {
    user?: any;
    profile?: any;
}



export function ProfileConnections({
    user,
    profile,
}: ProfileConnectionsProps) {


    const avatar =
        profile?.avatar_url ??
        user?.user_metadata?.avatar_url ??
        "/default-avatar.png";



    const username =
        profile?.username ??
        user?.user_metadata?.preferred_username ??
        "Unknown";



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


            <h2
                className="
                    text-lg
                    font-bold
                "
            >
                Connections
            </h2>





            <div
                className="
                    mt-5
                    space-y-4
                "
            >


                {/* Twitch */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
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
                                bg-purple-500/10
                            "
                        >

                            <Radio
                                size={20}
                                className="text-purple-400"
                            />

                        </div>



                        <div>

                            <p className="font-semibold">
                                Twitch
                            </p>


                            <p
                                className="
                                    text-sm
                                    text-neutral-500
                                "
                            >
                                @{username}
                            </p>


                        </div>


                    </div>




                    <CheckCircle
                        size={20}
                        className="text-green-500"
                    />


                </div>







                {/* Avatar */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
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
                            items-center
                            gap-3
                        "
                    >

                        <img
                            src={avatar}
                            alt="avatar"
                            className="
                                h-10
                                w-10
                                rounded-full
                            "
                        />



                        <div>

                            <p className="font-semibold">
                                Avatar
                            </p>


                            <p
                                className="
                                    text-sm
                                    text-neutral-500
                                "
                            >
                                Twitch profile picture
                            </p>


                        </div>


                    </div>



                    <User
                        size={20}
                        className="text-neutral-500"
                    />


                </div>



            </div>


        </section>

    );

}