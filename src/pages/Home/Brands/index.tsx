import useEmblaCarousel from "embla-carousel-react";
import { brands } from "./brands";
import CarouselDots from "../../../components/ui/CarouselDots";

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
      <div className="ui-container mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="size-2 rounded-full bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
            Trusted by Businesses
          </p>
        </div>

        <h3 className="text-3xl font-semibold sm:text-5xl capitalize">
          Brands We’ve Helped Grow
        </h3>
      </div>

      <div className="sm:ui-container">
        <div ref={emblaRef} className="overflow-hidden relative space-y-6 sm:space-y-10">
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
