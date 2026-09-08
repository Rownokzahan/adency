import clsx from "clsx";

interface GalleryImageProps {
  src: string;
  className?: string;
}

const GalleryImage = ({ src, className }: GalleryImageProps) => {
  return (
    <div className={clsx("overflow-hidden relative group", className)}>
      <img
        src={src}
        alt=""
        className="size-full object-cover group-hover:scale-105 duration-300"
      />

      <span className="absolute inset-0 bg-black/10 group-hover:bg-black/0 duration-300" />
    </div>
  );
};

export default GalleryImage;
