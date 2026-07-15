import LoginButton from "@/components/auth/LoginButton";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-neutral-800 bg-neutral-950 p-10">

        <h1 className="text-center text-4xl font-bold">
          Welcome to ArantesLive
        </h1>

        <p className="mt-4 text-center text-neutral-400">
          Sign in with Twitch to access giveaways, your profile, rankings and exclusive casino offers.
        </p>

        <div className="mt-10">
          <LoginButton />
        </div>

      </div>
    </main>
  );
}