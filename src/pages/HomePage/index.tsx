import { Divider } from "@mui/material";
import {
  HeroSection,
  ContactSection,
  FooterSection,
  CopyrightSection,
  MyServicesSection,
  ProjectsSection,
} from "./components";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Divider />
      <MyServicesSection />
      <Divider />
      <ProjectsSection />
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
