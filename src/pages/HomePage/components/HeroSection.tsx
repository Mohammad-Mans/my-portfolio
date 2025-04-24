import Lottie from "lottie-react";
import LaptopAnimation from "../../../assets/lotties/Laptop.json";
import MyAvatar from "../../../assets/images/my-photo.jfif";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { Download, GitHub, LinkedIn } from "@mui/icons-material";

const AvatarWrapper = styled(Box)(({ theme }) => ({
  width: "min-content",
  display: "inline-flex",
  padding: "5px",
  borderRadius: "50%",
  backgroundColor: theme.palette.bgColor.main,
  border: `1px solid ${theme.palette.primary.main}`,
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: "200px",
  height: "200px",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.bgColor.light,
  border: `1px solid ${theme.palette.bgColor.light}`,
  marginRight: theme.spacing(2),
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.bgColor.light,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.bgColor.light,
  border: `1px solid ${theme.palette.bgColor.light}`,
  borderRadius: "30px",
  padding: theme.spacing(1.5),
  color: theme.palette.primary.main,
  fontFamily: "Poppins SemiBold",
  "&:hover": {
    backgroundColor: theme.palette.bgColor.light,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

function HeroSection() {
  return (
    <Box id="about" display="flex" py={4} justifyContent="center">
      <Box display="flex" flexDirection="column" flex={2} maxWidth="1300px">
        <AvatarWrapper>
          <StyledAvatar src={MyAvatar} />
        </AvatarWrapper>
        <Typography
          variant="h3"
          fontFamily="Poppins Bold"
          fontSize={{ xxs: "2rem", sm: "2.3rem", md: "3rem" }}
          my={2}
        >
          Mohammad Mansour, Computer Systems Engineer.
        </Typography>
        <Typography my={2}>
          Hi, I'm a CSE Student immersing myself in the art of front-end and web
          development. Join me as I present my web development endeavors, all
          meticulously brought to life using the power of code. Want to find out
          more about my experience? Check out my resumé!
        </Typography>
        <Box my={2}>
          <StyledIconButton>
            <GitHub />
          </StyledIconButton>
          <StyledIconButton>
            <LinkedIn />
          </StyledIconButton>
          <StyledButton
            href="https://drive.google.com/file/d/1ptZqYBWDQchrU7ywNHch1UZeMGlwG6W6/view?usp=drive_link"
            endIcon={<Download />}
          >
            Download CV
          </StyledButton>
        </Box>
      </Box>
      <Box display={{ xxs: "none", lg: "flex" }} flex={1.3} ml={4}>
        <Lottie
          animationData={LaptopAnimation}
          loop={true}
          style={{ height: "auto", width: "100%" }}
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
