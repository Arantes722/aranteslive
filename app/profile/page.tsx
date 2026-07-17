import { redirect } from "next/navigation";
import { User } from "lucide-react";

import { createClient } from "@/lib/supabase/server";

import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfilePoints } from "@/components/profile/ProfilePoints";
import { ProfileConnections } from "@/components/profile/ProfileConnections";
import { ProfileOverview } from "@/components/profile/ProfileOverview";

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
            .eq(
                "id",
                user.id
            )
            .maybeSingle();

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

            {/* Page Title */}

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

            <ProfileOverview
                profile={profile}
            />

            {/* Dashboard */}

            <div
                className="
                    grid
                    gap-6
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
                        xl:col-span-7
                    "
                >

                    <ProfileConnections
                        user={user}
                        profile={profile}
                    />

                </div>

            </div>

        </main>

    );

}