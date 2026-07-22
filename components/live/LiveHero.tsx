import Link from "next/link";
import { ArrowRight, Radio, Users } from "lucide-react";

export function LiveHero() {
  const isLive = false;

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-neutral-800
        bg-[#080808]
        p-10
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          -right-24
          -top-24
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-500/10
          blur-[140px]
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          gap-10
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Left */}

        <div className="max-w-3xl">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              px-4
              py-2
            "
          >
            <Radio
              size={14}
              className={isLive ? "text-red-500" : "text-neutral-500"}
            />

            <span
              className="
                text-xs
                font-bold
                tracking-[0.20em]
              "
            >
              {isLive ? "LIVE NOW" : "OFFLINE"}
            </span>
          </div>

          <h1
            className="
              mt-8
              text-6xl
              font-black
              leading-none
            "
          >
            ArantesLive
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-neutral-400
            "
          >
            Casino streams, exclusive giveaways, community rewards and premium
            entertainment.
          </p>

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >
            <Link
              href="#"
              className="
                rounded-2xl
                bg-red-500
                px-7
                py-4
                font-bold
                transition
                hover:bg-red-600
              "
            >
              Watch Live
            </Link>

            <Link
              href="/community"
              className="
                flex
                items-center
                gap-2
                rounded-2xl
                border
                border-neutral-700
                px-7
                py-4
                font-semibold
                transition
                hover:border-red-500/30
                hover:bg-white/5
              "
            >
              Join Community
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right */}

        <div
          className="
            flex
            flex-col
            gap-5
            lg:w-[320px]
          "
        >
          <div
            className="
              rounded-3xl
              border
              border-neutral-800
              bg-neutral-950
              p-6
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-[0.20em]
                text-neutral-500
              "
            >
              Stream Status
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-black
              "
            >
              {isLive ? "LIVE" : "Offline"}
            </h2>
          </div>

          <div
            className="
              rounded-3xl
              border
              border-neutral-800
              bg-neutral-950
              p-6
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                text-neutral-500
              "
            >
              <Users size={18} />
              Viewers
            </div>

            <h2
              className="
                mt-3
                text-3xl
                font-black
              "
            >
              {isLive ? "842" : "-"}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
