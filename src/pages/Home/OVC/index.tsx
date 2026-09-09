import useEmblaCarousel from "embla-carousel-react";
import CarouselArrowButtons from "../../../components/ui/CarouselArrowButtons";
import { getEmbedUrl, ovcVideos } from "./ovcVideos";
import SectionHeading from "../../../components/ui/SectionHeading";

const OVC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  return (
    <section className="my-responsive">
      <SectionHeading
        className="ui-container"
        eyebrow="A Few Highlights"
        isInCenter
      >
        OVC
      </SectionHeading>

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="-ml-4 flex">
            {ovcVideos.map((video, index) => (
              <div
                key={index}
                className="min-w-0 pl-4 flex-[0_0_100%] md:flex-[0_0_50%] 2xl:flex-[0_0_33.33%]"
              >
                <div className="aspect-video overflow-hidden bg-link">
                  <iframe
                    className="size-full"
                    src={getEmbedUrl(video)}
                    title="OVC video"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
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
