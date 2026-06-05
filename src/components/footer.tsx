export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {year} Arvin Laurent Marron</p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:arvinmarron03@gmail.com"
            className="transition-colors hover:text-olive"
          >
            Email
          </a>
          <a
            href="https://github.com/ARVINLAURENTMARRON"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-olive"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arvin-marron-492510305/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-olive"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
