import Image1 from "../../../../assets/images/life-at-adency/1.webp";
import Image2 from "../../../../assets/images/life-at-adency/2.webp";
import Image3 from "../../../../assets/images/life-at-adency/3.webp";
import Image4 from "../../../../assets/images/life-at-adency/4.webp";
import Image5 from "../../../../assets/images/life-at-adency/5.webp";
import Image6 from "../../../../assets/images/life-at-adency/6.webp";
import Image7 from "../../../../assets/images/life-at-adency/7.webp";
import Reveal from "../../../../components/ui/Reveal";
import GalleryImage from "./GalleryImage";

const GalleryImages = () => {
  return (
    <div className="mb-8 max-w-250 mx-auto grid grid-cols-3 grid-rows-3 gap-x-1.5 gap-y-2 sm:gap-x-3 sm:gap-y-4">
      {/* Left */}
      <div className="row-span-2">
        <Reveal direction="right">
          <GalleryImage src={Image1} />
        </Reveal>
      </div>

      {/* Middle top */}
      <Reveal direction="down">
        <GalleryImage src={Image2} />
      </Reveal>

      {/* Right */}
      <div className="row-span-2">
        <Reveal direction="left">
          <GalleryImage src={Image4} />
        </Reveal>
      </div>

      {/* Middle bottom */}
      <GalleryImage src={Image3} />

      {/* Bottom row */}
      <div className="col-span-3 grid grid-cols-3 gap-x-1.5 sm:gap-x-3">
        <GalleryImage src={Image5} />
        <GalleryImage src={Image6} />
        <GalleryImage src={Image7} />
      </div>
    </div>
  );
};

export default GalleryImages;
