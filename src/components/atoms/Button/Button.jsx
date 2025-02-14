

const Button = ({ children, onClick , className = "", variant = "white",  }) => {

  const variantClasses = {
    white: "bg-white text-black hover:bg-orange-200",
    orange: "bg-orange-200 shadow-[5px_5px_5px] border-black w-full hover:bg-white",
  };

    return (
      <button
        className={`px-4 py-2 border-2 rounded-lg text-sm transition  ${variantClasses[variant]}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;