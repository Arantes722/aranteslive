import Link from "next/link";
import { ChevronRight, Gift, Users, Clock } from "lucide-react";

import { giveaways } from "@/constants/giveaways";

export function GiveawaysSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Community
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Active Giveaways
          </h2>

        </div>

        <Link
          href="/giveaways"
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
          snap-x
          snap-mandatory
          scroll-smooth
          [&::-webkit-scrollbar]:hidden
        "
      >

        {giveaways.map((giveaway) => (

          <div
            key={giveaway.slug}
            className="
              group
              min-w-[310px]
              max-w-[310px]
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

            <div className="flex items-center justify-between">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-500/10
                "
              >
                <Gift
                  size={26}
                  className="text-red-500"
                />
              </div>

              <span
                className="
                  rounded-full
                  bg-green-500/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-green-400
                "
              >
                {giveaway.status}
              </span>

            </div>

            <h3 className="mt-6 text-xl font-bold">
              {giveaway.title}
            </h3>

            <p className="mt-2 text-neutral-400">
              {giveaway.prize}
            </p>

            <div className="mt-6 space-y-3 text-sm">

              <div className="flex items-center gap-2 text-neutral-400">

                <Users size={16} />

                {giveaway.participants} participants

              </div>

              <div className="flex items-center gap-2 text-neutral-400">

                <Clock size={16} />

                Ends {giveaway.endDate}

              </div>

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
              Join Giveaway
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}