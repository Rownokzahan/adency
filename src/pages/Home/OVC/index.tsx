import useEmblaCarousel from "embla-carousel-react";
import CarouselArrowButtons from "../../../components/ui/CarouselArrowButtons";

const videoIds = ["EVLIcsF-8dA", "ufnQuif7J0Y", "Yb-OwjBI8RQ"];

const OVC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  return (
    <section className="pb-10 sm:pb-18">
      <div className="ui-container mb-8">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="size-2 rounded-full bg-primary" />

          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
            A Few Highlights
          </p>
        </div>

        <h3 className="text-center text-4xl font-semibold sm:text-6xl">OVC</h3>
      </div>

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-4 flex">
            {videoIds.map((videoId) => (
              <div
                key={videoId}
                className="min-w-0 pl-4 flex-[0_0_100%] md:flex-[0_0_50%] 2xl:flex-[0_0_33.33%]"
              >
                <div className="aspect-video overflow-hidden bg-link">
                  <iframe
                    className="size-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="OVC video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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

export default OVC;
