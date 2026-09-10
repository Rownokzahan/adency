import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../ui/Logo";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import NavbarLinks from "./NavbarLinks";
import clsx from "clsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="h-18 sm:h-22">
        <div className="fixed z-50 w-full h-18 sm:h-22 px-responsive border-b bg-white/85 backdrop-blur-sm bg-blend-hard-light flex items-center justify-between">
          <Logo />
          <NavbarLinks className="hidden sm:flex items-center gap-8 font-semibold text-sm" />
          <button onClick={openMenu} className="sm:hidden">
            <AiOutlineMenu size={26} className="mb-3" />
          </button>
        </div>
      </nav>

      <div
        className={clsx(
          "sm:hidden bg-ink text-paper fixed z-50 inset-0 grid place-items-center",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
          "duration-300",
        )}
      >
        <button
          onClick={closeMenu}
          className="absolute top-5 right-3 hover:rotate-90 duration-500"
        >
          <HiXMark size={34} />
        </button>

        <NavbarLinks
          className="text-lg uppercase text-center space-y-8"
          onNavigate={closeMenu}
        />
      </div>
    </>
  );
};

export default Navbar;
