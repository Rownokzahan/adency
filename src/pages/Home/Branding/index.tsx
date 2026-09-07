import brandImage from "../../../assets/images/branding.png";
import brandVideo from "../../../assets/videos/branding-video.mp4";

const Branding = () => {
  return (
    <section className="py-8 bg-ink">
      <div className="ui-container relative">
        <video
          src={brandVideo}
          muted
          loop
          autoPlay
          playsInline
          className="w-full max-h-72 object-cover"
          style={{
            maskImage: `url(${brandImage})`,
            WebkitMaskImage: `url(${brandImage})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 70%",
          }}
        />
      </div>
    </section>
  );
};

export default Branding;
