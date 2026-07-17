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


        console.error(
            "TWITCH API ERROR:",
            response.status,
            error
        );


        throw new Error(
            `Twitch API error ${response.status}`
        );

    }



    return response.json();

}







export interface TwitchSubscription {

    user_id:string;

    tier:string;

}






export interface TwitchModerator {

    user_id:string;

}






export interface TwitchVIP {

    user_id:string;

}







export async function getSubscribers(
    token:string,
    broadcasterId:string
):Promise<TwitchSubscription[]> {


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
):Promise<TwitchModerator[]> {


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
):Promise<TwitchVIP[]> {


    const data =
        await twitchFetch(

            `/channels/vips?broadcaster_id=${broadcasterId}`,

            token

        );



    return data.data ?? [];

}








export async function getFollowerStatus(

    token:string,

    broadcasterId:string,

    userId:string

):Promise<boolean>{



    const data =
        await twitchFetch(

            `/channels/followers?broadcaster_id=${broadcasterId}&user_id=${userId}`,

            token

        );



    return (
        data.data &&
        data.data.length > 0
    );

}