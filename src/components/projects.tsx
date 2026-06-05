import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProjectGallery } from "@/components/project-gallery";

type Project = {
  name: string;
  description: string;
  tags: string[];
  status: "published" | "in-progress";
  liveUrl?: string;
  repoUrl?: string;
  images?: string[];
};

// When a project ships, set status: "published" and fill in liveUrl, repoUrl,
// and images (paths under /public, e.g. "/projects/task-manager/1.png").
// The "Visit website" link and "View pictures" gallery appear automatically.
const PROJECTS: Project[] = [
  {
    name: "Task Manager",
    description:
      "A full CRUD app with user accounts, secure login, and a protected dashboard where you create, organize, and track your tasks.",
    tags: ["Next.js", "Auth", "Database"],
    status: "in-progress",
  },
  {
    name: "Real-time App",
    description:
      "A live, multi-user experience powered by WebSockets — a change from one person shows up instantly for everyone else.",
    tags: ["Next.js", "WebSockets"],
    status: "in-progress",
  },
  {
    name: "API-Driven App",
    description:
      "A polished, responsive interface over live third-party data, with smart fetching and caching for a fast experience.",
    tags: ["Next.js", "REST APIs"],
    status: "in-progress",
  },
  {
    name: "Flagship Product",
    description:
      "A complete product built end to end — user accounts, roles, online payments, and an admin dashboard.",
    tags: ["Next.js", "Stripe", "Postgres"],
    status: "in-progress",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          Projects
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          What I&apos;m building
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          A series of full-stack applications. Each finished project comes with a
          live demo, screenshots, and open-source code.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PROJECTS.map((project) => {
            const isPublished = project.status === "published";
            const hasImages = !!project.images && project.images.length > 0;

            return (
              <div
                key={project.name}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium text-foreground">{project.name}</h3>
                  {!isPublished && (
                    <span className="rounded-full border border-olive/30 bg-cream px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      In progress
                    </span>
                  )}
                </div>

                <p className="mt-3 text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-cream px-3 py-1 text-xs text-foreground/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {isPublished && (
                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
                      >
                        <ExternalLink className="size-3.5" />
                        Visit website
                      </a>
                    )}
                    {hasImages && (
                      <ProjectGallery
                        name={project.name}
                        images={project.images!}
                      />
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "outline", size: "sm" }),
                          "gap-1.5"
                        )}
                      >
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
