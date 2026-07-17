import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaTwitch,
} from "react-icons/fa";

const socials = [
  {
    name: "Twitch",
    icon: FaTwitch,
    description: "Watch streams live",
    color: "text-red-500",
    href: "#",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    description: "Join the community",
    color: "text-red-500",
    href: "#",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    description: "Daily short clips",
    color: "text-red-500",
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    description: "Behind the scenes",
    color: "text-red-500",
    href: "#",
  },
];

export function CommunitySection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">

      <div className="mb-8">

        <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
          Community
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Join ArantesLive
        </h2>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {socials.map((social) => {

          const Icon = social.icon;

          return (

            <a
              key={social.name}
              href={social.href}
              className="
                group
                rounded-2xl
                border
                border-neutral-800
                bg-neutral-950
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-red-500
                hover:shadow-[0_0_30px_rgba(239,68,68,.18)]
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-red-500/10
                "
              >

                <Icon
                  size={28}
                  className={social.color}
                />

              </div>

              <h3 className="mt-5 text-xl font-bold">
                {social.name}
              </h3>

              <p className="mt-2 text-sm text-neutral-400">
                {social.description}
              </p>

            </a>

          );

        })}

      </div>

    </section>
  );
}