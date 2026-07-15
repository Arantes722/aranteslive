import { createClient } from "@/lib/supabase/server";


export async function addExperience(
  userId: string,
  amount: number
) {

  const supabase = await createClient();


  const { data: profile, error } = await supabase
    .from("profiles")
    .select("experience, level, points")
    .eq("id", userId)
    .single();



  console.log("XP PROFILE:", profile);
  console.log("XP ERROR:", error);



  if (!profile) {
    return;
  }



  const newExperience =
    (profile.experience ?? 0) + amount;


  const newLevel =
    Math.floor(newExperience / 100) + 1;



  const { error: updateError } = await supabase
    .from("profiles")
    .update({
      experience: newExperience,
      level: newLevel,
      points: (profile.points ?? 0) + amount,
    })
    .eq("id", userId);



  console.log("XP UPDATE ERROR:", updateError);


  if (!updateError) {

    console.log(
      `XP UPDATED: +${amount}`
    );

  }

}