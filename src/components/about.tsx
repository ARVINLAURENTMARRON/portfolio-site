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
              , and a freelance automation specialist and full-stack developer
              based in Urdaneta City, Pangasinan.
            </p>
            <p>
              I build automation systems that connect the tools businesses
              already use, like Make.com, Airtable, Notion, Slack, and Gmail.
              This lets repetitive work like client onboarding, data entry, and
              team routing happen automatically instead of by hand.
            </p>
            <p>
              The difference with my work is that I can actually code. When a
              no-code platform hits its limit, I switch to custom scripts and
              APIs to get the job done. I&apos;ve also delivered real full-stack
              projects, from a responsive product website to securing a live,
              high-volume transaction platform where I removed critical
              vulnerabilities, added server-side access controls and prepared
              statements to stop SQL injection, and documented every step.
            </p>
            <p>
              I work across the web stack with PHP, MySQL, JavaScript, React,
              Next.js, and TypeScript, and I care about writing secure, reliable,
              readable code. I&apos;m always learning something new.
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
