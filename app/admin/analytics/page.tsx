import { getCasinoClicks } from "@/lib/analytics";


export default async function AnalyticsPage() {


  const clicks = await getCasinoClicks();



  const grouped = clicks.reduce(
    (acc:any, click:any)=>{

      const name = click.casino?.name;


      if(!name) return acc;


      acc[name] = (acc[name] || 0) + 1;


      return acc;

    },
    {}
  );



  return (

    <>

      <h1 className="text-4xl font-bold">
        Analytics
      </h1>



      <div className="mt-10 grid gap-5 md:grid-cols-3">


        {Object.entries(grouped).map(
          ([casino,total]:any)=>(

          <div
            key={casino}
            className="
              rounded-2xl
              border
              border-neutral-800
              bg-neutral-950
              p-6
            "
          >

            <h2 className="text-xl font-bold">
              {casino}
            </h2>


            <p className="mt-3 text-3xl text-red-500">
              {total}
            </p>


            <p className="text-neutral-500">
              clicks
            </p>


          </div>

        ))}


      </div>


    </>

  );

}