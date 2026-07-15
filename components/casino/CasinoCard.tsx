import Link from "next/link";
import { Star, ShieldCheck } from "lucide-react";


interface CasinoCardProps {
  casino: {
    id: string;
    slug: string;
    name: string;
    rating: number;
    bonus: string;
    badge: string;
    description: string;
    verified: boolean;
    logo_url?: string | null;
    affiliate_url?: string | null;
  };
}



export function CasinoCard({
  casino,
}: CasinoCardProps) {


  return (

    <div
      className="
        group
        rounded-3xl
        border
        border-neutral-800
        bg-neutral-950
        p-6
        transition
        hover:-translate-y-2
        hover:border-red-500/50
      "
    >


      <span
        className="
          rounded-full
          bg-red-500/10
          px-3
          py-1
          text-xs
          text-red-400
        "
      >
        {casino.badge}
      </span>




      {/* Logo */}

      <div
        className="
          mt-6
          flex
          h-24
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          bg-neutral-900
        "
      >

        {casino.logo_url ? (

          <img
            src={casino.logo_url}
            alt={casino.name}
            className="
              h-full
              w-full
              object-contain
            "
          />

        ) : (

          <span className="text-4xl">
            🎰
          </span>

        )}

      </div>





      <div className="mt-6 flex items-center justify-between">


        <h2 className="text-xl font-bold">
          {casino.name}
        </h2>



        {casino.verified && (

          <ShieldCheck
            size={20}
            className="text-green-500"
          />

        )}


      </div>





      <div className="mt-3 flex items-center gap-2 text-yellow-400">

        <Star
          size={18}
          fill="currentColor"
        />

        {casino.rating}

      </div>





      <p className="mt-4 text-sm text-neutral-400">
        {casino.description}
      </p>





      <div
        className="
          mt-6
          rounded-xl
          bg-black/40
          p-4
        "
      >

        <p className="text-xs text-neutral-500">
          Welcome Bonus
        </p>


        <p className="mt-1 font-bold text-red-500">
          {casino.bonus}
        </p>


      </div>






      <div className="mt-6 flex gap-3">


        <Link
          href={`/casinos/${casino.slug}`}
          className="
            flex-1
            rounded-xl
            border
            border-neutral-700
            py-3
            text-center
            text-sm
            font-semibold
            hover:bg-white/5
          "
        >
          Review
        </Link>





        {casino.affiliate_url && (

          <a
            href={`/go/${casino.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-1
              rounded-xl
              bg-red-600
              py-3
              text-center
              text-sm
              font-semibold
              hover:bg-red-500
            "
          >
            Bonus
          </a>

        )}


      </div>


    </div>

  );
}