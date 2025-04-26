import { Box, Grid, styled, Typography } from "@mui/material";
import WebIcon from "../../../../assets/Icons/coding.png";
import ResponsiveIcon from "../../../../assets/Icons/responsive.png";
import AnimationIcon from "../../../../assets/Icons/animate.png";
import FramerMotionIcon from "../../../../assets/Icons/framer-motion.svg";
import FireBaseIcon from "../../../../assets/Icons/firebase.svg";
import JavaIcon from "../../../../assets/Icons/java.svg";
import VSCodeIcon from "../../../../assets/Icons/visual-studio-code.svg";
import ViteIcon from "../../../../assets/Icons/vitejs.svg";
import Marquee from "react-fast-marquee";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNpm,
  SiPostman,
  SiPython,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiMui,
  SiNodedotjs,
} from "react-icons/si";
import SectionTitle from "../../../../components/common/SectionTitle";
interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: WebIcon,
    title: "Client Side Development",
    description:
      "Focusing on modern web application development that adheres to best practices in User Interface and User Experience.",
  },
  {
    icon: ResponsiveIcon,
    title: "Responsive Design",
    description:
      "Creating flexible layouts and components that adapt seamlessly across devices and screen sizes.",
  },
  {
    icon: AnimationIcon,
    title: "Web Animations",
    description:
      "Enhancing user experience through smooth and engaging animations using Motion Libraries and modern CSS techniques.",
  },
];

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 220,
  height: 220,
  borderRadius: "50%",
  backgroundColor: theme.palette.bgColor.light,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  transition: "transform 1s ease",
  "&:hover": {
    transform: "rotate(360deg)",
  },
}));

const TechCarousel = () => (
  <Box width="100%" overflow="hidden">
    <Marquee autoFill speed={80}>
      <SiHtml5 size={48} color="#E44D26" style={{ marginRight: 60 }} />
      <SiCss3 size={48} color="#1572B6" style={{ marginRight: 60 }} />
      <SiJavascript size={48} color="#F7DF1E" style={{ marginRight: 60 }} />
      <SiTypescript size={48} color="#3178C6" style={{ marginRight: 60 }} />
      <SiReact size={48} color="#61DAFB" style={{ marginRight: 60 }} />
      <SiNpm size={48} color="#CB3837" style={{ marginRight: 60 }} />
      <SiPostman size={48} color="#FF6C37" style={{ marginRight: 60 }} />
      <img
        src={JavaIcon}
        alt="Framer Motion"
        style={{ width: 48, height: 48, marginRight: 60 }}
      />
      <SiPython size={48} color="#3776AB" style={{ marginRight: 60 }} />
      <SiCplusplus size={48} color="#00599C" style={{ marginRight: 60 }} />
      <SiGit size={48} color="#F05032" style={{ marginRight: 60 }} />
      <SiGithub size={48} color="#100000" style={{ marginRight: 60 }} />
      <SiMui size={48} color="#007FFF" style={{ marginRight: 60 }} />
      <img
        src={FireBaseIcon}
        alt="Framer Motion"
        style={{ width: 48, height: 48, marginRight: 60 }}
      />
      <img
        src={ViteIcon}
        alt="Framer Motion"
        style={{ width: 48, height: 48, marginRight: 60 }}
      />
      <SiNodedotjs size={48} color="#339933" style={{ marginRight: 60 }} />
      <img
        src={FramerMotionIcon}
        alt="Framer Motion"
        style={{ width: 48, height: 48, marginRight: 60 }}
      />
      <img
        src={VSCodeIcon}
        alt="Framer Motion"
        style={{ width: 48, height: 48, marginRight: 60 }}
      />
    </Marquee>
  </Box>
);

const MyServicesSection: React.FC = () => {
  return (
    <Box
      id="services"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={4}
      overflow="hidden"
    >
      <SectionTitle title="What I Do" />
      <Grid container spacing={4} justifyContent="center" mb={8}>
        {services.map((service, index) => (
          <Grid size={{ xxs: 12, md: 6, lg: 4 }} key={index}>
            <Box
              px={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
            >
              <IconWrapper>
                <img
                  src={service.icon}
                  alt={service.title}
                  style={{ width: 140, height: 140 }}
                />
              </IconWrapper>

              <Typography variant="h6" fontWeight={600} gutterBottom>
                {service.title}
              </Typography>
              <Box
                height="3px"
                width="40px"
                bgcolor={(theme) => theme.palette.primary.main}
                mx="auto"
                mb={2}
              />
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <TechCarousel />
    </Box>
  );
};

export default MyServicesSection;
