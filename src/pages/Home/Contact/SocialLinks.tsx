import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socialLinks = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/adency.co",
  },
  {
    icon: RiInstagramFill,
    link: "https://www.instagram.com/adency.co",
  },
  {
    icon: FaLinkedinIn,
    link: "https://bd.linkedin.com/company/adency-ltd",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 justify-end">
      {socialLinks.map(({ icon: Icon, link }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Social media"
          className="size-8 rounded-full bg-primary/60 grid place-content-center text-ink hover:text-white hover:bg-primary duration-200"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
