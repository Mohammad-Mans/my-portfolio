import { Divider } from "@mui/material";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Divider/>
      <ContactSection/>
    </div>
  );
}

export default HomePage;
