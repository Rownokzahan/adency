import clsx from "clsx";
import { useRef, useState } from "react";
import { RiTriangleFill } from "react-icons/ri";

interface ReelProps {
  src: string;
}

const Reel = ({ src }: ReelProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative hover:scale-99 aspect-9/16">
      <video
        ref={videoRef}
        src={src}
        playsInline
        onClick={handlePlayPause}
        onEnded={() => {
          setIsPlaying(false);
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        }}
        className="size-full cursor-pointer object-cover"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlayPause}
          className={clsx(
            "size-14 rounded-full bg-black/20",
            "absolute top-1/2 left-1/2 -translate-1/2",
          )}
        >
          <RiTriangleFill
            size={22}
            className="text-white rotate-90 relative left-1/2 -translate-x-2"
          />
        </button>
      )}
    </div>
  );
};

export default Reel;
