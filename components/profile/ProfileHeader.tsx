import {
    Radio,
    Crown,
    Shield,
    Star,
    Lock,
} from "lucide-react";



interface ProfileHeaderProps {

    profile?: any;
    user?: any;

}







export function ProfileHeader({
    profile,
    user,
}: ProfileHeaderProps) {




    const username =
        profile?.username
        ??
        "unknown";



    const avatar =
        profile?.avatar_url
        ??
        "/default-avatar.png";





    const id =
        user?.id
        ?
        user.id.slice(0,4)
        :
        "0000";







    /*
        Twitch data
    */


    const twitchRole =
        profile?.twitch_role
        ??
        "Viewer";



    const subscriptionTier =
        profile?.twitch_subscription_tier
        ??
        null;



    const isVip =
        profile?.twitch_is_vip
        ??
        false;



    const isModerator =
        profile?.twitch_is_moderator
        ??
        false;



    const isBroadcaster =
        profile?.twitch_is_broadcaster
        ??
        false;



    const isFollower =
        profile?.twitch_is_follower
        ??
        false;








    return (

        <section
            className="
                border
                border-neutral-800
                bg-[#080808]
                rounded-3xl
                p-8
            "
        >




            <div
                className="
                    flex
                    flex-col
                    gap-8
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >







                {/* USER */}


                <div
                    className="
                        flex
                        items-center
                        gap-6
                    "
                >





                    <img
                        src={avatar}
                        alt="Avatar"
                        className="
                            h-28
                            w-28
                            rounded-full
                            object-cover
                            border
                            border-neutral-700
                        "
                    />







                    <div>




                        <h1
                            className="
                                text-4xl
                                font-bold
                            "
                        >

                            {username}

                        </h1>






                        <div
                            className="
                                mt-2
                                flex
                                items-center
                                gap-2
                                text-neutral-400
                            "
                        >


                            <span>
                                @{username}
                            </span>



                            <Lock
                                size={13}
                                className="text-neutral-600"
                            />


                        </div>









                        <div
                            className="
                                mt-5
                                flex
                                flex-wrap
                                gap-2
                            "
                        >






                            {/* TWITCH CONNECTED */}


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-purple-500/30
                                    bg-purple-500/10
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-purple-400
                                "
                            >

                                <Radio size={14}/>


                                Twitch Connected


                            </div>









                            {/* VIEWER */}


                            {
                                twitchRole === "Viewer" && (


                                    <div
                                        className="
                                            rounded-full
                                            border
                                            border-neutral-700
                                            bg-neutral-900
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            text-neutral-400
                                        "
                                    >

                                        Viewer

                                    </div>


                                )
                            }









                            {/* FOLLOWER */}


                            {
                                isFollower && (


                                    <div
                                        className="
                                            rounded-full
                                            border
                                            border-blue-500/30
                                            bg-blue-500/10
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            text-blue-400
                                        "
                                    >

                                        Follower

                                    </div>


                                )
                            }









                            {/* SUBSCRIBER */}



                            {
                                subscriptionTier && (


                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-yellow-500/30
                                            bg-yellow-500/10
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            text-yellow-400
                                        "
                                    >


                                        <Crown size={14}/>


                                        Subscriber


                                        {" Tier "}


                                        {subscriptionTier}


                                    </div>


                                )
                            }









                            {/* VIP */}


                            {
                                isVip && (


                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-pink-500/30
                                            bg-pink-500/10
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            text-pink-400
                                        "
                                    >


                                        <Star size={14}/>


                                        VIP


                                    </div>


                                )
                            }









                            {/* MODERATOR */}



                            {
                                isModerator && (


                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-green-500/30
                                            bg-green-500/10
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            text-green-400
                                        "
                                    >


                                        <Shield size={14}/>


                                        Moderator


                                    </div>


                                )
                            }









                            {/* BROADCASTER */}



                            {
                                isBroadcaster && (


                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-red-500/30
                                            bg-red-500/10
                                            px-3
                                            py-1
                                            text-xs
                                            font-semibold
                                            text-red-400
                                        "
                                    >


                                        <Star size={14}/>


                                        Broadcaster


                                    </div>


                                )
                            }




                        </div>





                    </div>





                </div>









                {/* USER ID */}



                <div
                    className="
                        rounded-2xl
                        border
                        border-neutral-800
                        bg-neutral-900
                        px-8
                        py-5
                    "
                >



                    <p
                        className="
                            text-xs
                            uppercase
                            tracking-wider
                            text-neutral-500
                        "
                    >

                        User ID

                    </p>




                    <p
                        className="
                            mt-2
                            text-2xl
                            font-bold
                        "
                    >

                        #{id}

                    </p>



                </div>





            </div>




        </section>

    );

}