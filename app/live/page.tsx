import { Radio } from "lucide-react";

import { LiveHero } from "@/components/live/LiveHero";
import { LivePlayer } from "@/components/live/LivePlayer";
import { LiveChat } from "@/components/live/LiveChat";

export default function LivePage() {
  return (
    <main
      className="
        mx-auto
        max-w-7xl
        space-y-8
        px-6
        py-8
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-red-500/10
            text-red-500
          "
        >
          <Radio size={24} />
        </div>

        <div>
          <h1
            className="
              text-4xl
              font-black
            "
          >
            Live
          </h1>

          <p
            className="
              mt-1
              text-neutral-500
            "
          >
            Watch the stream and stay connected with the community.
          </p>
        </div>
      </div>

      <LiveHero />

      {/* Player + Chat */}

      <section
        className="
          grid
          gap-6
          xl:grid-cols-[1fr_360px]
        "
      >
        <LivePlayer />

        <LiveChat />
      </section>
    </main>
  );
}
