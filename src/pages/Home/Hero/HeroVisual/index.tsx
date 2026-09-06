import "./heroVisual.css";
import rocket from "../../../../assets/images/hero/rocket.svg";

const HeroVisual = () => {
  return (
    <div className="h-[50vh] sm:h-[calc(100dvh-88px)]">
      <div className="size-full py-10 sm:py-20 relative">
        <img
          src={rocket}
          alt="Rocket"
          className="block h-full object-contain aspect-3/4 mx-auto z-10 rocket-float"
          style={{
            filter: "drop-shadow(0 0 42px rgba(224, 14, 119, 0.4))",
          }}
        />

        {/* Trail */}
        <div className="absolute size-full inset-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
            className="h-full w-9/12 sm:size-full mx-auto"
          >
            <path
              d="M40,500 C160,420 130,300 220,220 C300,150 300,90 340,30"
              fill="none"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth="3"
              strokeDasharray="1 8"
              strokeLinecap="square"
            />
          </svg>
        </div>

        {/* Dots */}
        <span className="absolute left-[12%] top-[8%] z-20 block size-4 rounded-full bg-primary dot-pulse" />
        <span className="absolute z-20 block size-3 rounded-full bg-secondary dot-pulse" />
        <span className="absolute bottom-[60%] right-[4%] sm:right-0 block size-2 rounded-full bg-accent dot-pulse" />
      </div>
    </div>
  );
};

export default HeroVisual;
