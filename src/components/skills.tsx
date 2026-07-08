import { Workflow, Code, Layers, Database, Wrench, ShieldCheck } from "lucide-react";

const GROUPS = [
  {
    icon: Workflow,
    title: "Automation",
    items: [
      "Make.com",
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
    items: ["Git & GitHub", "VS Code", "Vercel", "Auth.js", "phpMyAdmin"],
  },
  {
    icon: ShieldCheck,
    title: "Focus Areas",
    items: [
      "Workflow automation",
      "Full-stack development",
      "Web app security",
      "Responsive design",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          Skills
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          What I can do
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
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
            );
          })}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            Currently expanding into:
          </span>{" "}
          n8n · Zapier · GoHighLevel — the automation platforms most in demand
          for remote roles.
        </p>
      </div>
    </section>
  );
}
