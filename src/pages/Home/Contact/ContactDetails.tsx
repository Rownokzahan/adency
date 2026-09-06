import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const contactDetails = [
  {
    icon: FiMapPin,
    label: "Our Office",
    value: (
      <>
        AB Tower 131/2/GA (6th Floor), Middle Badda, Progati Sharani, Opposite
        PRAN-RFL CENTRE, Above DESH FURNITURE, Dhaka, 1212
      </>
    ),
  },
  {
    icon: FiPhone,
    label: "Customer Care",
    value: "+880 195 866 1060",
  },
  {
    icon: FiMail,
    label: "General Email",
    value: "support@adency.co",
  },
  {
    icon: FiClock,
    label: "Work Time",
    value: "Sunday–Thursday · 9 AM - 7 PM",
  },
];

const ContactDetails = () => {
  return (
    <div className="divide-y divide-paper/20">
      {contactDetails.map(({ icon: Icon, label, value }) => {
        return (
          <div key={label}>
            <div className="py-6 flex gap-4">
              <div className="flex-none size-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
                <Icon size={18} />
              </div>

              <div>
                <p className="mb-1 text-sm text-paper/60">{label}</p>
                <p className="text-sm text-paper">{value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
