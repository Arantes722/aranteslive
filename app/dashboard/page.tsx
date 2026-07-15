import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/login");
    }

    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    if (!profile) {
        await supabase.from("profiles").insert({
            id: user.id,
            username:
                user.user_metadata.preferred_username ??
                user.user_metadata.user_name,
            display_name:
                user.user_metadata.name ??
                user.user_metadata.preferred_username,
            avatar_url: user.user_metadata.avatar_url,
            twitch_id: user.user_metadata.provider_id,
            email: user.email,
            provider: "twitch",
        });
    } else {

        await supabase
            .from("profiles")
            .update({
                avatar_url: user.user_metadata.avatar_url,
                twitch_id: user.user_metadata.provider_id,
                display_name:
                    user.user_metadata.name ??
                    user.user_metadata.preferred_username,
            })
            .eq("id", user.id);

    }

    const { data: currentProfile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

    return (
        <main className="mx-auto max-w-7xl px-6 py-20">

            <h1 className="text-5xl font-bold">
                Welcome back
            </h1>

            <div className="mt-10 rounded-3xl border border-neutral-800 bg-neutral-950 p-8">

                <img
                    src={currentProfile?.avatar_url}
                    alt=""
                    className="mb-6 h-24 w-24 rounded-full"
                />

                <h2 className="text-3xl font-bold">
                    {currentProfile?.display_name}
                </h2>

                <p className="mt-2 text-neutral-400">
                    @{currentProfile?.username}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">

                    <div className="rounded-2xl bg-neutral-900 p-6">
                        <p className="text-neutral-500">Level</p>
                        <p className="mt-2 text-3xl font-bold">
                            {currentProfile?.level}
                        </p>
                    </div>

                    <div className="rounded-2xl bg-neutral-900 p-6">
                        <p className="text-neutral-500">Points</p>
                        <p className="mt-2 text-3xl font-bold">
                            {currentProfile?.points}
                        </p>
                    </div>

                </div>

            </div>

        </main>
    );
}