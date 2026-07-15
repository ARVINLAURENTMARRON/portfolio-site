import { Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { CopyEmailButton } from "@/components/copy-email-button";

const EMAIL = "arvinmarron03@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
  "Hello Arvin"
)}`;
const MAP_SRC =
  "https://maps.google.com/maps?q=Bayaoas,%20Urdaneta%20City,%20Pangasinan&t=&z=14&ie=UTF8&iwloc=&output=embed";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-cream">
      <div className="mx-auto w-full max-w-3xl px-6 py-14 text-center md:py-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-olive">
          Contact
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Have a role, a project, or a question? I&apos;d love to hear from you.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 inline-block font-serif text-xl text-foreground underline decoration-olive/40 underline-offset-4 transition-colors hover:text-olive sm:text-2xl"
        >
          {EMAIL}
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "h-11 gap-2 px-5")}
          >
            <Mail className="size-4" />
            Open in Gmail
          </a>
          <CopyEmailButton />
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          Bayaoas, Urdaneta City, Pangasinan, Philippines
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Bayaoas, Urdaneta City, Pangasinan on Google Maps"
            src={MAP_SRC}
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
