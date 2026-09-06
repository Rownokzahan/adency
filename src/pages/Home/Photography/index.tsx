import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  {
    src: "https://static.wixstatic.com/media/3b859d_2458c0cea8534c61a75f30bf874e9f82~mv2.jpg/v1/fit/w_960,h_1280,q_90,enc_avif,quality_auto/3b859d_2458c0cea8534c61a75f30bf874e9f82~mv2.jpg",
    alt: "Portrait photograph with warm tonal lighting",
  },
  {
    src: "https://static.wixstatic.com/media/1bcaba_75a8572c585d4c689755d13dc3e1ec47~mv2.jpg/v1/fit/w_480,h_558,q_90,enc_avif,quality_auto/1bcaba_75a8572c585d4c689755d13dc3e1ec47~mv2.jpg",
    alt: "Editorial portrait captured in soft natural light",
  },
  {
    src: "https://static.wixstatic.com/media/3b859d_524f6425e3ef4d05af7bf30dd390c61e~mv2.jpg/v1/fit/w_960,h_1280,q_90,enc_avif,quality_auto/3b859d_524f6425e3ef4d05af7bf30dd390c61e~mv2.jpg",
    alt: "Fashion-forward portrait with a studio backdrop",
  },
  {
    src: "https://static.wixstatic.com/media/3b859d_a7742fbac71e443e93b80e46e79b8492~mv2.jpg/v1/fit/w_960,h_1280,q_90,enc_avif,quality_auto/3b859d_a7742fbac71e443e93b80e46e79b8492~mv2.jpg",
    alt: "Candid photograph with a moody color palette",
  },
  {
    src: "https://static.wixstatic.com/media/3b859d_241a7994c87c4b568023083419f1135d~mv2.jpg/v1/fit/w_960,h_1280,q_90,enc_avif,quality_auto/3b859d_241a7994c87c4b568023083419f1135d~mv2.jpg",
    alt: "Close-up portrait framed by bold contrast",
  },
  {
    src: "https://static.wixstatic.com/media/3b859d_634483f707e04d909cad694a580aed9c~mv2.jpg/v1/fit/w_960,h_1280,q_90,enc_avif,quality_auto/3b859d_634483f707e04d909cad694a580aed9c~mv2.jpg",
    alt: "Portrait detail with strong composition",
  },
];

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
    <section id="photography-section" className="py-10 sm:py-18">
      <div className="ui-container mb-8">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="size-2 rounded-full bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
            Selected work
          </p>
        </div>

        <h3 className="text-4xl font-semibold sm:text-6xl text-center">
          Photography
        </h3>
      </div>

      <div
        ref={emblaRef}
        className="overflow-hidden"
        aria-label="Photography gallery"
      >
        <div className="-ml-2 flex items-stretch">
          {[...images, ...images].map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_78%] pl-2 md:flex-[0_0_32%] lg:flex-[0_0_25%] xl:flex-[0_0_19%]"
            >
              <div className="aspect-5/7 overflow-hidden group relative">
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
    </section>
  );
};

export default Photography;
