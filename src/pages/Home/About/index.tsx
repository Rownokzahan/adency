import AboutImage from "../../../assets/images/about-us.webp";
import SectionEyebrow from "../../../components/ui/SectionEyebrow";
import Highlights from "./Highlights";

const About = () => {
  return (
    <section id="about-section" className="my-responsive bg-ink">
      <div className="ui-container py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[0.8fr_1fr] xl:grid-cols-[0.8fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <div>
            <SectionEyebrow label="Who We Are" color="light" />

            <h3 className="text-paper text-3xl sm:text-5xl font-semibold">
              Introducing <span className="text-primary">Adency</span>
            </h3>
          </div>

          <div className="flex-1 min-h-0 overflow-hidden">
            <img
              src={AboutImage}
              alt=""
              className="max-w-[min(350px,100%)] lg:max-w-full mx-auto size-full  rounded-lg object-cover object-left"
            />
          </div>
        </div>

        <Highlights />
      </div>
    </section>
  );
};

export default About;
