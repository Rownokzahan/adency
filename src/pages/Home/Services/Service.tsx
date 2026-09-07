import type { ServiceType } from "./services";

interface ServiceProps {
  service: ServiceType;
}

const Service = ({ service }: ServiceProps) => {
  const { Icon, title, description } = service;

  return (
    <div
      key={service.title}
      className="p-8 flex flex-col items-center gap-6 border border-white/10"
    >
      <Icon size={36} className="text-primary" />

      <div className="flex flex-col gap-3 text-center">
        <h3 className="text-lg font-semibold text-paper">{title}</h3>
        <p className="text-sm leading-6 text-paper/60 text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Service;
