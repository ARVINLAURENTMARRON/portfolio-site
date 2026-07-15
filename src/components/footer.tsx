import type { SVGProps } from "react";
import { ArrowRight } from "lucide-react";

// lucide-react removed its brand logos, so we use small inline SVGs instead.
function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        {/* Closing call-to-action */}
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-olive">
              Heard enough?
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Let&apos;s talk.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start rounded-full bg-olive px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105 md:self-auto"
          >
            Get in touch
            <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <p className="font-serif text-lg font-semibold">Arvin Laurent Marron</p>
            <p className="mt-2 text-sm text-cream/70">
              Automation Specialist & Full-Stack Developer
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="#projects"
                  className="text-cream/80 transition-colors hover:text-olive"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-cream/80 transition-colors hover:text-olive"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Arvin-Laurent-Marron-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors hover:text-olive"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:arvinmarron03@gmail.com"
                  className="text-cream/80 transition-colors hover:text-olive"
                >
                  arvinmarron03@gmail.com
                </a>
              </li>
              <li className="text-cream/70">Urdaneta City, Philippines</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">
              Follow
            </p>
            <div className="mt-3 flex items-center gap-4">
              <a
                href="https://github.com/ARVINLAURENTMARRON"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-cream/80 transition-colors hover:text-olive"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arvin-marron-492510305/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-cream/80 transition-colors hover:text-olive"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-xs text-cream/60">
          <p>© {year} Arvin Laurent Marron</p>
        </div>
      </div>
    </footer>
  );
}
