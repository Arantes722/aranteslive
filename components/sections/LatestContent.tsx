import { latestContent } from "@/constants/home";

export function LatestContent() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <h2 className="mb-8 text-3xl font-bold">
        Latest Content
      </h2>

      <div className="grid gap-6 md:grid-cols-3">

        {latestContent.map((content) => (
          <div
            key={content.title}
            className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-red-500"
          >

            <span className="text-sm text-red-500">
              {content.category}
            </span>

            <h3 className="mt-3 text-xl font-semibold">
              {content.title}
            </h3>

            <p className="mt-3 text-neutral-400">
              {content.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}