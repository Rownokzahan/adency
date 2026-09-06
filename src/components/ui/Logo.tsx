import { Link } from "react-router";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <Link to={"/"} className="block">
      <img src={logo} alt="Logo" className="w-32 object-contain" />
    </Link>
  );
};

export default Logo;
