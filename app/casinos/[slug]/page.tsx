import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";


export default async function CasinoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


  const { slug } = await params;


  const supabase = await createClient();



  const { data: casino } = await supabase
    .from("casinos")
    .select("*")
    .eq("slug", slug)
    .single();



  if (!casino) {
    notFound();
  }



  return (

    <main className="mx-auto max-w-6xl px-6 py-20">


      <section
        className="
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-8
        "
      >



        <div className="flex items-center gap-6">


          {casino.logo_url && (

            <img
              src={casino.logo_url}
              alt={casino.name}
              className="
                h-32
                w-32
                rounded-2xl
                object-contain
                bg-neutral-900
              "
            />

          )}



          <div>


            <span
              className="
                rounded-full
                bg-red-500/10
                px-4
                py-2
                text-sm
                text-red-400
              "
            >
              {casino.badge}
            </span>



            <h1 className="mt-5 text-5xl font-bold">
              {casino.name}
            </h1>


          </div>


        </div>





        <p className="mt-8 text-lg text-neutral-400">
          {casino.description}
        </p>





        <div className="mt-8 grid gap-4 md:grid-cols-3">


          <div className="rounded-xl bg-black/40 p-5">

            ⭐ {casino.rating}/5

          </div>



          <div className="rounded-xl bg-black/40 p-5">

            {casino.category}

          </div>



          <div className="rounded-xl bg-black/40 p-5">

            🛡 {casino.license}

          </div>


        </div>





        <a
          href={`/go/${casino.slug}`}
          className="
            mt-8
            inline-block
            rounded-xl
            bg-red-600
            px-10
            py-4
            font-semibold
            hover:bg-red-500
          "
        >
          Claim Bonus
        </a>


      </section>





      <section
        className="
          mt-8
          rounded-3xl
          border
          border-neutral-800
          bg-neutral-950
          p-8
        "
      >

        <h2 className="text-3xl font-bold">
          Welcome Bonus
        </h2>


        <p className="mt-4 text-4xl font-bold text-red-500">
          {casino.bonus}
        </p>


      </section>



    </main>

  );
}