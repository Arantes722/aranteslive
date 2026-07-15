import { createClient } from "@/lib/supabase/server";
import { updateCasino } from "./actions";


export default async function EditCasinoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const supabase = await createClient();


  const { data: casino } = await supabase
    .from("casinos")
    .select("*")
    .eq("id", id)
    .single();



  if (!casino) {

    return (
      <h1>
        Casino not found
      </h1>
    );

  }



  return (

    <main className="max-w-3xl">


      <h1 className="text-4xl font-bold">
        Edit {casino.name}
      </h1>



      <form
        action={updateCasino.bind(null, id)}
        className="mt-10 space-y-5"
      >


        <input
          name="name"
          defaultValue={casino.name}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <input
          name="slug"
          defaultValue={casino.slug}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <textarea
          name="description"
          defaultValue={casino.description}
          rows={5}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <input
          name="bonus"
          defaultValue={casino.bonus}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <input
          name="category"
          defaultValue={casino.category}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <input
          name="badge"
          defaultValue={casino.badge}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <input
          name="rating"
          type="number"
          step="0.1"
          defaultValue={casino.rating}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <input
          name="affiliate_url"
          defaultValue={casino.affiliate_url}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />



        <button
          className="
          rounded-xl
          bg-red-600
          px-8
          py-4
          font-semibold
          "
        >
          Save Changes
        </button>


      </form>


    </main>

  );
}