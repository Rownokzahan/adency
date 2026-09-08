import { FiMinus, FiPlus } from "react-icons/fi";
import type { ServiceType } from "./services";
import clsx from "clsx";

interface ServiceProps {
  service: ServiceType;
  isOpen: boolean;
  onToggle: () => void;
}

const Service = ({ service, isOpen, onToggle }: ServiceProps) => {
  const { Icon, title, description } = service;

  return (
    <div className="border border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          "w-full gap-4 p-6 text-left md:pointer-events-none md:items-center md:justify-center md:p-8 md:pb-4",
          "flex items-center justify-between md:block",
        )}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 md:flex-col md:gap-4">
          <Icon className="shrink-0 text-[26px] sm:text-4xl text-primary" />

          <h3 className="md:text-lg font-semibold uppercase text-paper md:text-center">
            {title}
          </h3>
        </div>

        <span className="text-paper md:hidden">
          {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </span>
      </button>

      <div
        className={clsx(
          "grid transition-[grid-template-rows] duration-300 md:grid-rows-[1fr]",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 md:px-8">
            <p className="text-sm leading-6 text-paper/60 text-pretty md:text-center">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
