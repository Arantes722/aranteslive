import { createClient } from "@/lib/supabase/server";


interface GetRewardProps {
    type: string;
    tier?: string | null;
}


export async function getReward({
    type,
    tier = null,
}: GetRewardProps) {

    const supabase = await createClient();


    // Procurar recompensa específica do tier
    if (tier) {

        const { data: tierReward } =
            await supabase
                .from("point_rewards")
                .select("amount")
                .eq("type", type)
                .eq("tier", tier)
                .eq("active", true)
                .single();


        if (tierReward) {
            return tierReward.amount;
        }

    }



    // Caso contrário usa recompensa normal
    const { data: defaultReward } =
        await supabase
            .from("point_rewards")
            .select("amount")
            .eq("type", type)
            .is("tier", null)
            .eq("active", true)
            .single();



    return defaultReward?.amount ?? 0;

}