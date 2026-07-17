import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface HomeSectionProps {
  title: string;
  href: string;
  children: ReactNode;
}

export function HomeSection({
  title,
  href,
  children,
}: HomeSectionProps) {
  return (
    <section className="mt-14">

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <Link
          href={href}
          className="
            flex
            items-center
            gap-1
            text-sm
            text-neutral-400
            transition
            hover:text-red-500
          "
        >
          View All

          <ChevronRight size={18} />
        </Link>

      </div>


      <div
        className="
          flex
          gap-8
          overflow-visible
          px-4
          py-5
          scroll-smooth
        "
      >
        {children}
      </div>


    </section>
  );
}