import { createClient } from "@/lib/supabase/server";

export async function UserCard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">

      <img
        src={user.user_metadata.avatar_url}
        alt="Avatar"
        className="h-16 w-16 rounded-full"
      />

      <h3 className="mt-4 text-lg font-bold">
        {user.user_metadata.preferred_username}
      </h3>

      <p className="text-sm text-neutral-500">
        Twitch Member
      </p>

    </div>
  );
}