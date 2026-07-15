export function GiveawaysSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-red-950/40 via-neutral-950 to-black p-8 md:p-12">


        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />


        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">


          <div>

            <span className="text-sm font-semibold text-red-500">
              COMMUNITY EVENTS
            </span>


            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Exclusive Giveaways
            </h2>


            <p className="mt-5 max-w-xl text-lg text-neutral-400">

              Participate in exclusive ArantesLive
              giveaways, challenges and community events.

            </p>



            <button className="mt-8 rounded-xl bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-500">

              Enter Giveaway

            </button>


          </div>



          <div className="rounded-2xl border border-neutral-800 bg-black/40 p-8">


            <div className="flex items-center justify-between">

              <h3 className="text-xl font-bold">
                Current Giveaway
              </h3>


              <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-400">
                Active
              </span>

            </div>



            <div className="mt-8">

              <p className="text-sm text-neutral-500">
                Prize
              </p>

              <p className="mt-2 text-3xl font-bold">
                €500 Bonus
              </p>

            </div>



            <div className="mt-8 grid grid-cols-3 gap-4">


              <div className="rounded-xl bg-neutral-900 p-4 text-center">

                <p className="text-2xl font-bold">
                  03
                </p>

                <p className="text-xs text-neutral-500">
                  Days
                </p>

              </div>



              <div className="rounded-xl bg-neutral-900 p-4 text-center">

                <p className="text-2xl font-bold">
                  12
                </p>

                <p className="text-xs text-neutral-500">
                  Hours
                </p>

              </div>



              <div className="rounded-xl bg-neutral-900 p-4 text-center">

                <p className="text-2xl font-bold">
                  45
                </p>

                <p className="text-xs text-neutral-500">
                  Min
                </p>

              </div>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}