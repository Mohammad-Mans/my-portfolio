import { Divider } from "@mui/material";
import {
  HeroSection,
  ContactSection,
  FooterSection,
  CopyrightSection,
  MyServicesSection,
} from "./components";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Divider />
      <MyServicesSection />
      <Divider />
      <ContactSection />
      <Divider />
      <FooterSection />
      <Divider />
      <CopyrightSection />
    </div>
  );
}

export default HomePage;
