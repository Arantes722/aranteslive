import { getAdminStats } from "@/lib/admin-stats";


export default async function AdminDashboard() {

  const stats = await getAdminStats();


  return (

    <>

      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>


      <p className="mt-3 text-neutral-400">
        Welcome to ArantesLive Admin Panel.
      </p>



      <div className="mt-10 grid gap-6 md:grid-cols-3">


        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">

          <p className="text-neutral-500">
            Casinos
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-500">
            {stats.casinos}
          </h2>

        </div>



        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">

          <p className="text-neutral-500">
            Users
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-500">
            {stats.users}
          </h2>

        </div>



        <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">

          <p className="text-neutral-500">
            Casino Clicks
          </p>

          <h2 className="mt-3 text-4xl font-bold text-red-500">
            {stats.clicks}
          </h2>

        </div>


      </div>


    </>

  );

}