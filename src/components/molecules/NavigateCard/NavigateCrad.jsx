import Button from "../../atoms/Button/Button";
import Divider from "../../atoms/Divider/Divider";

export default function NavigateCrad({ title, description ,buttonText ,showButton = false }) {
  return (
    <div className="p-10 bg-white rounded-xl shadow-[5px_5px_5px] border-2 border-black text-center">
      <h3 className="text-2xl font-semibold text-gray-800 py-2">{title}</h3>
      <Divider />
      <p className="text-gray-600 text-sm mb-8">{description}</p>
      {showButton && (
        <Button variant="orange">{buttonText}</Button>
      )}
    </div>
  );
}
