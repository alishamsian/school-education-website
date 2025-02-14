import { Link } from "react-router";
import NavItem from "../../molecules/NavItem/NavItem";
import Logo from "../../atoms/Logo/Logo";
import TopNav from "../../molecules/TopNav/TopNav";

const Navbar = () => {
  return (
    <>
    <TopNav />
    <nav className="flex items-center p-0 justify-between bg-white shadow-md border mx-2 rounded-xl overflow-hidden">
      <Link to="/">
        <Logo />
      </Link>
      <div className="md:flex hidden ">
        <NavItem label="Home" to="/" />
        <NavItem label="About Us" to="/about" />
        <NavItem label="Academics" to="/academics" />
        <NavItem label="Admissions" to="/admissions" />
        <NavItem label="Student Life" to="/student-life" />
        <Link to="/" className="bg-orange-400 border-l items-center flex px-5">
        Contact
      </Link>
      </div>
      
    </nav>
    </>
  );
};

export default Navbar;
