import About from "./About";
import Branding from "./Branding";
import Brands from "./Brands";
import Campains from "./Campains";
import Contact from "./Contact";
import Hero from "./Hero";
import MotionGraphics from "./MotionGraphics";
import OVC from "./OVC";
import Photography from "./Photography";
import PrintPackaging from "./PrintPackaging";
import Reels from "./Reels";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Branding />
      <Photography />
      <MotionGraphics />
      <Reels />
      <PrintPackaging />
      <OVC />
      <Campains />

      <About />
      <Brands />
      <Contact />
    </>
  );
};

export default HomePage;
