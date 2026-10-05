import { scrollToSection } from "../../../utils/scrollToSection";

interface NavbarLinksProps {
  className: string;
  closeMenu?: () => void;
}

const links = [
  { label: "Home", sectionId: "hero-section" },
  { label: "Works", sectionId: "photography-section" },
  { label: "About", sectionId: "about-section" },
  { label: "Contact", sectionId: "contact-section" },
];

const NavbarLinks = ({ className, closeMenu }: NavbarLinksProps) => {
  const navigateToSection = (sectionId: string) => {
    closeMenu?.();
    scrollToSection(sectionId);
  };

  return (
    <ul className={className}>
      {links.map(({ label, sectionId }) => (
        <li key={sectionId}>
          <button
            onClick={() => navigateToSection(sectionId)}
            className="duration-75 hover:text-secondary"
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
