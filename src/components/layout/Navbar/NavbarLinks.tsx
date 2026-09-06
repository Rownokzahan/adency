import { Link } from "react-router";
import { scrollToSection } from "../../../utils/scrollToSection";

interface NavbarLinksProps {
  className: string;
  onNavigate?: () => void;
}

const NavbarLinks = ({ className, onNavigate }: NavbarLinksProps) => {
  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    onNavigate?.();
  };

  return (
    <ul className={className}>
      <li>
        <Link
          to="/"
          onClick={onNavigate}
          className="hover:text-secondary duration-75"
        >
          Home
        </Link>
      </li>

      <li>
        <button
          onClick={() => handleSectionClick("photography-section")}
          className="hover:text-secondary duration-75"
        >
          Works
        </button>
      </li>

      <li>
        <button
          onClick={() => handleSectionClick("about-section")}
          className="hover:text-secondary duration-75"
        >
          About
        </button>
      </li>

      <li>
        <button
          onClick={() => handleSectionClick("contact-section")}
          className="hover:text-secondary duration-75"
        >
          Contact
        </button>
      </li>
    </ul>
  );
};

export default NavbarLinks;
