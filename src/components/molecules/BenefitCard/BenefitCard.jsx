import { BiBriefcase } from "react-icons/bi";

const BenefitCard = ({ title, description }) => {
    return (
      <div className="p-6 bg-white rounded-xl shadow-[5px_5px_5px] border-2 border-black">
        <div className=" bg-orange-200 p-5 w-6 h-6 mt-[-3rem] border rounded-xl flex items-center justify-center">
        <BiBriefcase className=" w-6 h-6 " />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 py-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };
  
  export default BenefitCard;