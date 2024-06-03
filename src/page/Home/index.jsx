import NavigationBar from "../../components/NavigationBar";
import Headers from "../../components/Headers";
import OurService from "../../components/OurService";
import WhyUs from "../../components/WhyUs";
import CarouselTestimonial from "../../components/Carousel";
import CtaBanner from "../../components/CtaBanner";
import AccordionPage from "../../components/Accordion";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Headers />
      <OurService />
      <WhyUs />
      <CarouselTestimonial />
      <CtaBanner />
      <AccordionPage />
      <Footer />
    </div>
  );
};

export default Home;
