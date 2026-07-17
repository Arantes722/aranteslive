import {
    getTwitchUser,
    getFollowStatus,
    getSubscribers,
    getModerators,
    getVIPs
}
from "@/lib/twitch/api";





export async function syncTwitchProfile(
    supabase:any,
    profile:any
){



    const token =
        profile.twitch_access_token;



    const twitchId =
        profile.twitch_id;




    if(!token || !twitchId){

        throw new Error(
            "Missing Twitch data"
        );

    }





    const user =
        await getTwitchUser(
            token
        );




    if(!user){

        throw new Error(
            "Twitch user missing"
        );

    }







    const broadcasterId =
        process.env.TWITCH_BROADCASTER_ID!;







    const isFollower =
        await getFollowStatus(

            token,

            twitchId,

            broadcasterId

        );









    let subscribers:any[] = [];

    let moderators:any[] = [];

    let vips:any[] = [];






    try{

        subscribers =
            await getSubscribers(

                token,

                broadcasterId

            );

    }
    catch{

        console.log(
            "Subscriber check failed"
        );

    }






    try{

        moderators =
            await getModerators(

                token,

                broadcasterId

            );

    }
    catch{

        console.log(
            "Moderator check failed"
        );

    }






    try{

        vips =
            await getVIPs(

                token,

                broadcasterId

            );

    }
    catch{

        console.log(
            "VIP check failed"
        );

    }









    const isSubscriber =
        subscribers.some(

            (sub:any)=>

                sub.user_id === twitchId

        );





    const subscriber =
        subscribers.find(

            (sub:any)=>

                sub.user_id === twitchId

        );








    const isModerator =
        moderators.some(

            (mod:any)=>

                mod.user_id === twitchId

        );







    const isVip =
        vips.some(

            (vip:any)=>

                vip.user_id === twitchId

        );









    let role =
        "Viewer";





    if(

        user.login.toLowerCase()
        ===
        process.env.TWITCH_USERNAME!
        .toLowerCase()

    ){

        role =
            "Broadcaster";

    }

    else if(isModerator){

        role =
            "Moderator";

    }

    else if(isVip){

        role =
            "VIP";

    }

    else if(isSubscriber){

        role =
            "Subscriber";

    }

    else if(isFollower){

        role =
            "Follower";

    }









    const {
        error
    } =
    await supabase
        .from("profiles")
        .update({

            twitch_username:
                user.login,


            username:
                user.login,


            avatar_url:
                user.profile_image_url,


            twitch_role:
                role,


            twitch_is_follower:
                isFollower,


            twitch_is_subscriber:
                isSubscriber,


            twitch_is_vip:
                isVip,


            twitch_is_moderator:
                isModerator,


            twitch_is_broadcaster:
                role === "Broadcaster",


            twitch_subscription_tier:
                subscriber?.tier ?? null


        })
        .eq(
            "id",
            profile.id
        );







    if(error){

        throw error;

    }








    return {

        role,

        follower:isFollower,

        subscriber:isSubscriber,

        vip:isVip,

        moderator:isModerator

    };


}