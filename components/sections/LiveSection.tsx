export function LiveSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 p-8 md:p-12">


        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-red-600/20 blur-[100px]" />


        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">


          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">

              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

              LIVE NOW

            </div>



            <h2 className="text-4xl font-bold">
              ArantesLive Casino Sessions
            </h2>


            <p className="mt-4 max-w-xl text-neutral-400">

              Watch live casino sessions, challenges,
              community events and exclusive content.

            </p>


          </div>



          <div className="flex flex-col gap-4 sm:flex-row">


            <button className="rounded-xl bg-red-600 px-8 py-3 font-semibold transition hover:bg-red-500">

              Watch Stream

            </button>


            <button className="rounded-xl border border-neutral-700 px-8 py-3 font-semibold transition hover:bg-white/5">

              Schedule

            </button>


          </div>


        </div>


        <div className="relative mt-10 grid gap-4 border-t border-neutral-800 pt-8 sm:grid-cols-3">


          <div>
            <p className="text-2xl font-bold">
              Twitch
            </p>
            <p className="text-sm text-neutral-500">
              Streaming platform
            </p>
          </div>


          <div>
            <p className="text-2xl font-bold">
              Casino
            </p>
            <p className="text-sm text-neutral-500">
              Live content
            </p>
          </div>


          <div>
            <p className="text-2xl font-bold">
              Community
            </p>
            <p className="text-sm text-neutral-500">
              Events & challenges
            </p>
          </div>


        </div>


      </div>


    </section>
  );
}