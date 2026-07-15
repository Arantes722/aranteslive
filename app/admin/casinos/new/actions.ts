"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";


export async function createCasino(formData: FormData) {

  const supabase = await createClient();



  let logoUrl = null;



  const logo = formData.get("logo") as File;



  if (logo && logo.size > 0) {


    const fileExt = logo.name.split(".").pop();


    const fileName = `${crypto.randomUUID()}.${fileExt}`;



    const { error: uploadError } = await supabase
      .storage
      .from("casino-images")
      .upload(
        fileName,
        logo
      );



    if (uploadError) {

      console.error(uploadError);

      throw new Error(uploadError.message);

    }



    const { data } = supabase
      .storage
      .from("casino-images")
      .getPublicUrl(fileName);



    logoUrl = data.publicUrl;

  }




  const { error } = await supabase
    .from("casinos")
    .insert({

      slug: formData.get("slug"),

      name: formData.get("name"),

      description: formData.get("description"),

      bonus: formData.get("bonus"),

      category: formData.get("category"),

      badge: formData.get("badge"),

      rating: Number(
        formData.get("rating")
      ),

      affiliate_url: formData.get("affiliate_url"),

      logo_url: logoUrl,

      verified: true,

      featured: false,

    });



  if (error) {

    console.error(error);

    throw new Error(error.message);

  }



  redirect("/admin/casinos");

}