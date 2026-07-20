export async function getTwitchAccessToken() {


    const response =
        await fetch(
            "https://id.twitch.tv/oauth2/token",
            {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded",
                },

                body: new URLSearchParams({

                    client_id:
                        process.env.TWITCH_CLIENT_ID!,

                    client_secret:
                        process.env.TWITCH_CLIENT_SECRET!,

                    grant_type:
                        "client_credentials",

                }),

            }
        );



    if (!response.ok) {

        const error =
            await response.text();


        console.log(
            "TWITCH TOKEN ERROR:",
            error
        );


        throw new Error(
            "Failed to get Twitch token"
        );

    }



    const data =
        await response.json();



    return data.access_token;

}