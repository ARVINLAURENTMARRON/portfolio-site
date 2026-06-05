"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const EMAIL = "arvinmarron03@gmail.com";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the email is shown as text as a fallback.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "h-11 gap-2 px-5"
      )}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
