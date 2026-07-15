export function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-600/20 blur-[160px]" />

        <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-[140px]" />

      </div>



      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">


        <div className="max-w-5xl">


          {/* Badge */}
          <div className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-red-500/30
            bg-red-500/10
            px-4
            py-2
            text-sm
            text-red-400
          ">

            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

            PREMIUM CASINO COMMUNITY

          </div>




          <h1 className="
            text-6xl
            font-bold
            leading-[0.95]
            tracking-tight
            sm:text-7xl
            lg:text-8xl
          ">

            DISCOVER THE

            <span className="block text-red-500">
              BEST CASINO
            </span>

            EXPERIENCE


          </h1>




          <p className="
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-neutral-400
            sm:text-xl
          ">

            Exclusive casino offers, live sessions,
            giveaways and guides created for the
            ArantesLive community.

          </p>




          <div className="mt-10 flex flex-wrap gap-4">


            <button
              className="
                rounded-xl
                bg-red-600
                px-8
                py-4
                font-semibold
                transition
                hover:bg-red-500
              "
            >
              Explore Casino Offers
            </button>



            <button
              className="
                rounded-xl
                border
                border-neutral-700
                px-8
                py-4
                font-semibold
                transition
                hover:bg-white/5
              "
            >
              Join Community
            </button>


          </div>





          {/* Stats */}

          <div
            className="
              mt-16
              grid
              gap-6
              border-t
              border-neutral-800
              pt-8
              sm:grid-cols-3
            "
          >

            <div>

              <p className="text-3xl font-bold">
                10+
              </p>

              <p className="text-sm text-neutral-500">
                Casino Partners
              </p>

            </div>



            <div>

              <p className="text-3xl font-bold">
                🎁
              </p>

              <p className="text-sm text-neutral-500">
                Exclusive Giveaways
              </p>

            </div>



            <div>

              <p className="text-3xl font-bold">
                🔴
              </p>

              <p className="text-sm text-neutral-500">
                Live Sessions
              </p>

            </div>


          </div>



        </div>


      </div>


    </section>
  );
}