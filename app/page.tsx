import { Hero } from "@/components/sections/Hero";
import { FeaturedOffers } from "@/components/sections/FeaturedOffers";
import { LatestContent } from "@/components/sections/LatestContent";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { LiveSection } from "@/components/sections/LiveSection";
import { GiveawaysSection } from "@/components/sections/GiveawaysSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <FeaturedOffers />

      <LiveSection />

      <GiveawaysSection />

      <LatestContent />

      <CommunitySection />
    </main>
  );
}