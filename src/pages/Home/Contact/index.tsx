import SectionHeading from "../../../components/ui/SectionHeading";
import AdencyMap from "./AdencyMap";
import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="scroll-mt-18 sm:scroll-mt-22 lg:ui-container lg:my-responsive"
    >
      <div className="px-responsive py-20 lg:px-12 lg:rounded-3xl bg-ink grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
        <div className="h-full flex flex-col">
          <SectionHeading eyebrow="Get in Touch" color="light">
            Connect with us
          </SectionHeading>

          <div className="flex-1 flex flex-col justify-between gap-6">
            <ContactDetails />
            <SocialLinks />
          </div>
        </div>

        <AdencyMap />
      </div>
    </section>
  );
};

export default Contact;
