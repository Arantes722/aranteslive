import { giveaways } from "@/constants/giveaways";
import { notFound } from "next/navigation";


export default async function GiveawayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


  const { slug } = await params;


  const giveaway = giveaways.find(
    (item) => item.slug === slug
  );


  if (!giveaway) {
    notFound();
  }



  return (
    <main className="mx-auto max-w-6xl px-6 py-20">



      {/* Hero */}

      <section className="
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-950
        p-8
      ">


        <span
          className={`
            rounded-full
            px-4
            py-2
            text-sm

            ${
              giveaway.status === "Active"
              ? "bg-green-500/10 text-green-400"
              : "bg-neutral-800 text-neutral-400"
            }
          `}
        >
          {giveaway.status}
        </span>




        <h1 className="
          mt-6
          text-5xl
          font-bold
        ">
          {giveaway.title}
        </h1>




        <p className="
          mt-5
          max-w-3xl
          text-lg
          text-neutral-400
        ">
          {giveaway.description}
        </p>



      </section>







      {/* Prize */}

      <section className="
        mt-8
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

          <p className="text-sm text-neutral-500">
            Prize
          </p>


          <p className="
            mt-3
            text-3xl
            font-bold
            text-red-500
          ">
            {giveaway.prize}
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
            Participants
          </p>


          <p className="
            mt-3
            text-3xl
            font-bold
          ">
            👥 {giveaway.participants}
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
            Ends
          </p>


          <p className="
            mt-3
            text-xl
            font-bold
          ">
            ⏳ {giveaway.endDate}
          </p>


        </div>


      </section>







      {/* Rules */}

      <section className="
        mt-8
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-950
        p-8
      ">


        <h2 className="
          text-3xl
          font-bold
        ">
          How to participate
        </h2>



        <ul className="
          mt-6
          space-y-4
          text-neutral-300
        ">

          <li>
            ✅ Join the ArantesLive community
          </li>


          <li>
            ✅ Follow the required channels
          </li>


          <li>
            ✅ Complete the giveaway requirements
          </li>


          <li>
            ✅ Wait for the winner announcement
          </li>


        </ul>


      </section>







      {/* CTA */}

      <section className="
        mt-8
        rounded-3xl
        border
        border-red-500/20
        bg-red-500/5
        p-8
        text-center
      ">


        <h2 className="
          text-3xl
          font-bold
        ">
          Ready to participate?
        </h2>



        <button
          className="
          mt-6
          rounded-xl
          bg-red-600
          px-10
          py-4
          font-semibold
          transition
          hover:bg-red-500
          "
        >
          Join Giveaway
        </button>


      </section>



    </main>
  );
}