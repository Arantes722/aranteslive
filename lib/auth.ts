import { createClient } from "@/lib/supabase/server";


export async function getCurrentProfile() {
  const supabase = await createClient();


  const {
    data: { user },
  } = await supabase.auth.getUser();


  console.log("AUTH USER:", user);


  if (!user) {
    return null;
  }


  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();


  console.log("PROFILE:", data);
  console.log("PROFILE ERROR:", error);


  return data;
}



export async function isAdmin() {

  const profile = await getCurrentProfile();


  console.log("ADMIN CHECK:", profile);


  return profile?.role === "admin";

}