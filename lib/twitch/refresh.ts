const CLIENT_ID =
process.env.TWITCH_CLIENT_ID!;


const CLIENT_SECRET =
process.env.TWITCH_CLIENT_SECRET!;



export async function refreshTwitchToken(
    refreshToken:string
){

    const response =
        await fetch(
            "https://id.twitch.tv/oauth2/token",
            {

                method:"POST",

                headers:{
                    "Content-Type":
                    "application/x-www-form-urlencoded"
                },


                body:
                new URLSearchParams({

                    grant_type:
                    "refresh_token",

                    refresh_token:
                    refreshToken,

                    client_id:
                    CLIENT_ID,

                    client_secret:
                    CLIENT_SECRET,

                })

            }
        );





    if(!response.ok){

        throw new Error(
            "Failed refreshing Twitch token"
        );

    }




    return response.json();

}