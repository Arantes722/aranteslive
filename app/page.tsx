import { Hero } from "@/components/home/Hero";
import { HomeSection } from "@/components/home/HomeSection";

import { OfferCard } from "@/components/cards/OfferCard";
import { ClipCard } from "@/components/cards/ClipCard";
import { GiveawayCard } from "@/components/cards/GiveawayCard";
import { SocialCard } from "@/components/cards/SocialCard";

import {
  casinoOffers,
  latestContent,
} from "@/constants/home";

import { giveaways } from "@/constants/giveaways";
import { socials } from "../constants/socials";


export default function Home() {
  return (
    <main className="space-y-8">

      <Hero />


      <HomeSection
        title="Top Offers"
        href="/casinos"
      >

        {casinoOffers.map((casino) => (
          <OfferCard
            key={casino.slug}
            name={casino.name}
            bonus={casino.bonus}
            image={casino.image}
            badge={casino.badge}
            href={`/casinos/${casino.slug}`}
          />
        ))}

      </HomeSection>



      <HomeSection
        title="Latest Clips"
        href="/clips"
      >

        {latestContent.map((clip) => (
          <ClipCard
            key={clip.title}
            clip={clip}
          />
        ))}

      </HomeSection>



      <HomeSection
        title="Giveaways"
        href="/giveaways"
      >

        {giveaways.map((giveaway) => (
          <GiveawayCard
            key={giveaway.slug}
            giveaway={giveaway}
          />
        ))}

      </HomeSection>



      <HomeSection
        title="Community"
        href="/community"
      >

        {socials.map((social) => (
          <SocialCard
            key={social.name}
            social={social}
          />
        ))}

      </HomeSection>


    </main>
  );
}