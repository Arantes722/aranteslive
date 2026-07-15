"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";


export async function updateCasino(
  id: string,
  formData: FormData
) {

  const supabase = await createClient();


  const { error } = await supabase
    .from("casinos")
    .update({

      name: formData.get("name"),

      slug: formData.get("slug"),

      description: formData.get("description"),

      bonus: formData.get("bonus"),

      category: formData.get("category"),

      badge: formData.get("badge"),

      rating: Number(
        formData.get("rating")
      ),

      affiliate_url: formData.get("affiliate_url"),

    })
    .eq("id", id);



  if (error) {

    throw new Error(error.message);

  }



  redirect("/admin/casinos");

}