import { createClient } from "@supabase/supabase-js";



const supabaseAdmin = createClient(

    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.SUPABASE_SERVICE_ROLE_KEY!

);





export async function syncTwitchUser(
    userId: string
) {


    const {
        data: profile,
        error: profileError
    } =
    await supabaseAdmin
        .from("profiles")
        .select(
            `
            twitch_id,
            twitch_access_token
            `
        )
        .eq(
            "id",
            userId
        )
        .single();




    if(profileError || !profile){

        console.error(
            "PROFILE NOT FOUND",
            profileError
        );

        return;

    }







    const token =
        profile.twitch_access_token;



    const twitchId =
        profile.twitch_id;





    if(!token || !twitchId){

        console.error(
            "Missing Twitch data"
        );

        return;

    }









    /*
        Verificar dados básicos Twitch
    */


    const userResponse =
        await fetch(

            `https://api.twitch.tv/helix/users?id=${twitchId}`,

            {

                headers: {

                    "Authorization":
                    `Bearer ${token}`,

                    "Client-Id":
                    process.env.TWITCH_CLIENT_ID!

                }

            }

        );





    const userData =
        await userResponse.json();




    const twitchUser =
        userData.data?.[0];








    if(!twitchUser){

        return;

    }









    /*
        Verificar se é follower
    */


    const followersResponse =
        await fetch(

            `https://api.twitch.tv/helix/channels/followers?broadcaster_id=${twitchId}&user_id=${twitchId}`,

            {

                headers: {

                    "Authorization":
                    `Bearer ${token}`,

                    "Client-Id":
                    process.env.TWITCH_CLIENT_ID!

                }

            }

        );




    const followerData =
        await followersResponse.json();






    const isFollower =
        followerData.total > 0;









    /*
        Atualizar perfil
    */


    await supabaseAdmin
        .from("profiles")
        .update({

            twitch_username:
                twitchUser.login,


            username:
                twitchUser.display_name,


            avatar_url:
                twitchUser.profile_image_url,


            twitch_is_follower:
                isFollower,


            twitch_role:
                isFollower
                ?
                "Follower"
                :
                "Viewer"


        })
        .eq(
            "id",
            userId
        );






    console.log(
        "TWITCH SYNC COMPLETE"
    );


}