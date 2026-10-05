import clsx from "clsx";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className={clsx(
        "ui-container scroll-mt-22",
        "grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] items-center overflow-hidden",
      )}
    >
      <HeroContent />
      <HeroVisual />
    </section>
  );
};

export default Hero;
