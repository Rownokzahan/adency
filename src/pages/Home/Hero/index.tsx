import clsx from "clsx";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const Hero = () => {
  return (
    <section
      className={clsx(
        "ui-container",
        "grid grid-cols-1 sm:grid-cols-[1.5fr_1fr] items-center overflow-hidden",
      )}
    >
      <HeroContent />
      <HeroVisual />
    </section>
  );
};

export default Hero;
