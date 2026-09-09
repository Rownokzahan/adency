import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import CarouselArrowButtons from "../../../components/ui/CarouselArrowButtons";
import { printPackagingImages } from "./printPackagingImages";
import SectionHeading from "../../../components/ui/SectionHeading";

const PrintPackaging = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      watchDrag: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="my-responsive">
      <SectionHeading
        className="ui-container"
        eyebrow="Selected Projects"
        isInCenter
      >
        Print and Packaging
      </SectionHeading>

      <div className="relative">
        <div
          ref={emblaRef}
          className="overflow-hidden"
          aria-label="Photography gallery"
        >
          <div className="-ml-2 flex items-stretch">
            {[...printPackagingImages].map((image, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_90%] pl-2 md:flex-[0_0_32%] xl:flex-[0_0_40%]"
              >
                <div className="aspect-7/5 overflow-hidden group relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="size-full object-cover group-hover:scale-110 duration-300"
                    decoding="async"
                  />

                  <span className="bg-black/20 absolute inset-0 group-hover:opacity-0 duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <CarouselArrowButtons emblaApi={emblaApi} />
      </div>
    </section>
  );
};

export default PrintPackaging;
