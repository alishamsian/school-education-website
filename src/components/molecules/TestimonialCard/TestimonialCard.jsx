import ProfileContainer from "../../../assets/ProfileContainer.png";
import Stars from "../../atoms/stars/stars";

export default function TestimonialCard({name, description}) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-[5px_5px_5px] border-2 border-black flex flex-col items-center gap-2">
        <img src={ProfileContainer} alt="" />
      <h3 className="text-lg font-semibold text-gray-800 ">{name}</h3>
      <Stars />
      <p className="text-gray-600 text-sm text-center">{description}</p>
    </div>
  );
}
