import { createCasino } from "./actions";


export default function NewCasinoPage() {

  return (

    <main className="max-w-3xl">


      <h1 className="text-4xl font-bold">
        Add Casino
      </h1>



      <form
        action={createCasino}
        className="mt-10 space-y-5"
      >


        <input
          name="name"
          placeholder="Casino name"
          required
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <input
          name="slug"
          placeholder="Slug (ex: royalspin)"
          required
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />


        <textarea
          name="description"
          placeholder="Description"
          required
          rows={5}
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />



        <input
          name="bonus"
          placeholder="Bonus"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />



        <input
          name="category"
          placeholder="Category"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />



        <input
          name="badge"
          placeholder="Badge"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />



        <input
          name="rating"
          type="number"
          step="0.1"
          min="0"
          max="5"
          placeholder="Rating"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />



        <input
          name="affiliate_url"
          placeholder="Affiliate URL"
          className="w-full rounded-xl border border-neutral-800 bg-neutral-950 p-4"
        />



        {/* Logo Upload */}

        <div>

          <label className="mb-2 block text-sm text-neutral-400">
            Casino Logo
          </label>


          <input
            type="file"
            name="logo"
            accept="image/*"
            className="
              w-full
              rounded-xl
              border
              border-neutral-800
              bg-neutral-950
              p-4
            "
          />

        </div>




        <button
          className="
            rounded-xl
            bg-red-600
            px-8
            py-4
            font-semibold
            hover:bg-red-500
          "
        >
          Create Casino
        </button>


      </form>


    </main>

  );
}