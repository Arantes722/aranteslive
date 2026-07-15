import { casinoOffers } from "@/constants/home";

export function FeaturedOffers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-10 flex items-end justify-between">

        <div>
          <span className="text-sm font-medium text-red-500">
            PARTNERS
          </span>

          <h2 className="mt-2 text-4xl font-bold">
            Featured Casino Offers
          </h2>

          <p className="mt-3 max-w-xl text-neutral-400">
            Discover the best casino promotions,
            exclusive bonuses and partner offers.
          </p>
        </div>


        <button className="hidden rounded-lg border border-neutral-700 px-5 py-2 text-sm transition hover:bg-white/5 md:block">
          View All
        </button>

      </div>



      <div className="grid gap-6 md:grid-cols-3">

        {casinoOffers.map((casino) => (

          <div
            key={casino.name}
            className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:-translate-y-1 hover:border-red-500"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 transition group-hover:opacity-100" />


            <div className="relative">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-900 text-2xl">
                🎰
              </div>


              <h3 className="text-2xl font-bold">
                {casino.name}
              </h3>


              <p className="mt-2 text-neutral-400">
                {casino.description}
              </p>



              <div className="mt-6 rounded-xl border border-neutral-800 bg-black/40 p-4">

                <p className="text-sm text-neutral-500">
                  Welcome Bonus
                </p>

                <p className="mt-1 text-xl font-bold text-red-500">
                  {casino.bonus}
                </p>

              </div>



              <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-500">
                Claim Offer
              </button>


            </div>

          </div>

        ))}

      </div>

    </section>
  );
}