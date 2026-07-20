import { createClient } from "@/lib/supabase/server";

import { addPoints } from "./points";
import { getReward } from "./getReward";


interface RewardWatchtimeProps {
    userId: string;
    minutes: number;
}


export async function rewardWatchtime({
    userId,
    minutes,
}: RewardWatchtimeProps) {


    const supabase = await createClient();



    // Buscar dados do utilizador
    const { data: profile, error } =
        await supabase
            .from("profiles")
            .select(
                `
                twitch_subscription_tier,
                watchtime
                `
            )
            .eq("id", userId)
            .single();



    if (error || !profile) {
        throw new Error(
            "Profile not found"
        );
    }



    // Recompensa a cada 10 minutos
    const cycles =
        Math.floor(minutes / 10);



    if (cycles <= 0) {
        return;
    }



    // Buscar valor configurado no Supabase
    const pointsPerCycle =
        await getReward({

            type: "WATCH_TIME",

            tier:
                profile.twitch_subscription_tier

        });



    const totalPoints =
        pointsPerCycle * cycles;



    if (totalPoints <= 0) {
        return;
    }



    // Adicionar pontos + histórico
    await addPoints({

        userId,

        amount: totalPoints,

        type: "WATCH_TIME",

        description:
            `Watched ${cycles * 10} minutes of live`

    });



    // Atualizar watchtime
    await supabase
        .from("profiles")
        .update({

            watchtime:
                (profile.watchtime ?? 0)
                +
                (cycles * 10)

        })
        .eq(
            "id",
            userId
        );

}