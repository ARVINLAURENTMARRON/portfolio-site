"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export type Project = {
  slug: string; // used for the /public/projects/<slug>/ image folder
  name: string;
  category: "automation" | "web";
  type: string; // e.g. "Client Onboarding", "CRM" — the kind of work
  tools: string[]; // the stack / platforms used
  summary: string; // one/two lines shown on the card face
  about: string[]; // paragraphs shown in the expanded case study
  badge?: string; // small status/context label, e.g. "In progress", "Private client"
  roadmap?: { built: string[]; planned: string[] };
  liveUrl?: string;
  repoUrl?: string;
  images?: string[]; // e.g. "/projects/client-onboarding/1.png"
};

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Compact, fixed-height tile — the whole card is clickable */}
      <div className="relative h-full rounded-2xl">
        <GlowingEffect
          spread={40}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 text-left shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-olive"
        >
        <p className="font-serif text-xs uppercase tracking-[0.18em] text-olive">
          {project.type}
        </p>

        <div className="mt-1 flex items-start justify-between gap-3">
          <h4 className="font-medium text-foreground">{project.name}</h4>
          {project.badge && (
            <span className="shrink-0 rounded-full border border-olive/30 bg-cream px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {project.badge}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border bg-cream px-3 py-1 text-xs text-foreground/70"
            >
              {tool}
            </li>
          ))}
          {project.tools.length > 4 && (
            <li className="rounded-full border border-border bg-cream px-3 py-1 text-xs text-foreground/70">
              +{project.tools.length - 4}
            </li>
          )}
        </ul>

        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-olive">
          View case study
          <ArrowUpRight className="size-4" />
        </span>
        </button>
      </div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const images = project.images ?? [];
  const [index, setIndex] = useState(0);
  const go = (i: number) => setIndex((i + images.length) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} case study`}
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl rounded-2xl bg-background p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full border border-border bg-cream p-1.5 text-foreground/70 transition-colors hover:text-foreground"
        >
          <X className="size-4" />
        </button>

        <p className="font-serif text-xs uppercase tracking-[0.18em] text-olive">
          {project.type}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-3 pr-8">
          <h3 className="font-serif text-2xl font-semibold tracking-tight">
            {project.name}
          </h3>
          {project.badge && (
            <span className="rounded-full border border-olive/30 bg-cream px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {project.badge}
            </span>
          )}
        </div>

        {/* Screenshot carousel */}
        {images.length > 0 && (
          <div className="relative mt-5">
            <Image
              src={images[index]}
              alt={`${project.name} screenshot ${index + 1} of ${images.length}`}
              width={1600}
              height={1000}
              className="h-auto max-h-[60vh] w-full rounded-xl border border-border object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronRight className="size-5" />
                </button>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  {index + 1} / {images.length}
                </p>
              </>
            )}
          </div>
        )}

        {/* What it is / case study */}
        <div className="mt-5 space-y-3">
          {project.about.map((para, i) => (
            <p key={i} className="text-muted-foreground">
              {para}
            </p>
          ))}
        </div>

        {/* Built / roadmap */}
        {project.roadmap && (
          <div className="mt-5 space-y-4 rounded-xl border border-border bg-cream p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-olive">
                Built so far
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.roadmap.built.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-foreground/80"
                  >
                    <span aria-hidden className="text-olive">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                On the roadmap
              </p>
              <ul className="mt-2 space-y-1.5">
                {project.roadmap.planned.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span aria-hidden>○</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tools */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full border border-border bg-cream px-3 py-1 text-xs text-foreground/70"
            >
              {tool}
            </li>
          ))}
        </ul>

        {/* Links */}
        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
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
    </div>
  );
}
