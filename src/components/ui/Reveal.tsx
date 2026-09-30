import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
}

const Reveal = ({ children, direction = "up" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const transform = {
    up: "translateY(30px)",
    down: "translateY(-30px)",
    left: "translateX(30px)",
    right: "translateX(-30px)",
  }[direction];

  return (
    <>
      <style>
        {`
          .reveal {
            opacity: 0;
            transition:
              opacity 0.6s ease-out,
              transform 0.6s ease-out;
          }

          .reveal.visible {
            opacity: 1;
            transform: translate(0, 0);
          }
        `}
      </style>

      <div
        ref={ref}
        className={clsx("size-full reveal", visible && "visible")}
        style={{
          transform: visible ? "translate(0, 0)" : transform,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Reveal;
