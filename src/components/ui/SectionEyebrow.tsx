import clsx from "clsx";

interface SectionEyebrowProps {
  label: string;
  color?: "dark" | "light";
  isInCenter?: boolean;
}

const SectionEyebrow = ({
  label,
  isInCenter = false,
  color = "dark",
}: SectionEyebrowProps) => {
  return (
    <div
      className={clsx(
        "mb-3 flex items-center gap-3",
        isInCenter && "justify-center",
      )}
    >
      <span className="size-2 rounded-full bg-primary" />
      <p
        className={clsx(
          "text-xs font-semibold uppercase tracking-[0.24em]",
          color === "dark" ? "text-ink/70" : "text-paper/65",
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default SectionEyebrow;
