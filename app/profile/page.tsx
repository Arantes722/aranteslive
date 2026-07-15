import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { RedeemModal } from "@/components/profile/RedeemModal";


export default async function ProfilePage() {

    const supabase = await createClient();


    const {
        data: {
            user
        },
    } = await supabase.auth.getUser();



    if (!user) {
        redirect("/login");
    }




    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();






    const { data: userBadges } = await supabase
        .from("user_badges")
        .select(`
          id,
          earned_at,
          badges (
            name,
            description,
            image_url
          )
        `)
        .eq("user_id", user.id);







    const { data: activities } = await supabase
        .from("activities")
        .select("*")
        .eq("user_id", user.id)
        .order(
            "created_at",
            {
                ascending: false
            }
        )
        .limit(10);








    return (

        <main className="mx-auto max-w-6xl px-6 py-20">


            <div className="
                rounded-3xl
                border
                border-neutral-800
                bg-neutral-950
                p-10
            ">



                <div className="flex items-center gap-6">


                    <img
                        src={
                            profile?.avatar_url ??
                            "/default-avatar.png"
                        }
                        alt="avatar"
                        className="
                            h-32
                            w-32
                            rounded-full
                        "
                    />



                    <div>


                        <h1 className="text-4xl font-bold">
                            {profile?.display_name}
                        </h1>



                        <p className="text-neutral-400">
                            @{profile?.username}
                        </p>



                        <p className="mt-2 text-sm text-neutral-500">
                            ID #{profile?.id.slice(0, 4)}
                        </p>


                    </div>


                </div>







                {/* Points */}


                <div className="
                    mt-10
                    rounded-2xl
                    bg-neutral-900
                    p-6
                ">


                    <p className="text-neutral-500">
                        Store Points
                    </p>


                    <p className="mt-2 text-4xl font-bold">
                        {profile?.points ?? 0}
                        <span className="text-lg text-neutral-400">
                            {" "}pts.
                        </span>
                    </p>




                    {/* Redeem Voucher */}

                    <RedeemModal />


                </div>








                {/* Stats */}


                <div className="
                    mt-8
                    grid
                    gap-6
                    md:grid-cols-3
                ">


                    <div className="rounded-2xl bg-neutral-900 p-6">

                        <p className="text-neutral-500">
                            Following
                        </p>

                        <p className="text-3xl font-bold">
                            {profile?.following ?? 0}
                        </p>

                    </div>





                    <div className="rounded-2xl bg-neutral-900 p-6">

                        <p className="text-neutral-500">
                            Watchtime
                        </p>

                        <p className="text-3xl font-bold">
                            {profile?.watchtime ?? 0}h
                        </p>

                    </div>





                    <div className="rounded-2xl bg-neutral-900 p-6">

                        <p className="text-neutral-500">
                            Giveaways Won
                        </p>

                        <p className="text-3xl font-bold">
                            {profile?.giveaways_won ?? 0}
                        </p>

                    </div>


                </div>








                {/* Badges */}


                <section className="mt-10">

                    <h2 className="text-2xl font-bold">
                        Badges
                    </h2>


                    <div className="
                        mt-5
                        grid
                        gap-4
                        md:grid-cols-4
                    ">


                        {userBadges?.map((item:any)=>(

                            <div
                                key={item.id}
                                className="
                                    rounded-2xl
                                    border
                                    border-neutral-800
                                    bg-neutral-900
                                    p-5
                                "
                            >

                                <p className="font-bold">
                                    {item.badges.name}
                                </p>

                                <p className="mt-2 text-sm text-neutral-400">
                                    {item.badges.description}
                                </p>

                            </div>

                        ))}


                    </div>

                </section>








                {/* Activity */}


                <section className="mt-10">


                    <h2 className="text-2xl font-bold">
                        Activity
                    </h2>



                    <div className="mt-5 space-y-4">


                        {activities?.map((activity)=>(

                            <div
                                key={activity.id}
                                className="
                                    rounded-xl
                                    border
                                    border-neutral-800
                                    bg-neutral-900
                                    p-5
                                    flex
                                    justify-between
                                "
                            >

                                <div>

                                    <p className="font-bold">
                                        {activity.title}
                                    </p>


                                    <p className="text-sm text-neutral-400">
                                        {activity.description}
                                    </p>

                                </div>



                                <span className="font-bold text-red-500">
                                    {activity.points > 0 ? "+" : ""}
                                    {activity.points} pts
                                </span>


                            </div>

                        ))}


                    </div>


                </section>




            </div>


        </main>

    );
}