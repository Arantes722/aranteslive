"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";


export async function deleteCasino(id: string) {

  const supabase = await createClient();


  const { error } = await supabase
    .from("casinos")
    .delete()
    .eq("id", id);



  if (error) {

    console.error(error);

    throw new Error(error.message);

  }


  revalidatePath("/admin/casinos");

}