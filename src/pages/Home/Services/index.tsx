import Service from "./Service";
import { services } from "./services";

const Services = () => {
  return (
    <section className="bg-ink py-20">
      <div className="ui-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Service key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
