import { ContentCard } from "@/types/content";


export const casinoOffers = [
  {
    slug: "royalspin",
    name: "RoyalSpin Casino",
    logo: "/casinos/royalspin.png",
    rating: "4.8",
    bonus: "€500 + 200 Free Spins",
    badge: "Exclusive",
    category: "Online Casino",
    verified: true,
    link: "#",

    license: "MGA Licensed",
    payments: "Visa, Mastercard, Skrill, Neteller",
    games: "Slots, Live Casino, Blackjack",

    pros: [
      "Exclusive ArantesLive rewards",
      "Large game selection",
      "Fast withdrawals",
    ],

    cons: [
      "Wagering requirements apply",
      "Limited availability in some regions",
    ],

    description:
      "Premium casino experience with exclusive ArantesLive rewards and promotions.",
  },


  {
    slug: "luckyvault",
    name: "LuckyVault Casino",
    logo: "/casinos/luckyvault.png",
    rating: "4.6",
    bonus: "100% Deposit Bonus",
    badge: "Featured",
    category: "Online Casino",
    verified: true,
    link: "#",

    license: "Curacao Licensed",
    payments: "Visa, Mastercard, Crypto",
    games: "Slots, Roulette, Live Games",

    pros: [
      "Competitive bonuses",
      "Modern interface",
      "Wide payment options",
    ],

    cons: [
      "Smaller game library",
      "Bonus terms apply",
    ],

    description:
      "A trusted casino partner offering exciting bonuses and community rewards.",
  },


  {
    slug: "goldenplay",
    name: "GoldenPlay Casino",
    logo: "/casinos/goldenplay.png",
    rating: "4.7",
    bonus: "250 Free Spins",
    badge: "Hot Offer",
    category: "Live Casino",
    verified: true,
    link: "#",

    license: "UKGC Licensed",
    payments: "Visa, Mastercard, PayPal",
    games: "Live Casino, Slots, Poker",

    pros: [
      "Excellent live casino section",
      "High quality games",
      "Regular promotions",
    ],

    cons: [
      "Limited free bonuses",
      "Some restrictions apply",
    ],

    description:
      "Enjoy live casino games and exclusive promotions from ArantesLive.",
  },
];



export const latestContent: ContentCard[] = [

  {
    title: "Casino Reviews",
    description:
      "Detailed reviews of online casinos, bonuses and promotions.",
    category: "Casino",
  },


  {
    title: "Casino Guides",
    description:
      "Learn about bonuses, RTP, games and important casino concepts.",
    category: "Guide",
  },


  {
    title: "Latest News",
    description:
      "Updates, promotions and announcements from ArantesLive.",
    category: "News",
  },

];