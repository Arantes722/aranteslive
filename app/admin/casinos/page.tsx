import Link from "next/link";
import { getCasinos } from "@/lib/casinos";
import { deleteCasino } from "./actions";


export default async function AdminCasinos() {

  const casinos = await getCasinos();


  return (
    <>

      <div className="flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Casinos
        </h1>


        <Link
          href="/admin/casinos/new"
          className="
            rounded-xl
            bg-red-600
            px-6
            py-3
            font-semibold
            transition
            hover:bg-red-500
          "
        >
          Add Casino
        </Link>

      </div>



      <div className="mt-10 space-y-4">


        {casinos.length === 0 && (

          <div
            className="
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-950
              p-6
              text-neutral-400
            "
          >
            No casinos found.
          </div>

        )}



        {casinos.map((casino) => (

          <div
            key={casino.id}
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-950
              p-6
            "
          >


            <div className="flex items-center gap-5">


              {casino.logo_url && (

                <img
                  src={casino.logo_url}
                  alt={casino.name}
                  className="
                    h-20
                    w-20
                    rounded-xl
                    object-cover
                  "
                />

              )}



              <div>


                <h3 className="text-xl font-bold">
                  {casino.name}
                </h3>


                <p className="text-neutral-500">
                  /{casino.slug}
                </p>



                <div className="mt-2 flex gap-3 text-sm">

                  <span
                    className="
                      rounded-full
                      bg-yellow-500/10
                      px-3
                      py-1
                      text-yellow-400
                    "
                  >
                    ⭐ {casino.rating}/5
                  </span>



                  {casino.featured && (

                    <span
                      className="
                        rounded-full
                        bg-red-500/10
                        px-3
                        py-1
                        text-red-400
                      "
                    >
                      Featured
                    </span>

                  )}



                  {casino.verified && (

                    <span
                      className="
                        rounded-full
                        bg-green-500/10
                        px-3
                        py-1
                        text-green-400
                      "
                    >
                      Verified
                    </span>

                  )}

                </div>


              </div>


            </div>




            <div className="flex gap-3">


              <Link
                href={`/admin/casinos/${casino.id}/edit`}
                className="
                  rounded-lg
                  border
                  border-neutral-700
                  px-5
                  py-2
                  transition
                  hover:bg-white/5
                "
              >
                Edit
              </Link>



              <form
                action={deleteCasino.bind(null, casino.id)}
              >

                <button
                  className="
                    rounded-lg
                    bg-red-600
                    px-5
                    py-2
                    font-semibold
                    transition
                    hover:bg-red-500
                  "
                >
                  Delete
                </button>

              </form>


            </div>


          </div>

        ))}


      </div>

    </>
  );
}