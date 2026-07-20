import { redirect } from "next/navigation";
import { User } from "lucide-react";

import { createClient } from "@/lib/supabase/server";

import { ProfileHeader } from "@/components/profile/ProfileHeader";

import PointsCard from "@/components/profile/cards/PointsCard";
import FollowingCard from "@/components/profile/cards/FollowingCard";
import WatchtimeCard from "@/components/profile/cards/WatchtimeCard";
import ConnectionCard from "@/components/profile/cards/ConnectionsCard";

import ActivityCard from "@/components/profile/activity/ActivityCard";

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

    const { data: profile } =
        await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .maybeSingle();

    const { data: activities } =
        await supabase
            .from("activities")
            .select("*")
            .eq("user_id", user.id)
            .order(
                "created_at",
                {
                    ascending: false,
                }
            )
            .limit(10);

    return (

        <main
            className="
                mx-auto
                w-full
                max-w-7xl
                space-y-8
                px-6
                py-6
            "
        >

            {/* Title */}

            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >

                <div
                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-red-500/10
                        text-red-500
                    "
                >

                    <User size={24} />

                </div>

                <div>

                    <h1
                        className="
                            text-4xl
                            font-black
                        "
                    >
                        Profile
                    </h1>

                    <p
                        className="
                            mt-1
                            text-neutral-500
                        "
                    >
                        Manage your ArantesLive account
                    </p>

                </div>

            </div>

            {/* Header */}

            <ProfileHeader
                profile={profile}
                user={user}
            />

            {/* Cards */}

            <div
                className="
                    grid
                    gap-6
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                <PointsCard
                    points={profile?.points ?? 0}
                />

                <FollowingCard
                    followingSince={profile?.following_since}
                />

                <WatchtimeCard
                    minutes={profile?.watchtime_minutes ?? 0}
                />

                <ConnectionCard
                    username={profile?.username}
                />

            </div>

            {/* Activity */}

            <ActivityCard
                activities={activities ?? []}
            />

        </main>

    );

}