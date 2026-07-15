import Link from "next/link";

export function Navbar() {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Live",
      href: "/live",
    },
    {
      name: "Games",
      href: "/games",
    },
    {
      name: "Guides",
      href: "/guides",
    },
    {
      name: "News",
      href: "/news",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-[#0A0A0A]/80 backdrop-blur">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight"
        >
          Arantes
          <span className="text-red-500">
            Live
          </span>
        </Link>


        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-neutral-400 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}

        </div>


        {/* CTA */}
        <Link
          href="/live"
          className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold transition hover:bg-red-500"
        >
          Go Live
        </Link>


      </nav>

    </header>
  );
}