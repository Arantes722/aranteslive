import { createClient } from "@/lib/supabase/server";


interface AddPointsProps {
    userId: string;
    amount: number;
    type: string;
    description?: string;
}


export async function addPoints({
    userId,
    amount,
    type,
    description,
}: AddPointsProps) {

    const supabase = await createClient();



    const { data: profile, error: profileError } =
        await supabase
            .from("profiles")
            .select("points")
            .eq("id", userId)
            .single();



    if (profileError || !profile) {
        throw new Error(
            "Profile not found"
        );
    }



    const currentPoints =
        profile.points ?? 0;



    const newBalance =
        Math.max(
            0,
            currentPoints + amount
        );



    const { error: updateError } =
        await supabase
            .from("profiles")
            .update({

                points: newBalance

            })
            .eq(
                "id",
                userId
            );



    if (updateError) {
        throw updateError;
    }



    const { error: transactionError } =
        await supabase
            .from("point_transactions")
            .insert({

                user_id: userId,

                amount,

                type,

                description,

            });



    if (transactionError) {
        throw transactionError;
    }



    return newBalance;

}