import { ShieldCheck, Globe, GraduationCap, Award } from "lucide-react";

const ROLES = [
  {
    icon: ShieldCheck,
    title: "Freelance Web Developer — Security Remediation & Maintenance",
    meta: "Confidential client · Live transaction platform",
    period: "May 2026 – Present",
    points: [
      "Secured and maintained a live, high-volume transaction platform.",
      "Identified and removed critical vulnerabilities left by a previous developer — unauthorized access points, hardcoded credentials, and weak password hashing.",
      "Implemented hardening: server-side access controls, prepared statements against SQL injection, and a migration plan toward stronger hashing.",
      "Documented the full process for reliability and transparency.",
    ],
    tags: ["PHP", "MySQL", "Web App Security"],
  },
  {
    icon: Globe,
    title: "Freelance Web Developer — Responsive Product Website",
    meta: "Client product · Marketing site",
    points: [
      "Designed and built a fully responsive marketing website for a client's product, working seamlessly across desktop and mobile.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const CERTS = [
  "Trend Micro — Cyber Defense Society 2024",
  "AWS — Cloud Horizons: The AWS Kickoff",
  "2nd International AI Edutech Summit",
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          Experience
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          What I&apos;ve done
        </h2>

        <div className="mt-10 space-y-5">
          {ROLES.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-olive-soft text-secondary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                      <h3 className="font-medium text-foreground">{role.title}</h3>
                      {role.period && (
                        <span className="shrink-0 rounded-full border border-olive/30 bg-cream px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                          {role.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{role.meta}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-olive"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-olive/30 bg-cream px-3 py-1 text-sm text-foreground/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-olive-soft text-secondary-foreground">
                <GraduationCap className="size-5" />
              </span>
              <h3 className="font-medium text-foreground">Education</h3>
            </div>
            <p className="mt-4 font-medium text-foreground">
              BS Computer Science
            </p>
            <p className="text-muted-foreground">Saint Louis University, Baguio</p>
            <p className="text-sm text-muted-foreground">3rd year · Expected 2027</p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-olive-soft text-secondary-foreground">
                <Award className="size-5" />
              </span>
              <h3 className="font-medium text-foreground">
                Certifications &amp; Seminars
              </h3>
            </div>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {CERTS.map((cert) => (
                <li key={cert} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-olive"
                  />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
