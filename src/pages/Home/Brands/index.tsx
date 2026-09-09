import useEmblaCarousel from "embla-carousel-react";
import { brands } from "./brands";
import CarouselDots from "../../../components/ui/CarouselDots";
import SectionHeading from "../../../components/ui/SectionHeading";

const BRANDS_PER_SLIDE = 12;

const Brands = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const slides = Array.from(
    { length: Math.ceil(brands.length / BRANDS_PER_SLIDE) },
    (_, index) =>
      brands.slice(
        index * BRANDS_PER_SLIDE,
        index * BRANDS_PER_SLIDE + BRANDS_PER_SLIDE,
      ),
  );

  return (
    <section className="my-responsive">
      <SectionHeading className="ui-container" eyebrow="Trusted by Businesses">
        Brands We’ve Helped Grow
      </SectionHeading>

      <div className="sm:ui-container">
        <div
          ref={emblaRef}
          className="overflow-hidden relative space-y-6 sm:space-y-10"
        >
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%]">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-[repeat(4,200px)] justify-center gap-y-4 sm:gap-4">
                  {slide.map(({ image, alt }) => (
                    <img
                      key={alt}
                      src={image}
                      alt={alt}
                      className="w-full aspect-9/6 object-cover"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <CarouselDots emblaApi={emblaApi} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
