import AboutImage from "../../../assets/images/about-us.webp";
import Highlights from "./Highlights";

const About = () => {
  return (
    <section id="about-section" className="bg-ink">
      <div className="ui-container py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[0.8fr_1fr] xl:grid-cols-[0.8fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="size-2 rounded-full bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-paper/65">
                Who we are
              </p>
            </div>

            <h2 className="text-paper text-4xl font-semibold">
              Introducing <span className="text-primary">Adency</span>
            </h2>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden">
            <img
              src={AboutImage}
              alt=""
              className="size-full rounded-lg object-cover object-left"
            />
          </div>
        </div>

        <Highlights />
      </div>
    </section>
  );
};

export default About;
