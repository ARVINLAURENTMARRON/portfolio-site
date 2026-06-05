"use client";

import { useState } from "react";
import Image from "next/image";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function ProjectGallery({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // wraps around the ends of the list
  const go = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
      >
        <Images className="size-3.5" />
        View pictures
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} screenshots`}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${name} screenshot ${index + 1} of ${images.length}`}
              width={1600}
              height={1000}
              className="h-auto max-h-[80vh] w-full rounded-xl object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
                >
                  <ChevronRight className="size-5" />
                </button>
                <p className="mt-3 text-center text-sm text-white/80">
                  {index + 1} / {images.length}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
