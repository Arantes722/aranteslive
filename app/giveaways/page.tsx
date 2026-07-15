import { giveaways } from "@/constants/giveaways";
import { GiveawayCard } from "@/components/giveaways/GiveawayCard";


export default function GiveawaysPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">


      {/* Header */}

      <section className="max-w-3xl">

        <span className="text-sm font-semibold tracking-wider text-red-500">
          COMMUNITY EVENTS
        </span>


        <h1 className="mt-4 text-5xl font-bold">
          Giveaways
        </h1>


        <p className="mt-5 text-lg text-neutral-400">
          Join exclusive ArantesLive giveaways,
          compete with the community and win casino
          rewards, bonuses and special prizes.
        </p>


      </section>





      {/* Stats */}

      <section className="mt-12 grid gap-6 md:grid-cols-3">


        <div className="
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-6
        ">

          <p className="text-sm text-neutral-500">
            Active Giveaways
          </p>

          <p className="mt-3 text-4xl font-bold">
            {
              giveaways.filter(
                (item) => item.status === "Active"
              ).length
            }
          </p>

        </div>




        <div className="
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-6
        ">

          <p className="text-sm text-neutral-500">
            Community Members
          </p>

          <p className="mt-3 text-4xl font-bold">
            1K+
          </p>

        </div>




        <div className="
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-6
        ">

          <p className="text-sm text-neutral-500">
            Rewards Distributed
          </p>

          <p className="mt-3 text-4xl font-bold text-red-500">
            €5K+
          </p>

        </div>


      </section>







      {/* Giveaway Cards */}

      <section className="mt-12">


        <h2 className="text-3xl font-bold">
          Latest Giveaways
        </h2>



        <div className="
          mt-8
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-3
        ">


          {giveaways.map((giveaway) => (

            <GiveawayCard
              key={giveaway.slug}
              giveaway={giveaway}
            />

          ))}


        </div>


      </section>



    </main>
  );
}