import { createClient } from "@/lib/supabase/server";

export async function getCasinos() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("casinos")
    .select("*")
    .order("featured", { ascending: false })
    .order("name");

  if (error) {
    throw error;
  }

  return data;
}

export async function getCasinoBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("casinos")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    return null;
  }

  return data;
}