import { Divider } from "@mui/material";
import {
  HeroSection,
  ContactSection,
  FooterSection,
  CopyrightSection,
} from "./components";

function HomePage() {
  return (
    <div>
      <HeroSection />
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
