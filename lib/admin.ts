import { createClient } from "@/lib/supabase/server";

export async function getDashboardStats() {
  const supabase = await createClient();

  const [
    { count: users },
    { count: casinos },
    { count: giveaways },
    { count: favorites },
  ] = await Promise.all([
    supabase
      .from("profiles")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("casinos")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("giveaways")
      .select("*", { count: "exact", head: true }),

    supabase
      .from("favorites")
      .select("*", { count: "exact", head: true }),
  ]);

  return {
    users: users ?? 0,
    casinos: casinos ?? 0,
    giveaways: giveaways ?? 0,
    favorites: favorites ?? 0,
  };
}