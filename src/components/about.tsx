const STRENGTHS = [
  "Strong work ethic",
  "Fast self-directed learner",
  "Curious & growth-driven",
  "Adaptable",
  "Clear communicator",
  "Problem solver",
  "Detail-oriented",
  "Accountable",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          About
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Who I am
        </h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I&apos;m a third-year BS Computer Science student at{" "}
              <span className="font-medium text-foreground">
                Saint Louis University, Baguio
              </span>
              , and a freelance full-stack developer based in Urdaneta City,
              Pangasinan.
            </p>
            <p>
              I&apos;ve delivered real client work — from a fully responsive
              product website to securing and hardening a live, high-volume
              transaction platform: removing critical vulnerabilities, adding
              server-side access controls and prepared statements against SQL
              injection, and documenting every step.
            </p>
            <p>
              I work across the web stack — PHP, MySQL, and JavaScript — and
              I&apos;m now building with React, Next.js, and TypeScript. I care
              about secure, reliable, readable code, and I&apos;m always learning
              something new.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Core strengths
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {STRENGTHS.map((strength) => (
                <li
                  key={strength}
                  className="rounded-full border border-olive/30 bg-cream px-3 py-1 text-sm text-foreground/80"
                >
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
