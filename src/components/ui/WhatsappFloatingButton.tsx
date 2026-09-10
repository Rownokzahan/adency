import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";

const WhatsappFloatingButton = () => {
  const phoneNumber = "8801332528744";
  const message = "Hi Adency Ltd, I'd like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="Let's Chat"
      aria-label="Chat with Adency Ltd on WhatsApp"
      className={clsx(
        "size-12 rounded-full border border-[#21C063] shadow-lg",
        "fixed z-50 bottom-4 right-4 sm:bottom-10 sm:right-10",
        "bg-[#21C063] text-white hover:bg-white hover:text-[#21C063]",
        "grid place-items-center duration-300",
      )}
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappFloatingButton;
