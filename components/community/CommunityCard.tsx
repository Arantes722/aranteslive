import Link from "next/link";


interface CommunityCardProps {
  item: {
    name: string;
    description: string;
    icon: string;
    link: string;
  };
}


export function CommunityCard({
  item,
}: CommunityCardProps) {

  return (

    <Link
      href={item.link}
      className="
        group
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

      <div className="text-4xl">
        {item.icon}
      </div>


      <h2 className="
        mt-6
        text-2xl
        font-bold
      ">
        {item.name}
      </h2>


      <p className="
        mt-3
        text-neutral-400
      ">
        {item.description}
      </p>


      <p className="
        mt-6
        text-sm
        font-semibold
        text-red-400
      ">
        Join now →
      </p>


    </Link>

  );
}