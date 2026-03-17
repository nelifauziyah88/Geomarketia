import Navbar from "../components/user/NavbarSection";
import Footer from "../components/user/FooterSection";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children} 
      <Footer />
    </>
  );
}