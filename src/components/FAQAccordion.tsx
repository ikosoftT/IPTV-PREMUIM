"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
};

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`glass rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-[#F2C847]/20"
                : "border-white/[0.06]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex items-center justify-between w-full p-5 sm:p-6 text-left"
            >
              <span className="text-sm sm:text-base font-bold text-white pr-4">{item.q}</span>
              <ChevronRight
                className={`h-4 w-4 text-[#F2C847] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <p className="text-sm text-white/50 leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
