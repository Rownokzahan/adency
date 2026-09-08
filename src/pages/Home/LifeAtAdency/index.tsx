import SectionEyebrow from "../../../components/ui/SectionEyebrow";
import GalleryImages from "./GalleryImages";

const LifeAtAdency = () => {
  return (
    <section className="ui-container my-responsive">
      <div className="mb-8">
        <SectionEyebrow label="Our Culture" />

        <h3 className="text-3xl font-semibold sm:text-5xl">
          Life at <span className="text-primary">Adency</span>
        </h3>
      </div>

      <GalleryImages />
    </section>
  );
};

export default LifeAtAdency;
