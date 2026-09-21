import clsx from "clsx";
import { useEffect, useRef } from "react";
import { RiTriangleFill } from "react-icons/ri";

interface ReelProps {
  src: string;
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}

const Reel = ({ src, isPlaying, onPlay, onPause }: ReelProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isPlaying) {
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const handleEnded = () => {
    onPause();

    const video = videoRef.current;

    if (video) {
      video.currentTime = 0;
    }
  };

  return (
    <div className="relative hover:scale-99 aspect-9/16">
      <video
        ref={videoRef}
        src={src}
        playsInline
        onClick={handlePlayPause}
        onEnded={handleEnded}
        className="size-full cursor-pointer object-cover"
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlayPause}
          className={clsx(
            "size-14 rounded-full bg-black/50",
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
