import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";

import { casinoOffers } from "@/constants/home";

export function FeaturedOffers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Top Offers
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Best Casino Bonuses
          </h2>

        </div>

        <Link
          href="/casinos"
          className="
            flex
            items-center
            gap-1
            text-sm
            text-neutral-400
            transition
            hover:text-red-500
          "
        >
          View All

          <ChevronRight size={18} />
        </Link>

      </div>

      {/* Horizontal Scroll */}

      <div
        className="
          flex
          gap-5
          overflow-x-auto
          pb-2
          scroll-smooth
          snap-x
          snap-mandatory
          [&::-webkit-scrollbar]:hidden
        "
      >

        {casinoOffers.map((casino) => (

          <div
            key={casino.slug}
            className="
              group
              relative
              min-w-[290px]
              max-w-[290px]
              snap-start
              overflow-hidden
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-950
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-red-500
              hover:shadow-[0_0_30px_rgba(239,68,68,.18)]
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-red-500/10
                to-transparent
                opacity-0
                transition
                group-hover:opacity-100
              "
            />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-neutral-900
                    text-3xl
                  "
                >
                  🎰
                </div>

                <span
                  className="
                    rounded-full
                    bg-red-500/10
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-red-500
                  "
                >
                  {casino.badge}
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                {casino.name}
              </h3>

              <div className="mt-3 flex items-center gap-2">

                <Star
                  size={16}
                  className="fill-red-500 text-red-500"
                />

                <span className="font-semibold">
                  {casino.rating}
                </span>

              </div>

              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-neutral-800
                  bg-black/40
                  p-4
                "
              >

                <p className="text-xs uppercase tracking-wide text-neutral-500">
                  Welcome Bonus
                </p>

                <p className="mt-1 text-xl font-bold text-red-500">
                  {casino.bonus}
                </p>

              </div>

              <button
                className="
                  mt-6
                  w-full
                  rounded-xl
                  bg-red-600
                  py-3
                  font-semibold
                  transition
                  hover:bg-red-500
                "
              >
                Claim Offer
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}