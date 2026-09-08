import { useState } from "react";
import Service from "./Service";
import { services } from "./services";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-ink py-12 sm:py-20">
      <div className="ui-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {services.map((service, index) => (
          <Service
            key={service.title}
            service={service}
            isOpen={activeIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
