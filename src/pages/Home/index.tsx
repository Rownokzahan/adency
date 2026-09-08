import About from "./About";
import Brands from "./Brands";
import Contact from "./Contact";
import Hero from "./Hero";
import LifeAtAdency from "./LifeAtAdency";
import OVC from "./OVC";
import Photography from "./Photography";
import PrintPackaging from "./PrintPackaging";
import Reels from "./Reels";
import Services from "./Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <Branding /> */}
      <Services />
      <Photography />
      {/* <MotionGraphics /> */}
      <Reels />
      <PrintPackaging />
      <OVC />
      {/* <Campains /> */}

      <About />
      <LifeAtAdency />
      <Brands />
      <Contact />
    </>
  );
};

export default HomePage;
