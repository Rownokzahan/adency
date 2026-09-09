import useEmblaCarousel from "embla-carousel-react";
import CarouselArrowButtons from "../../../components/ui/CarouselArrowButtons";

import Reel from "./Reel";
import { reels } from "./reels";
import SectionHeading from "../../../components/ui/SectionHeading";

const Reels = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  return (
    <section className="my-responsive">
      <SectionHeading
        className="ui-container"
        eyebrow="In the Moment"
        isInCenter
      >
        Reels
      </SectionHeading>

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
