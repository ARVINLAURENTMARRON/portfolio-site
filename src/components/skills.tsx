import Image from "next/image";
import { Workflow, Code, Layers, Database, Wrench, ShieldCheck } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const GROUPS = [
  {
    icon: Workflow,
    title: "Automation",
    items: [
      "Make.com",
      "Zapier",
      "n8n",
      "GoHighLevel",
      "Airtable",
      "Notion",
      "Slack",
      "Tally",
      "Gmail / Google Workspace",
      "Webhooks & APIs",
    ],
  },
  {
    icon: Code,
    title: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    items: ["React", "Next.js", "Laravel", "Tailwind CSS", "Prisma"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "VS Code",
      "Claude Code",
      "Vercel",
      "Auth.js",
      "phpMyAdmin",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Focus Areas",
    items: [
      "Workflow automation",
      "AI assisted development",
      "Full-stack development",
      "Web app security",
      "Responsive design",
    ],
  },
];

// Logos for the auto-scrolling marquee. Drop matching PNGs into /public/logos/.
const LOGOS = [
  { name: "Make.com", src: "/logos/make.png" },
  { name: "n8n", src: "/logos/n8n.png" },
  { name: "Zapier", src: "/logos/zapier.png" },
  { name: "Airtable", src: "/logos/airtable.png" },
  { name: "Notion", src: "/logos/notion.png" },
  { name: "Slack", src: "/logos/slack.png" },
  { name: "GoHighLevel", src: "/logos/gohighlevel.png" },
  { name: "Next.js", src: "/logos/nextjs.png" },
  { name: "React", src: "/logos/react.png" },
  { name: "Laravel", src: "/logos/laravel.png" },
  { name: "TypeScript", src: "/logos/typescript.png" },
  { name: "Java", src: "/logos/java.png" },
  { name: "HTML5", src: "/logos/html5.png" },
  { name: "CSS3", src: "/logos/css3.png" },
  { name: "PostgreSQL", src: "/logos/postgresql.png" },
  { name: "MySQL", src: "/logos/mysql.png" },
  { name: "Vercel", src: "/logos/vercel.png" },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          Skills
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          What I can do
        </h2>

        {/* Auto-scrolling logo marquee */}
        <div className="marquee-mask relative mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee gap-5">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex size-24 shrink-0 items-center justify-center rounded-2xl border border-border bg-background shadow-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="relative rounded-2xl">
                <GlowingEffect
                  spread={40}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />
                <div className="relative h-full rounded-2xl border border-border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-olive-soft text-secondary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-medium text-foreground">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-olive/30 bg-cream px-3 py-1 text-sm text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
