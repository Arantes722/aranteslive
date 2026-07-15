const clientId = process.env.TWITCH_CLIENT_ID!;
const clientSecret = process.env.TWITCH_CLIENT_SECRET!;
const username = process.env.TWITCH_USERNAME!;


let cachedToken = "";
let tokenExpires = 0;



async function getAccessToken() {


  if (cachedToken && Date.now() < tokenExpires) {
    return cachedToken;
  }



  const response = await fetch(
    "https://id.twitch.tv/oauth2/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    }
  );


  const data = await response.json();


  cachedToken = data.access_token;

  tokenExpires =
    Date.now() + (data.expires_in * 1000);



  return cachedToken;

}





export async function getStreamStatus() {


  const token = await getAccessToken();




  const userResponse = await fetch(
    `https://api.twitch.tv/helix/users?login=${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-ID": clientId,
      },
      next:{
        revalidate:60
      }
    }
  );



  const userData = await userResponse.json();


  const user = userData.data?.[0];



  if (!user) {

    return {
      live:false,
    };

  }





  const streamResponse = await fetch(
    `https://api.twitch.tv/helix/streams?user_id=${user.id}`,
    {
      headers:{
        Authorization:`Bearer ${token}`,
        "Client-ID":clientId,
      },
      next:{
        revalidate:60
      }
    }
  );



  const streamData = await streamResponse.json();


  const stream = streamData.data?.[0];



  if (!stream) {


    return {

      live:false,

      avatar:user.profile_image_url,

    };

  }




  return {


    live:true,


    title:stream.title,


    game:stream.game_name,


    viewers:stream.viewer_count,


    thumbnail:
      stream.thumbnail_url
      .replace("{width}","600")
      .replace("{height}","400"),


    avatar:user.profile_image_url,


  };


}