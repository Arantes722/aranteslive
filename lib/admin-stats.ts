import { createClient } from "@/lib/supabase/server";


export async function getAdminStats() {

  const supabase = await createClient();



  const { count: casinos } = await supabase
    .from("casinos")
    .select("*", { count: "exact", head: true });



  const { count: clicks } = await supabase
    .from("casino_clicks")
    .select("*", { count: "exact", head: true });



  const { count: users } = await supabase
    .from("profiles")
    .select("*", { count: "exact", head: true });



  return {
    casinos: casinos ?? 0,
    clicks: clicks ?? 0,
    users: users ?? 0,
  };

}