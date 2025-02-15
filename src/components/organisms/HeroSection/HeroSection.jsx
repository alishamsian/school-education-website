import Button from "../../atoms/Button/Button";
import HeroImage from "../../../assets/Image-Container.png";
import SubHeader from "../../molecules/SubHeader/SubHeader";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around px-10 py-16 ">
      
      <img src={HeroImage} alt="Hero" className="md:w-1/3 " />
      
      <div className="max-w-lg text-center md:text-left mt-5 md:mt-1">
        <span className=" underline ">Welcome to Little Learners Academy</span>
        <h1 className="text-4xl font-bold text-gray-900">
          Where Young Minds Blossom and <span className=" text-orange-400">Dreams Take Flight.</span>
        </h1>
        <p className="text-gray-700 mt-4 text-sm">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <SubHeader />
      </div>
    </section>
  );
};

export default HeroSection;
