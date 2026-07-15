import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";


export default async function RedeemsPage() {


  const supabase = await createClient();



  const {
    data:{
      user
    }
  } = await supabase.auth.getUser();



  if(!user){
    redirect("/login");
  }




  const {
    data: rewards
  } = await supabase
    .from("rewards")
    .select("*")
    .order(
      "cost",
      {
        ascending:true
      }
    );





  const {
    data: profile
  } = await supabase
    .from("profiles")
    .select("points")
    .eq(
      "id",
      user.id
    )
    .single();





  return (

    <main className="
      mx-auto
      max-w-6xl
      px-6
      py-20
    ">


      <h1 className="text-5xl font-bold">
        Redeems
      </h1>


      <p className="
        mt-3
        text-neutral-400
      ">
        Convert your points into rewards.
      </p>





      <div className="
        mt-10
        rounded-2xl
        bg-neutral-900
        p-6
      ">


        <p className="text-neutral-500">
          Your Points
        </p>


        <p className="text-4xl font-bold">
          {profile?.points ?? 0} pts
        </p>


      </div>







      <div className="
        mt-10
        grid
        gap-6
        md:grid-cols-3
      ">



        {rewards?.map((reward)=>(
          

          <div
            key={reward.id}
            className="
              rounded-3xl
              border
              border-neutral-800
              bg-neutral-950
              p-6
            "
          >


            <h2 className="
              text-xl
              font-bold
            ">
              {reward.name}
            </h2>



            <p className="
              mt-3
              text-neutral-400
            ">
              {reward.description}
            </p>





            <div className="mt-6">


              <p className="text-2xl font-bold">
                {reward.cost} pts
              </p>


            </div>




            <button
              className="
                mt-6
                w-full
                rounded-xl
                bg-red-600
                py-3
                font-semibold
                hover:bg-red-500
              "
            >
              Redeem
            </button>



          </div>


        ))}


      </div>



    </main>

  );

}