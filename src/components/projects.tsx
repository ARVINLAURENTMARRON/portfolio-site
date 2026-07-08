import { ProjectCard, type Project } from "@/components/project-card";

// Add a project by dropping it in this array with its `category`. A category's
// heading only renders when it has at least one project, so the section grows
// as real work lands — never an empty shelf. Screenshots live in
// /public/projects/<slug>/ and are listed in `images`.
const PROJECTS: Project[] = [
  {
    slug: "client-onboarding",
    name: "Client Onboarding Automation",
    category: "automation",
    type: "Client Onboarding",
    tools: ["Make.com", "Airtable", "Notion", "Slack", "Gmail", "Tally"],
    summary:
      "One intake form becomes a fully onboarded client across five tools — deduplicated, routed to the right team, and welcomed automatically.",
    about: [
      "Manual client onboarding is slow and error-prone — copying form answers between tools, remembering who's new versus returning, and routing each client to the right team by hand.",
      "This system turns a single intake form into a fully onboarded client with zero manual work. It deduplicates by email so there are never duplicate records, detects new versus returning clients, and routes each to the correct team automatically.",
      "New clients get their record stamped, an announcement in Slack, a Notion workspace page, and a branded welcome email. Returning clients are recognized by email and routed to the right team based on the service they need — no duplicate records, no manual sorting.",
      "Built with Make.com orchestrating Tally, Airtable, Notion, Slack, and Gmail. The interesting engineering: a Search → Aggregate → Upsert deduplication pattern and event-versus-state modelling (notifications are events; team ownership is state) that keeps each client owned by exactly one team.",
    ],
    liveUrl: "https://tally.so/r/eqpXMo",
    images: [],
  },
  {
    slug: "ebarangay",
    name: "eBarangay — Barangay Services System",
    category: "web",
    type: "Full-stack Platform",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
    summary:
      "A full-stack system modernizing the paper-based services of a Philippine barangay — residents transact online, officials process from role-based dashboards.",
    about: [
      "eBarangay replaces a barangay's paper queue with an online portal: residents and business owners transact online, while officials process everything from role-specific dashboards.",
      "It's grounded in RA 7160 (the Local Government Code) — roles, permissions, and processes follow the law. The build is core-first and module-by-module, so it's always working and always demo-able.",
      "A standout piece is the document-based account verification (KYC): residents upload a government ID and proof of residency, an official reviews and approves or rejects, and the whole flow is privacy-first — files sit in private storage behind signed URLs and are automatically purged after 7 days, in line with the Data Privacy Act.",
    ],
    badge: "In progress",
    roadmap: {
      built: [
        "Multi-role authentication & access control (residents, business owners, officials) with route guards",
        "Resident Records (RBI): full CRUD, search, and resident self-profiles",
        "Document-based account verification (KYC): ID and proof-of-residency uploads with official review — privacy-first, with private storage, signed access, and automatic 7-day purge (Data Privacy Act compliant)",
        "Public document-verification page (control number / QR)",
      ],
      planned: [
        "Document request → review → sign → issue loop with QR-verifiable official PDFs",
        "Treasurer fees & receipts",
        "Automated notifications & scheduled reminders",
        "Business permits & renewals",
        "Katarungang Pambarangay (dispute resolution)",
        "Community programs, service requests & announcements",
        "Per-role dashboards & auto-generated reports",
      ],
    },
    liveUrl: "https://barangay-system-flax.vercel.app",
    images: [],
  },
  {
    slug: "realtime-ops",
    name: "Real-time Operations & Transaction Platform",
    category: "web",
    type: "Real-time Platform",
    tools: ["Laravel", "PHP", "WebSockets", "MySQL"],
    summary:
      "A real-time operations platform for a live-events business — role-based dashboards, cashiering, live updates, and end-of-day reporting.",
    about: [
      "A real-time operations platform built end to end for a private live-events business. Staff work from role-based dashboards; a cashier module handles transactions; and every change is pushed live over WebSockets so all connected screens stay in sync instantly.",
      "At close, the system compiles an automated end-of-day report. Details are generalized here for client confidentiality — no client name, live link, or real data.",
    ],
    badge: "Private client",
    images: [],
  },
];

const CATEGORIES: { id: Project["category"]; label: string }[] = [
  { id: "automation", label: "Automation" },
  { id: "web", label: "Web Development" },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          Projects
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          What I build
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Two tracks: automation systems that turn manual busywork into hands-off
          workflows, and full-stack web apps. Tap any card to open the full case
          study and screenshots.
        </p>

        {CATEGORIES.map((category) => {
          const projects = PROJECTS.filter((p) => p.category === category.id);
          if (projects.length === 0) return null;

          return (
            <div key={category.id} className="mt-14">
              <h3 className="font-serif text-xl font-semibold tracking-tight">
                {category.label}
              </h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
