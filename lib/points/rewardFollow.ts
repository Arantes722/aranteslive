import { createClient } from "@/lib/supabase/server";

import { addPoints } from "./points";
import { getReward } from "./getReward";


interface RewardFollowProps {
    userId: string;
}


export async function rewardFollow({
    userId,
}: RewardFollowProps) {


    const supabase = await createClient();



    // Buscar estado atual
    const { data: profile, error } =
        await supabase
            .from("profiles")
            .select(
                `
                twitch_is_follower
                `
            )
            .eq("id", userId)
            .single();



    if (error || !profile) {
        throw new Error(
            "Profile not found"
        );
    }



    // Já recebeu o reward
    if (profile.twitch_is_follower) {
        return;
    }



    // Buscar valor configurado
    const points =
        await getReward({

            type: "FOLLOW"

        });



    if (points <= 0) {
        return;
    }



    // Adicionar pontos
    await addPoints({

        userId,

        amount: points,

        type: "FOLLOW",

        description:
            "Followed the channel"

    });



    // Marcar como follower
    await supabase
        .from("profiles")
        .update({

            twitch_is_follower: true

        })
        .eq(
            "id",
            userId
        );

}