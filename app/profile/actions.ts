"use server";

import { createClient } from "@/lib/supabase/server";
import { addPoints } from "@/lib/points";
import { addActivity } from "@/lib/activity";


export async function redeemVoucher(code:string){


  const supabase = await createClient();



  const {
    data:{
      user
    }
  } = await supabase.auth.getUser();



  if(!user){

    return {
      error:"Not authenticated"
    };

  }




  const {
    data:voucher
  } = await supabase
    .from("vouchers")
    .select("*")
    .eq(
      "code",
      code
    )
    .single();





  if(!voucher){

    return {
      error:"Invalid voucher"
    };

  }





  if(voucher.used){

    return {
      error:"Voucher already used"
    };

  }







  await addPoints(
    user.id,
    voucher.points
  );





  await supabase
    .from("vouchers")
    .update({

      used:true,

      used_by:user.id,

      used_at:new Date()

    })
    .eq(
      "id",
      voucher.id
    );






  await addActivity({

    userId:user.id,

    type:"VOUCHER_REDEEM",

    title:"Voucher Redeemed",

    description:code,

    points:voucher.points

  });





  return {
    success:true
  };


}