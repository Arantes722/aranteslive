import Link from "next/link";
import { getStreamStatus } from "@/lib/twitch";

import {
  Home,
  Dice5,
  Radio,
  Gift,
  Users,
  ShoppingBag,
  Ticket,
} from "lucide-react";

import { StreamStatusCard } from "@/components/sidebar/StreamStatusCard";


const sections = [

  {
    title: "Discover",
    items: [
      {
        title: "Home",
        href: "/",
        icon: Home,
      },
      {
        title: "Casinos & Offers",
        href: "/casinos",
        icon: Dice5,
      },
      {
        title: "Giveaways & Raffles",
        href: "/giveaways",
        icon: Gift,
      },
    ],
  },


  {
    title: "Community",
    items: [
      {
        title: "Live",
        href: "/live",
        icon: Radio,
      },
      {
        title: "Community",
        href: "/community",
        icon: Users,
      },
    ],
  },


  {
    title: "Rewards",
    items: [
      {
        title: "Shop",
        href: "/shop",
        icon: ShoppingBag,
      },
      {
        title: "Redeem",
        href: "/redeem",
        icon: Ticket,
      },
    ],
  },

];



export async function Sidebar() {

  const stream = await getStreamStatus();


  return (

    <aside
      className="
        fixed
        left-0
        top-20
        hidden
        h-[calc(100vh-80px)]
        w-72
        border-r
        border-neutral-800
        bg-gradient-to-b
        from-[#080808]
        to-[#030303]
        p-6
        lg:flex
        lg:flex-col
      "
    >


      {/* Navigation */}

      <nav
        className="
          flex
          flex-1
          flex-col
          justify-center
          gap-7
        "
      >


        {sections.map((section) => (

          <div
            key={section.title}
          >


            <p
              className="
                mb-3
                px-4
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-neutral-600
              "
            >
              {section.title}
            </p>



            <div className="space-y-1">


              {section.items.map((item) => {

                const Icon = item.icon;


                return (

                  <Link
                    key={item.href}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-3
                      text-neutral-400
                      transition
                      hover:bg-red-500/10
                      hover:text-white
                    "
                  >


                    <Icon
                      size={20}
                      className="
                        transition
                        group-hover:text-red-500
                      "
                    />


                    <span className="text-sm font-medium">
                      {item.title}
                    </span>


                  </Link>

                );

              })}


            </div>


          </div>

        ))}


      </nav>

      {/* Stream Status */}

      <div className="mt-auto pt-6">

        <StreamStatusCard
          live={stream.live}
          title={stream.title}
          game={stream.game}
          viewers={stream.viewers}
          thumbnail={stream.thumbnail}
          avatar={stream.avatar}
        />

      </div>


    </aside>

  );

}