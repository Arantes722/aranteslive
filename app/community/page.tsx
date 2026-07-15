import { communityLinks } from "@/constants/community";
import { CommunityCard } from "@/components/community/CommunityCard";


export default function CommunityPage() {

  return (

    <main className="
      mx-auto
      max-w-7xl
      px-6
      py-20
    ">


      <section className="max-w-3xl">


        <span className="
          text-sm
          font-semibold
          tracking-wider
          text-red-500
        ">
          ARANTESLIVE COMMUNITY
        </span>



        <h1 className="
          mt-4
          text-5xl
          font-bold
        ">
          Join the Community
        </h1>



        <p className="
          mt-5
          text-lg
          text-neutral-400
        ">
          Connect with other members, watch live
          content and participate in exclusive events.
        </p>


      </section>





      <section className="
        mt-12
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      ">


        {communityLinks.map((item) => (

          <CommunityCard
            key={item.name}
            item={item}
          />

        ))}


      </section>





      <section className="
        mt-12
        grid
        gap-6
        md:grid-cols-3
      ">


        <div className="
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-6
        ">

          <p className="text-neutral-500">
            Members
          </p>

          <p className="mt-3 text-4xl font-bold">
            1,000+
          </p>

        </div>




        <div className="
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-6
        ">

          <p className="text-neutral-500">
            Giveaways
          </p>

          <p className="mt-3 text-4xl font-bold">
            25+
          </p>

        </div>




        <div className="
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-6
        ">

          <p className="text-neutral-500">
            Rewards
          </p>

          <p className="mt-3 text-4xl font-bold text-red-500">
            €5K+
          </p>

        </div>


      </section>



    </main>

  );
}