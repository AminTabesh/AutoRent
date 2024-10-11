import Footer from "../components/Footer/Footer";
import CarsRow from "../components/CarsRow/CarsRow";
import Comments from "../components/Comments/Comments";
import Faqs from "../components/Faqs/Faqs";
import Header from "../components/Header/Header";
import HowTo from "../components/HowTo/HowTo";
import LogoSlider from "../components/LogoSlider/LogoSlider";
import OrderSection from "../components/OrderSection/OrderSection";
import Top from "../components/Top/Top";
import Why from "../components/Why/Why";
import { ContextProvider } from "../contexts/ContextProvider";

function Layout() {
  return (
    <ContextProvider>
      <div className="pb-24 w-full bg-gray-200 font-EstedadMed flex flex-col items-center overflow-x-hidden no-scrollbar">
        <Header />
        <Top />
        <LogoSlider />
        <Why />
        <CarsRow />
        <OrderSection />
        <HowTo />
        <Faqs />
        <Comments />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default Layout;
