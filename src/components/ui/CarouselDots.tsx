import clsx from "clsx";
import { type EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

interface CarouselDotsProps {
  emblaApi: EmblaCarouselType | undefined;
}

const CarouselDots = ({ emblaApi }: CarouselDotsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <div className="flex justify-center items-center gap-1">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotButtonClick(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={selectedIndex === index}
          className="size-6 grid place-items-center"
        >
          <span
            className={clsx(
              "block h-2 rounded-full",
              index === selectedIndex ? "w-6 bg-secondary" : "w-2 bg-secondary/20",
              "duration-300",
            )}
          />
        </button>
      ))}
    </div>
  );
};

export default CarouselDots;
