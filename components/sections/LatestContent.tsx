import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";

import { latestContent } from "@/constants/home";

export function LatestContent() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Twitch
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Latest Clips
          </h2>

        </div>

        <Link
          href="/clips"
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

      {/* Clips */}

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

        {latestContent.map((clip) => (

          <div
            key={clip.title}
            className="
              group
              min-w-[340px]
              max-w-[340px]
              overflow-hidden
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-red-500
              hover:shadow-[0_0_30px_rgba(239,68,68,.18)]
            "
          >

            {/* Thumbnail */}

            <div
              className="
                relative
                flex
                h-48
                items-center
                justify-center
                bg-gradient-to-br
                from-red-600/20
                via-neutral-900
                to-black
              "
            >

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-red-600
                  transition
                  group-hover:scale-110
                "
              >
                <Play
                  size={28}
                  className="fill-white text-white"
                />
              </div>

            </div>

            {/* Info */}

            <div className="p-5">

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
                {clip.category}
              </span>

              <h3 className="mt-4 text-lg font-bold">
                {clip.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-400">
                {clip.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}