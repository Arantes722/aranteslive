import { createClient } from "@/lib/supabase/server";

import {
  getFollowerStatus,
  getSubscribers,
  getVIPs,
  getModerators,
} from "./api";

interface SyncTwitchProfileProps {
  userId: string;

  twitchId: string;

  twitchToken: string;
}

export async function syncTwitchProfile({
  userId,

  twitchId,

  twitchToken,
}: SyncTwitchProfileProps) {
  const supabase = await createClient();

  const broadcasterId = process.env.TWITCH_BROADCASTER_ID!;

  let follower = {
    isFollower: false,
    followedAt: null,
  };

  let subscribers: any[] = [];

  let vips: any[] = [];

  let moderators: any[] = [];

  try {
    follower = await getFollowerStatus(twitchToken, broadcasterId, twitchId);
  } catch (error) {
    console.log("FOLLOW CHECK FAILED");
  }

  try {
    subscribers = await getSubscribers(twitchToken, broadcasterId);
  } catch (error) {
    console.log("SUB CHECK FAILED");
  }

  try {
    vips = await getVIPs(twitchToken, broadcasterId);
  } catch (error) {
    console.log("VIP CHECK FAILED");
  }

  try {
    moderators = await getModerators(twitchToken, broadcasterId);
  } catch (error) {
    console.log("MOD CHECK FAILED");
  }

  const subscription = subscribers.find((sub) => sub.user_id === twitchId);

  const isVip = vips.some((vip) => vip.user_id === twitchId);

  const isModerator = moderators.some((mod) => mod.user_id === twitchId);

  const { error } = await supabase
    .from("profiles")
    .update({
      twitch_is_follower: follower.isFollower,

      twitch_following_since: follower.followedAt,

      twitch_is_subscriber: !!subscription,

      twitch_subscription_tier: subscription?.tier ?? null,

      twitch_is_vip: isVip,

      twitch_is_moderator: isModerator,
    })
    .eq("id", userId);

  if (error) {
    throw error;
  }

  console.log("TWITCH SYNC COMPLETE");
}
