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
      "One intake form becomes a fully onboarded client across five tools. It deduplicates by email, tells new clients from returning ones, routes each to the right team, and sends a Slack alert, a Notion page, and a welcome email automatically.",
    about: [
      "Manual client onboarding is slow and easy to get wrong. Someone has to copy form answers between tools, remember who is new versus returning, and route each client to the right team by hand.",
      "This system turns a single intake form into a fully onboarded client with zero manual work. It deduplicates by email so there are never duplicate records, tells new clients apart from returning ones, and routes each to the correct team automatically.",
      "New clients get their record stamped, an announcement in Slack, a Notion workspace page, and a branded welcome email. Returning clients are recognized by email, so there are never duplicates. If a returning client's needs have changed, the system detects it, moves them to the right team, and notifies both the new team and the previous one.",
      "Built with Make.com orchestrating Tally, Airtable, Notion, Slack, and Gmail. The interesting engineering: a Search, Aggregate, then Upsert deduplication pattern, modelling events separately from state (notifications are events, team ownership is state), and change detection that only reassigns a returning client when the service they need actually changes.",
    ],
    liveUrl: "https://tally.so/r/eqpXMo",
    images: [
      "/projects/client-onboarding/1.png",
      "/projects/client-onboarding/2.png",
      "/projects/client-onboarding/notion.png",
      "/projects/client-onboarding/4.png",
    ],
  },
  {
    slug: "ebarangay",
    name: "eBarangay: Barangay Services System",
    category: "web",
    type: "Full-stack Platform",
    tools: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
    summary:
      "A full-stack system that modernizes the paper services of a Philippine barangay. Residents transact online, and officials process everything from dashboards for each role.",
    about: [
      "eBarangay replaces a barangay's paper queue with an online portal: residents and business owners transact online, while officials process everything from dedicated dashboards.",
      "It's grounded in RA 7160, the Local Government Code, so roles, permissions, and processes all follow the law. The build is core first and done module by module, so it's always working and always ready to demo.",
      "A standout piece is the document based account verification (KYC): residents upload a government ID and proof of residency, an official reviews and approves or rejects, and the whole flow puts privacy first. Files sit in private storage behind signed URLs and are automatically purged after 7 days, in line with the Data Privacy Act.",
    ],
    badge: "In progress",
    roadmap: {
      built: [
        "Authentication and access control for residents, business owners, and officials, with route guards",
        "Resident Records (RBI): full CRUD, search, and profiles residents manage themselves",
        "Document based account verification (KYC): ID and proof of residency uploads with official review. Privacy first, with private storage, signed access, and automatic purge after 7 days (Data Privacy Act compliant)",
        "Public document verification page (control number / QR)",
      ],
      planned: [
        "Document request → review → sign → issue loop with QR verifiable official PDFs",
        "Treasurer fees & receipts",
        "Automated notifications & scheduled reminders",
        "Business permits & renewals",
        "Katarungang Pambarangay (dispute resolution)",
        "Community programs, service requests & announcements",
        "Dashboards for each role & automatically generated reports",
      ],
    },
    liveUrl: "https://barangay-system-flax.vercel.app",
    images: [
      "/projects/ebarangay/1.png",
      "/projects/ebarangay/2.png",
      "/projects/ebarangay/3.png",
      "/projects/ebarangay/4.png",
    ],
  },
  {
    slug: "realtime-ops",
    name: "Realtime Operations & Transaction Platform",
    category: "web",
    type: "Realtime Platform",
    tools: ["Laravel", "PHP", "WebSockets", "MySQL"],
    summary:
      "A realtime operations platform built end to end for a live events business. Staff work from dashboards for each role, a cashier module handles transactions, and every change is pushed live over WebSockets so all screens stay in sync.",
    about: [
      "A realtime operations platform built end to end for a private live events business. Staff work from dashboards for each role, a cashier module handles transactions, and every change is pushed live over WebSockets so all connected screens stay in sync instantly.",
      "At close, the system compiles an automated end of day report. Details are generalized here for client confidentiality, so there is no client name, live link, or real data.",
    ],
    badge: "Private client",
    images: [],
  },
  {
    slug: "firban-cosmetics",
    name: "FIRBAN Cosmetics",
    category: "web",
    type: "Product Website",
    tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    summary:
      "A responsive product website for a real cosmetics brand, built by hand with HTML, CSS, and JavaScript. It has separate desktop and mobile layouts, an animated landing, smooth navigation, and an integrated order flow.",
    about: [
      "FIRBAN Cosmetics is a product website I built for a real cosmetics brand. It shows off the products, tells the brand story, and lets customers place an order, all from one clean and responsive site.",
      "I built the front end by hand with plain HTML, CSS, and JavaScript, no framework. It has separate layouts for desktop and mobile so it looks right on any screen, an animated landing section, and smooth navigation across Home, Our Products, Order Now, and About.",
    ],
    badge: "Client work",
    liveUrl: "https://firban-cosmetics.vercel.app",
    images: [
      "/projects/firban-cosmetics/1.png",
      "/projects/firban-cosmetics/2.png",
    ],
  },
];

const CATEGORIES: { id: Project["category"]; label: string }[] = [
  { id: "automation", label: "Automation" },
  { id: "web", label: "Web Development" },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-14 md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          Projects
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          What I build
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Two tracks: automation systems that turn manual busywork into automatic
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
