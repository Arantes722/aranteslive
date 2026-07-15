import { createClient } from "@/lib/supabase/server";


export async function addPoints(
  userId: string,
  amount: number
) {

  const supabase = await createClient();



  const { data: profile, error } = await supabase
    .from("profiles")
    .select("points")
    .eq("id", userId)
    .single();



  if (error || !profile) {

    console.error(
      "POINTS PROFILE ERROR:",
      error
    );

    return;

  }



  const newPoints =
    (profile.points ?? 0) + amount;



  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      points: newPoints
    })
    .eq(
      "id",
      userId
    );



  if (updateError) {

    console.error(
      "POINTS UPDATE ERROR:",
      updateError
    );

    return;

  }



  console.log(
    `POINTS UPDATED: ${amount}`
  );

}