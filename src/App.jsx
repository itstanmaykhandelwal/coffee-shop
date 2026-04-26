import FontLoader from "./components/common/FontLoader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import StatsBar from "./components/sections/StatsBar";
import Products from "./components/sections/Products";
import About from "./components/sections/About";
import Menu from "./components/sections/Menu";
import Testimonials from "./components/sections/Testimonials";
import CTABanner from "./components/sections/CTABanner";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <FontLoader />
      <Navbar />
      <Hero />
      <About />
      <StatsBar />
      <Products />

      <Menu />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}