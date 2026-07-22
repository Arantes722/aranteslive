import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityCard } from "@/components/community/CommunityCard";
import { communityLinks } from "@/constants/community";

export default function CommunityPage() {
  return (
    <main
      className="
        mx-auto
        max-w-7xl
        space-y-10
        px-6
        py-8
      "
    >


      {/* Socials */}

      <section>

        <div
          className="
            mb-6
            flex
            items-end
            justify-between
          "
        >
          <div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.20em]
                text-red-500
              "
            >
              Community
            </p>

            <h2
              className="
                mt-2
                text-4xl
                font-black
              "
            >
              Join Every Platform
            </h2>

          </div>

        </div>

        <div
          className="
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {communityLinks.map((item) => (

            <CommunityCard
              key={item.name}
              item={item}
            />

          ))}

        </div>

      </section>

    </main>
  );
}