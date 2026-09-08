import useEmblaCarousel from "embla-carousel-react";
import CarouselArrowButtons from "../../../components/ui/CarouselArrowButtons";

import Reel from "./Reel";
import { reels } from "./reels";

const Reels = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  return (
    <section className="my-responsive">
      <div className="ui-container mb-8">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="size-2 rounded-full bg-primary" />

          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
            In the Moment
          </p>
        </div>

        <h3 className="text-center text-4xl font-semibold sm:text-6xl">
          Reels
        </h3>
      </div>

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-2 flex">
            {reels.map((reel, index) => (
              <div
                key={index}
                className="min-w-0 pl-2 flex-[0_0_78%] md:flex-[0_0_32%] lg:flex-[0_0_25%] xl:flex-[0_0_18%]"
              >
                <Reel src={reel} />
              </div>
            ))}
          </div>
        </div>

        <CarouselArrowButtons emblaApi={emblaApi} />
      </div>
    </section>
  );
};

export default Reels;
