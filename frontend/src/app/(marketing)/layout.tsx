import Navbar from "../components/user/NavbarSection";
import Hero from "../components/user/HeroSection";
import About from "../components/user/AboutSection";
import Features from "../components/user/FeaturesSection";
import Review from "../components/user/ReviewSection";
import Footer from "../components/user/FooterSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Review />
      <Footer />
    </>
  );
}
