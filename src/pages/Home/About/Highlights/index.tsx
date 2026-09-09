import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { highlights } from "./highlights";
import clsx from "clsx";

const Highlights = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="divide-y divide-paper/20">
      {highlights.map(({ index, title, description }, itemIndex) => {
        const isOpen = openIndex === itemIndex;

        return (
          <div className="py-6 sm:py-8 first:pt-0 last:pb-0">
            <button
              type="button"
              onClick={() => toggleItem(itemIndex)}
              className="w-full grid grid-cols-[40px_1fr_28px] sm:grid-cols-[80px_1fr] sm:pointer-events-none"
              aria-expanded={isOpen}
            >
              <span className="mt-px sm:mt-1.25 me-auto text-sm sm:text-base font-semibold tracking-[0.18em] text-primary">
                {index}
              </span>

              <h4 className="text-lg sm:text-2xl xl:text-3xl text-left font-medium leading-tight text-paper">
                {title}
              </h4>

              <FiChevronDown
                className={clsx(
                  "sm:hidden ms-auto mt-0.5 shrink-0 text-paper transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
                size={20}
              />
            </button>

            <div
              className={clsx(
                "ps-10 sm:ps-20 grid transition-[grid-template-rows,opacity] duration-300 ease-in-out sm:block sm:opacity-100",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="mt-3 text-sm sm:text-base sm:text-pretty leading-7 text-paper/65">
                  {description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Highlights;
