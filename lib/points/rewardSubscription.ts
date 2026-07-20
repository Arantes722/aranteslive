import { createClient } from "@/lib/supabase/server";

import { addPoints } from "./points";
import { getReward } from "./getReward";


interface RewardSubscriptionProps {
    userId: string;
    tier: string;
}


export async function rewardSubscription({
    userId,
    tier,
}: RewardSubscriptionProps) {


    const supabase = await createClient();



    // Buscar estado atual
    const { data: profile, error } =
        await supabase
            .from("profiles")
            .select(
                `
                twitch_is_subscriber,
                twitch_subscription_tier
                `
            )
            .eq("id", userId)
            .single();



    if (error || !profile) {
        throw new Error(
            "Profile not found"
        );
    }



    /*
        Evitar receber pontos várias vezes
        pela mesma subscrição
    */
    if (
        profile.twitch_is_subscriber &&
        profile.twitch_subscription_tier === tier
    ) {
        return;
    }



    // Buscar recompensa do tier
    const points =
        await getReward({

            type: "SUB",

            tier

        });



    if (points <= 0) {
        return;
    }



    // Adicionar pontos
    await addPoints({

        userId,

        amount: points,

        type: "SUB",

        description:
            `Subscribed Tier ${tier}`

    });



    // Atualizar perfil Twitch
    await supabase
        .from("profiles")
        .update({

            twitch_is_subscriber: true,

            twitch_subscription_tier: tier

        })
        .eq(
            "id",
            userId
        );

}