import Hero from "../components/user/HeroSection";
import About from "../components/user/AboutSection";
import Features from "../components/user/FeaturesSection";
import Review from "../components/user/ReviewSection";
import Contact from "../components/user/ContactSection";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Review />
      <Contact />
    </>
  );
}