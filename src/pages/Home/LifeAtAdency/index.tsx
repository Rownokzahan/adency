import SectionHeading from "../../../components/ui/SectionHeading";
import GalleryImages from "./GalleryImages";

const LifeAtAdency = () => {
  return (
    <section className="ui-container my-responsive">
      <SectionHeading eyebrow="Our Culture">
        Life at <span className="text-primary">Adency</span>
      </SectionHeading>

      <GalleryImages />
    </section>
  );
};

export default LifeAtAdency;
