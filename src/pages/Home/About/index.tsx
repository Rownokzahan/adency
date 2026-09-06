const highlights = [
  {
    index: "01",
    title: "Innovative Brand Transformation",
    description:
      "Adency Ltd. is a leading 360-degree marketing agency in Bangladesh, specializing in transforming brand visions into compelling narratives across digital platforms.",
  },
  {
    index: "02",
    title: "Tailored Solutions for Success",
    description:
      "Our team combines strategic thinking, creativity, and technical expertise to deliver customized solutions, including brand development, digital marketing, video production, and media buying.",
  },
  {
    index: "03",
    title: "Impactful Storytelling and Connection",
    description:
      "At Adency, we believe in the power of storytelling and emotional connection. Every campaign resonates with your audience and achieves your business goals.",
  },
];

const About = () => {
  return (
    <section id="about-section" className="bg-ink">
      <div className="ui-container py-12 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
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

        <div className="divide-y divide-paper/20">
          {highlights.map((item) => (
            <article
              key={item.index}
              className="py-8 first:pt-0 last:pb-0 group grid sm:grid-cols-[3.5rem_1fr] gap-3 sm:gap-7"
            >
              <span className="size-max mt-1.25 block text-sm font-semibold tracking-[0.18em] text-primary">
                {item.index}
              </span>

              <div>
                <h4 className="mb-3 max-w-lg text-2xl sm:text-3xl font-semibold leading-tight text-paper">
                  {item.title}
                </h4>

                <p className="max-w-2xl text-pretty leading-7 text-paper/65">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
