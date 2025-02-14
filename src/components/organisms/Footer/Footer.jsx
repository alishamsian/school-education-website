
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoLinkedinSquare, BiPhone, BiCurrentLocation, BiComment } from "react-icons/bi";
import FooterColumn from "../../molecules/Footer/FooterColumn";
import FooterLink from "../../atoms/FooterLink/FooterLink";
import IconLink from "../../atoms/IconLink/IconLink";
import Logo from "../../atoms/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 p-10 border-2 shadow-[5px_5px_5px] rounded-xl m-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-gray-300">
          <div className="">
            <Logo variant="white"/>
            <p className="text-sm mt-2">
              We believe in the power of play to foster creativity, problem-solving skills, and imagination.
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2"><IconLink link="#" icon={<BiComment />} /> hello@littlelearners.com</p>
              <p className="flex items-center gap-2"><IconLink link="#" icon={<BiPhone />} /> +91 91813 23 2309</p>
              <p className="flex items-center gap-2"><IconLink link="#" icon={<BiCurrentLocation />} /> Somewhere in the World</p>
            </div>
          </div>

          <FooterColumn
            title="Home"
            links={[
              { text: "Features", href: "#" },
              { text: "Our Testimonials", href: "#" },
              { text: "FAQ", href: "#" },
            ]}
          />
          <FooterColumn
            title="About Us"
            links={[
              { text: "Our Mission", href: "#" },
              { text: "Our Vision", href: "#" },
              { text: "Awards and Recognitions", href: "#" },
              { text: "History", href: "#" },
              { text: "Teachers", href: "#" },
            ]}
          />
          <FooterColumn
            title="Academics"
            links={[
              { text: "Special Features", href: "#" },
              { text: "Gallery", href: "#" },
            ]}
          />
          <FooterColumn
            title="Contact Us"
            links={[
              { text: "Information", href: "#" },
              { text: "Map & Direction", href: "#" },
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm border-b border-gray-300">
          <div className="flex space-x-4">
            <FooterLink text="Terms of Service" href="#" />
            <FooterLink text="Privacy Policy" href="#" />
            <FooterLink text="Cookie Policy" href="#" />
          </div>
          
          <div className="flex space-x-3">
            <IconLink link="#" icon={<BiLogoFacebookCircle />} />
            <IconLink link="#" icon={<BiLogoTwitter />} />
            <IconLink link="#" icon={<BiLogoLinkedinSquare />} />
          </div>

        </div>
        <p className="text-sm text-center pt-5">Copyright © {new Date().getFullYear()} Ali Shamsian . All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;