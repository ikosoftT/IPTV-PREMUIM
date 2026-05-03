"use client";

import React, { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type EmblaSliderProps = {
  children: ReactNode;
  delay?: number;
  align?: "start" | "center" | "end";
  loop?: boolean;
};

export default function EmblaSlider({ children, delay = 4000, align = "start", loop = true }: EmblaSliderProps) {
  const [emblaRef] = useEmblaCarousel({ loop, align }, [Autoplay({ delay, stopOnInteraction: false })]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {React.Children.map(children, (child) => (
          <div className="embla__slide">{child}</div>
        ))}
      </div>
    </div>
  );
}
