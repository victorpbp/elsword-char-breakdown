'use client'

import GlossaryItem from "@/components/layout/glossary/glossaryOverlay/glossaryItem/glossaryItem";
import { useGlossary } from "@/contexts/glossary/glossaryContext";
import { useEffect, useRef } from "react";

export default function GlossaryOverlay() {

  const { targetTerm, glossaryItems } = useGlossary();

  // Initial render to assure a smooth scrolling experience even when coming from a different page
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetTerm && overlayRef.current) {
      const element = overlayRef.current.querySelector(targetTerm);
      if (element) {
        (element as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  })
  

  return (
    <>

      <div
        className="flex flex-col gap-5"
      >

        <div
          ref={overlayRef}
          className="flex flex-col justify-start text-left px-5 w-full max-w-5xl max-h-96 overflow-y-auto"
        >
          {glossaryItems.map((item, index) => (
            <GlossaryItem
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
      </div>
    </>
  );
}
