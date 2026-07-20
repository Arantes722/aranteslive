import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const twitchClientId = process.env.TWITCH_CLIENT_ID!;

  const redirectUri = `${new URL(request.url).origin}/auth/callback`;

  const scopes = [
    "user:read:email",
    "moderator:read:followers",
    "channel:read:subscriptions",
    "channel:read:vips",
    "moderator:read:moderators",
  ].join(" ");

  const twitchUrl = new URL("https://id.twitch.tv/oauth2/authorize");

  twitchUrl.searchParams.set("client_id", twitchClientId);

  twitchUrl.searchParams.set("redirect_uri", redirectUri);

  twitchUrl.searchParams.set("response_type", "code");

  twitchUrl.searchParams.set("scope", scopes);

  return NextResponse.redirect(twitchUrl.toString());
}
