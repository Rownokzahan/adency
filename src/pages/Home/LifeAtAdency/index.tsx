import GalleryImages from "./GalleryImages";

const LifeAtAdency = () => {
  return (
    <section className="ui-container my-20">
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="size-2 rounded-full bg-primary" />
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">
            OUR CULTURE
          </p>
        </div>

        <h3 className="text-3xl font-semibold sm:text-5xl">
          Life at <span className="text-primary">Adency</span>
        </h3>
      </div>

      <GalleryImages />
    </section>
  );
};

export default LifeAtAdency;
