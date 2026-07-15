import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { addActivity } from "@/lib/activity";
import { addPoints } from "@/lib/points";


export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>
  }
) {


  const { slug } = await params;


  const supabase = await createClient();



  const {
    data: casino,
    error: casinoError
  } = await supabase
    .from("casinos")
    .select("id, name, affiliate_url")
    .eq("slug", slug)
    .single();




  if (casinoError || !casino) {

    console.log("CASINO ERROR:", casinoError);

    return NextResponse.redirect(
      new URL("/", request.url)
    );

  }





  const {
    data: {
      user
    }
  } = await supabase.auth.getUser();






  const {
    error: clickError
  } = await supabase
    .from("casino_clicks")
    .insert({

      casino_id: casino.id,

      user_id: user?.id ?? null,

    });





  console.log("CASINO CLICK:", slug);

  console.log("USER:", user?.id);

  console.log("CLICK ERROR:", clickError);







  // Criar atividade + adicionar pontos

  if (user && !clickError) {


    await addActivity({

      userId: user.id,

      type: "CASINO_CLICK",

      title: "Casino Visit",

      description: `Visited ${casino.name}`,

      points: 10,

    });



    await addPoints(

      user.id,

      10

    );


  }







  return NextResponse.redirect(
    casino.affiliate_url
  );


}