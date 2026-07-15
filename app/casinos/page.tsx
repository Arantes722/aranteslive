import { CasinoCard } from "@/components/casino/CasinoCard";
import { getCasinos } from "@/lib/casinos";

export default async function CasinosPage() {
  const casinos = await getCasinos();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-5xl font-bold">
        Best Online Casinos
      </h1>

      <p className="mt-4 text-neutral-400">
        Discover our trusted casino partners, exclusive bonuses and detailed reviews.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {casinos.map((casino) => (
          <CasinoCard
            key={casino.id}
            casino={casino}
          />
        ))}
      </div>
    </main>
  );
}