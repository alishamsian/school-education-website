import Button from "../../atoms/Button/Button";

export default function TopSection({ 
  title, 
  subtitle, 
  buttonText, 
  showButton = false, 
}) {
  return (
    <div className="text-center mb-7 px-9 flex flex-col items-center justify-center">
      {showButton && (
        <Button>{buttonText}</Button>
      )}
      <h2 className="text-4xl font-bold text-gray-900 my-5 ">{title}</h2>
      <p className="text-sm text-gray-600 md:w-2xl">{subtitle}</p>
    </div>
  );
}
