import { createClient } from "@/lib/supabase/server";


export async function addActivity({
  userId,
  type,
  title,
  description,
  points = 0,
}: {
  userId: string;
  type: string;
  title: string;
  description?: string;
  points?: number;
}) {

  const supabase = await createClient();


  const { data, error } = await supabase
    .from("activities")
    .insert({

      user_id: userId,
      type,
      title,
      description,
      points,

    })
    .select();



  console.log("ACTIVITY INSERT DATA:", data);

  console.log("ACTIVITY INSERT ERROR:", error);



  return {
    data,
    error
  };

}