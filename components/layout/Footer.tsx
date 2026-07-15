export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} ArantesLive. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="#" className="hover:text-white transition">
            Twitch
          </a>

          <a href="#" className="hover:text-white transition">
            YouTube
          </a>

          <a href="#" className="hover:text-white transition">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}