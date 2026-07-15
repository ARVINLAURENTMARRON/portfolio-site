"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const LINKS = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Arvin<span className="text-olive">.</span>
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
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
          {/* Hamburger toggle — mobile only */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex items-center justify-center rounded-md p-1 text-foreground transition-colors hover:text-olive md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur md:hidden">
          <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-6 py-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-base text-muted-foreground transition-colors hover:bg-olive-soft hover:text-olive"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
