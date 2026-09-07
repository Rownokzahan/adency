import { highlights } from "./highlights";

const Highlights = () => {
  return (
    <div className="divide-y divide-paper/20">
      {highlights.map(({ index, title, description }) => (
        <article
          key={index}
          className="py-8 first:pt-0 last:pb-0 group grid sm:grid-cols-[3.5rem_1fr] gap-3 sm:gap-7"
        >
          <span className="size-max mt-1.25 block text-sm font-semibold tracking-[0.18em] text-primary">
            {index}
          </span>

          <div>
            <h4 className="mb-3 max-w-lg text-2xl xl:text-3xl font-semibold leading-tight text-paper">
              {title}
            </h4>

            <p className="max-w-2xl text-pretty leading-7 text-paper/65">
              {description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Highlights;
