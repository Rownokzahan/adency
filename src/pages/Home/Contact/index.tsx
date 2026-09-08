import AdencyMap from "./AdencyMap";
import ContactDetails from "./ContactDetails";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section id="contact-section" className="lg:ui-container lg:my-responsive">
      <div className="px-responsive py-20 lg:px-12 lg:rounded-3xl bg-ink grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
        <div className="h-full flex flex-col">
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-primary" />

              <p className="text-xs uppercase tracking-[0.24em] text-paper/60">
                Get in Touch
              </p>
            </div>

            <h3 className="text-4xl font-semibold sm:text-5xl text-paper">
              Connect with us
            </h3>
          </div>

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
