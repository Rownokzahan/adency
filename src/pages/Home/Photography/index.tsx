import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { photographyImages } from "./photographyImages";
import SectionEyebrow from "../../../components/ui/SectionEyebrow";

const Photography = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      watchDrag: false,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ],
  );

  return (
    <section id="photography-section" className="my-responsive">
      <div className="ui-container mb-8">
        <SectionEyebrow label="Through the Lens" isInCenter={true} />

        <h3 className="text-4xl font-semibold sm:text-5xl text-center">
          Photography
        </h3>
      </div>

      <div
        ref={emblaRef}
        className="overflow-hidden"
        aria-label="Photography gallery"
      >
        <div className="-ml-2 flex items-stretch">
          {photographyImages.map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_78%] pl-2 md:flex-[0_0_32%] lg:flex-[0_0_25%] xl:flex-[0_0_19%]"
            >
              <div className="aspect-34/45 overflow-hidden group relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-full object-cover group-hover:scale-110 duration-500"
                  decoding="async"
                />

                <span className="bg-black/0 lg:bg-black/20 absolute inset-0 group-hover:bg-black/0 duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photography;
