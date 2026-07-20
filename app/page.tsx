import { createClient } from "@/lib/supabase/server";

import { Hero } from "@/components/home/Hero";
import { HomeSection } from "@/components/home/HomeSection";

import { OfferCard } from "@/components/cards/OfferCard";
import { ClipCard } from "@/components/cards/ClipCard";
import { GiveawayCard } from "@/components/cards/GiveawayCard";
import { SocialCard } from "@/components/cards/SocialCard";
import { StorePreviewCard } from "@/components/cards/StorePreviewCard";

import {
  casinoOffers,
  latestContent,
} from "@/constants/home";

import { giveaways } from "@/constants/giveaways";
import { socials } from "../constants/socials";


export default async function Home() {

  const supabase = await createClient();


  const { data: storeItems } =
    await supabase
      .from("store_items")
      .select("*")
      .eq("active", true)
      .order("price")
      .limit(4);



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
        title="Rewards Store"
        href="/store"
      >

        {(storeItems ?? []).map((item) => (
          <StorePreviewCard
            key={item.id}
            item={item}
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