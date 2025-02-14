import { Link } from "react-router";

const NavItem = ({ label, to }) => {
  return (
    <Link to={to} className=" p-5 border-l text-gray-700 hover:text-orange-500 transition">
      {label}
    </Link>
  );
};

export default NavItem;