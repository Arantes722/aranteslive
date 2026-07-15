import Link from "next/link";


interface GiveawayCardProps {
  giveaway: {
    slug: string;
    title: string;
    prize: string;
    status: string;
    participants: number;
    endDate: string;
  };
}



export function GiveawayCard({
  giveaway,
}: GiveawayCardProps) {

  return (

    <Link
      href={`/giveaways/${giveaway.slug}`}
      className="
      block
      rounded-3xl
      border
      border-neutral-800
      bg-neutral-950
      p-6
      transition
      hover:-translate-y-2
      hover:border-red-500/40
      "
    >


      <span
        className={`
          rounded-full
          px-3
          py-1
          text-xs
          ${
            giveaway.status === "Active"
              ? "bg-green-500/10 text-green-400"
              : "bg-neutral-800 text-neutral-400"
          }
        `}
      >
        {giveaway.status}
      </span>



      <h2 className="mt-6 text-2xl font-bold">
        {giveaway.title}
      </h2>



      <p className="mt-4 text-red-500 text-xl font-bold">
        {giveaway.prize}
      </p>




      <div className="mt-6 space-y-2 text-sm text-neutral-400">

        <p>
          👥 {giveaway.participants} participants
        </p>

        <p>
          ⏳ Ends {giveaway.endDate}
        </p>

      </div>


    </Link>

  );
}