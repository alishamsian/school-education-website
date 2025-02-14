import logo from "../../../assets/Logo.png";

const variantClasses = {
  white: "",
  orange: "bg-orange-400 py-3 px-2",
};

export default function Logo({variant = "orange"}) {
  return (
    <div className={`${variantClasses[variant]}`}>
        <img src={logo} alt="" />
      </div>
  )
}
