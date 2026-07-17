const TWITCH_API =
    "https://api.twitch.tv/helix";


const CLIENT_ID =
    process.env.TWITCH_CLIENT_ID!;





async function twitchFetch(
    endpoint:string,
    token:string
){

    const response =
        await fetch(

            `${TWITCH_API}${endpoint}`,

            {
                headers:{

                    "Authorization":
                        `Bearer ${token}`,

                    "Client-Id":
                        CLIENT_ID,

                }
            }

        );




    if(!response.ok){


        const error =
            await response.text();


        console.log(
            "TWITCH API ERROR:",
            error
        );


        return {
            data:[]
        };


    }




    return response.json();

}








export async function getTwitchUser(
    token:string
){


    const data =
        await twitchFetch(
            "/users",
            token
        );


    return data.data?.[0] ?? null;


}









export async function getFollowStatus(
    token:string,
    userId:string,
    broadcasterId:string
){

    const data =
        await twitchFetch(
            `/channels/followed?user_id=${userId}&broadcaster_id=${broadcasterId}`,
            token
        );


    return (
        data.data?.length ?? 0
    ) > 0;

}









export async function getSubscribers(

    token:string,

    broadcasterId:string

){


    const data =
        await twitchFetch(

            `/subscriptions?broadcaster_id=${broadcasterId}`,

            token

        );



    return data.data ?? [];

}









export async function getModerators(

    token:string,

    broadcasterId:string

){


    const data =
        await twitchFetch(

            `/moderation/moderators?broadcaster_id=${broadcasterId}`,

            token

        );



    return data.data ?? [];

}









export async function getVIPs(

    token:string,

    broadcasterId:string

){


    const data =
        await twitchFetch(

            `/channels/vips?broadcaster_id=${broadcasterId}`,

            token

        );



    return data.data ?? [];

}