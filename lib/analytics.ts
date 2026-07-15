import { createClient } from "@/lib/supabase/server";


export async function getCasinoClicks() {

  const supabase = await createClient();



  const { data, error } = await supabase
    .from("casino_clicks")
    .select(`
      id,
      created_at,
      casino:casinos(
        id,
        name,
        slug
      )
    `);



  if (error) {

    console.error(error);

    throw new Error(error.message);

  }



  return data;

}