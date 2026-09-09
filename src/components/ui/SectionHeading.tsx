import clsx from "clsx";

interface SectionHeadingProps {
  children: React.ReactNode;
  eyebrow: string;
  color?: "dark" | "light";
  isInCenter?: boolean;
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  children,
  color = "dark",
  isInCenter = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={clsx("mb-8", className, isInCenter && "text-center")}>
      <p
        className={clsx(
          "mb-3 flex items-center gap-3",
          isInCenter && "justify-center",
        )}
      >
        <span className="size-2 rounded-full bg-primary" />

        <span
          className={clsx(
            "text-xs font-semibold uppercase tracking-[0.24em]",
            color === "dark" ? "text-ink/70" : "text-paper/65",
          )}
        >
          {eyebrow}
        </span>
      </p>

      <h3
        className={clsx(
          "text-3xl sm:text-5xl font-semibold",
          color === "dark" ? "text-ink" : "text-paper",
        )}
      >
        {children}
      </h3>
    </div>
  );
};

export default SectionHeading;
