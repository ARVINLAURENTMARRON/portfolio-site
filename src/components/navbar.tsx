import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Arvin<span className="text-olive">.</span>
        </Link>
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-olive"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
