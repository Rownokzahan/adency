import SectionHeading from "../../components/ui/SectionHeading";
import rocket from "../../assets/images/hero/rocket.svg";

const NotFound = () => {
  return (
    <main className="ui-container grid min-h-[calc(100dvh-var(--main-nav-h))] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1fr_0.9fr] lg:py-16">
      <section className="max-w-2xl">
        <div className="mb-8">
          <p className="mb-3 font-fredoka text-[clamp(5rem,18vw,12rem)] font-semibold leading-none text-ink">
            404
          </p>

          <SectionHeading eyebrow="Error 404" className="mb-5">
            This page never left the ground.
          </SectionHeading>

          <p className="max-w-xl text-lg leading-8 text-ink-soft sm:text-xl">
            The link may be broken, or the page may have moved. Head back home
            to relaunch, or jump straight into the work that did make it into
            orbit.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-9 py-3 font-bold text-paper duration-150 hover:bg-secondary"
          >
            Back to Home
          </a>

          <a
            href="/#contact-section"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 px-9 py-3 font-bold text-ink duration-150 hover:border-secondary hover:text-secondary"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="relative min-h-90 overflow-hidden rounded-4xl bg-paper-soft px-6 py-10 sm:min-h-120 lg:min-h-140">
        <div className="absolute inset-x-8 bottom-8 top-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
            className="size-full"
            aria-hidden="true"
          >
            <path
              d="M40,430 C150,360 125,255 220,190 C310,128 304,70 360,8"
              fill="none"
              stroke="rgba(36,28,18,0.16)"
              strokeDasharray="1 10"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>

        <img
          src={rocket}
          alt="Rocket"
          className="relative z-10 mx-auto h-full max-h-120 w-auto object-contain drop-shadow-[0_24px_40px_rgba(224,14,119,0.25)]"
        />

        <span className="absolute left-[14%] top-[14%] size-4 rounded-full bg-primary" />
        <span className="absolute right-[18%] top-[22%] size-3 rounded-full bg-secondary" />
        <span className="absolute bottom-[18%] left-[24%] size-2 rounded-full bg-accent" />
      </section>
    </main>
  );
};

export default NotFound;
