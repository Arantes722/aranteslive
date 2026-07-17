import { NextResponse } from "next/server";

import { createClient } 
from "@/lib/supabase/server";


import {
    syncTwitchProfile
}
from "@/lib/twitch/syncProfile";





export async function GET(){


    const supabase =
        await createClient();




    const {
        data:{
            user
        }
    }
    =
    await supabase.auth.getUser();





    if(!user){

        return NextResponse.json(
            {
                error:"Unauthorized"
            },
            {
                status:401
            }
        );

    }





    const {
        data:profile
    }
    =
    await supabase
    .from("profiles")
    .select("*")
    .eq(
        "id",
        user.id
    )
    .single();





    if(!profile){

        return NextResponse.json(
            {
                error:"Profile missing"
            },
            {
                status:404
            }
        );

    }






    const result =
        await syncTwitchProfile(
            supabase,
            profile
        );





    return NextResponse.json({

        success:true,

        ...result

    });



}