import Lottie from "lottie-react";
import LaptopAnimation from "../../../../assets/lotties/Laptop.json";
import MyAvatar from "../../../../assets/images/my-photo.png";
import { Avatar, Box, Button, Typography, styled } from "@mui/material";
import { Download, GitHub, LinkedIn } from "@mui/icons-material";
import StyledIconButton from "../../../../components/common/StyledIconButton";

const AvatarWrapper = styled(Box)(({ theme }) => ({
  width: "min-content",
  display: "inline-flex",
  padding: "2px",
  borderRadius: "50%",
  backgroundColor: theme.palette.bgColor.main,
  border: `1px solid ${theme.palette.primary.main}`,
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: "200px",
  height: "200px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.bgColor.light,
  border: `1px solid ${theme.palette.bgColor.light}`,
  borderRadius: "30px",
  padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  color:
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.54)"
      : "rgb(255, 255, 255)",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: theme.palette.bgColor.light,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const HeroSection: React.FC = () => {
  return (
    <Box display="flex" py={4} justifyContent="center">
      <Box display="flex" flexDirection="column" flex={2} maxWidth="1300px">
        <AvatarWrapper>
          <StyledAvatar src={MyAvatar} />
        </AvatarWrapper>
        <Typography
          variant="h3"
          fontWeight={700}
          fontSize={{ xxs: "1.7rem", sm: "2.3rem", md: "2.7rem" }}
          mt={2}
        >
          Mohammad Mansour, Computer Systems Engineer.
        </Typography>
        <Typography my={2}>
          Hi, I’m a Computer Systems Engineer with a passion for front-end
          development and a drive to grow as a full-stack developer. I
          specialize in building modern, responsive web applications that
          deliver smooth user experiences. From crafting intuitive interfaces
          with React and TypeScript to diving into backend technologies like
          Firebase, I’m continually expanding my skills to create more robust
          and scalable solutions. Explore my projects, where design meets
          functionality, and join me on my journey as I deepen my expertise and
          embrace new challenges in web development.
        </Typography>
        <Box my={2}>
          <StyledIconButton href="https://github.com/Mohammad-Mans">
            <GitHub />
          </StyledIconButton>
          <StyledIconButton href="https://www.linkedin.com/in/mohammad-mans">
            <LinkedIn />
          </StyledIconButton>
          <StyledButton
            href="https://drive.google.com/file/d/1cbt5qT99vE1LOWSNmbPW3_pZQv0V2JZC/view?usp=sharing"
            endIcon={<Download />}
          >
            Download CV
          </StyledButton>
        </Box>
      </Box>
      <Box
        display={{ xxs: "none", lg: "flex" }}
        flex={1.3}
        ml={4}
        maxHeight={500}
      >
        <Lottie
          animationData={LaptopAnimation}
          loop={true}
          style={{ height: "auto", width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
