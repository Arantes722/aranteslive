"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);

    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={logout}
      disabled={loading}
      className="
        rounded-lg
        border
        border-neutral-700
        px-3
        py-1.5
        text-sm
        text-neutral-300
        transition
        hover:bg-white/5
        hover:text-white
        disabled:opacity-50
      "
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}