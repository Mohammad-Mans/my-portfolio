import { Box, Grid, styled, Typography } from "@mui/material";
import WebIcon from "../../../../assets/Icons/coding.png";
import ResponsiveIcon from "../../../../assets/Icons/responsive.png";
import AnimationIcon from "../../../../assets/Icons/animate.png";

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
  backgroundColor: theme.palette.grey[100],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  transition: "transform 1s ease",
  "&:hover": {
    transform: "rotate(360deg)",
  },
}));

const MyServicesSection: React.FC = () => {
  return (
    <Box id="services" display="flex" py={4} justifyContent="center">
      <Box
        display="flex"
        flexDirection={{ xxs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        flex={2}
        maxWidth="1300px"
      >
        <Grid container spacing={4} justifyContent="center">
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

                <Typography
                  variant="h6"
                  fontFamily="Poppins SemiBold"
                  gutterBottom
                >
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
      </Box>
    </Box>
  );
};

export default MyServicesSection;
