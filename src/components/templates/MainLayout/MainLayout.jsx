import Footer from "../../organisms/Footer/Footer";
import Navbar from "../../organisms/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;