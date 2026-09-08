import Image1 from "../../../../assets/images/life-at-adency/1.webp";
import Image2 from "../../../../assets/images/life-at-adency/2.webp";
import Image3 from "../../../../assets/images/life-at-adency/3.webp";
import Image4 from "../../../../assets/images/life-at-adency/4.webp";
import Image5 from "../../../../assets/images/life-at-adency/5.webp";
import Image6 from "../../../../assets/images/life-at-adency/6.webp";
import Image7 from "../../../../assets/images/life-at-adency/7.webp";
import GalleryImage from "./GalleryImage";

const GalleryImages = () => {
  return (
    <div className="mb-8 grid grid-cols-3 grid-rows-3 gap-x-1.5 gap-y-2 sm:gap-x-3 sm:gap-y-4">
      {/* Left */}
      <GalleryImage src={Image1} className="row-span-2" />

      {/* Middle top */}
      <GalleryImage src={Image2} />

      {/* Right */}
      <GalleryImage src={Image4} className="row-span-2" />

      {/* Middle bottom */}
      <GalleryImage src={Image3} />

      {/* Bottom row */}
      <GalleryImage src={Image5} />
      <GalleryImage src={Image6} />
      <GalleryImage src={Image7} />
    </div>
  );
};

export default GalleryImages;
