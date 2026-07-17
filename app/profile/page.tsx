import { redirect } from "next/navigation";
import { User } from "lucide-react";

import { createClient } from "@/lib/supabase/server";

import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfilePoints } from "@/components/profile/ProfilePoints";
import { ProfileStats } from "@/components/profile/ProfileStats";
import { ProfileBadges } from "@/components/profile/ProfileBadges";
import { ProfileActivity } from "@/components/profile/ProfileActivity";
import { ProfileConnections } from "@/components/profile/ProfileConnections";
import { ProfileRole } from "@/components/profile/ProfileRole";
import { ProfileActivityOverview } from "@/components/profile/ProfileActivityOverview";




export default async function ProfilePage() {


    const supabase = await createClient();




    const {
        data: {
            user,
        },
    } = await supabase.auth.getUser();




    if (!user) {

        redirect("/login");

    }







    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq(
            "id",
            user.id
        )
        .maybeSingle();









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
        .eq(
            "user_id",
            user.id
        );









    const { data: activities } = await supabase
        .from("activities")
        .select("*")
        .eq(
            "user_id",
            user.id
        )
        .order(
            "created_at",
            {
                ascending: false,
            }
        )
        .limit(50);









    return (

        <main
            className="
                w-full
                space-y-4
                px-3
                py-4
            "
        >







            {/* Page Title */}


            <div
                className="
                    flex
                    items-center
                    gap-4
                    px-2
                "
            >


                <div
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-500/10
                        text-red-500
                    "
                >

                    <User size={22} />

                </div>




                <div>


                    <h1
                        className="
                            text-3xl
                            font-bold
                        "
                    >
                        Profile
                    </h1>



                    <p
                        className="
                            text-sm
                            text-neutral-500
                        "
                    >
                        Manage your account, rewards and progress
                    </p>


                </div>


            </div>









            {/* Profile Header */}


            <ProfileHeader
                profile={profile}
                user={user}
            />









            {/* Stats */}


            <ProfileStats

                following={
                    profile?.following ?? 0
                }

                followingSince={
                    profile?.following_since
                }

                watchtime={
                    profile?.watchtime ?? 0
                }

                giveawaysWon={
                    profile?.giveaways_won ?? 0
                }

            />









            {/* Dashboard Cards */}


            <div
                className="
                    grid
                    gap-4
                    xl:grid-cols-12
                "
            >





                <div
                    className="
                        xl:col-span-5
                    "
                >

                    <ProfilePoints
                        points={
                            profile?.points ?? 0
                        }
                    />

                </div>







                <div
                    className="
                        xl:col-span-3
                    "
                >

                    <ProfileConnections
                        user={user}
                        profile={profile}
                    />

                </div>







                <div
                    className="
                        xl:col-span-4
                    "
                >

                    <ProfileRole
                        profile={profile}
                    />

                </div>





            </div>



            {/* Activity Overview */}


            <ProfileActivityOverview
                activities={
                    activities ?? []
                }
            />









            {/* Badges */}


            <ProfileBadges
                badges={
                    userBadges ?? []
                }
            />









            {/* Recent Activity */}


            <ProfileActivity
                activities={
                    activities ?? []
                }
            />







        </main>

    );

}