import { scrollToSection } from "../../../utils/scrollToSection";

const HeroContent = () => {
  return (
    <div className="py-8">
      <h1 className="mb-5 text-5xl sm:text-7xl xl:text-8xl font-semibold">
        Ideas that <br />
        Leaves the <br />
        <span className="bg-[linear-gradient(100deg,var(--color-accent),var(--color-secondary)_70%)] bg-clip-text text-transparent">
          Ground.
        </span>
      </h1>

      <p className="sm:text-xl text-pretty">
        Adency makes brands impossible to overlook. From strategy and branding
        to content and media, we turn sharp ideas into work that gets noticed
        and brands that go somewhere.
      </p>

      <button
        onClick={() => scrollToSection("photography-section")}
        className="mt-8 px-9 py-3 rounded-full bg-ink text-paper font-bold"
      >
        See Our Work
      </button>
    </div>
  );
};

export default HeroContent;
