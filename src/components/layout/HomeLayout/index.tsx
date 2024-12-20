import { Box, Container, ContainerProps, styled } from "@mui/material";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components";

const OuterContainer = styled((props: ContainerProps) => (
  <Container component="main" maxWidth={false} {...props} />
))(({ theme }) => ({
  width: "96%",
  [theme.breakpoints.up("sm")]: {
    width: "88%",
  },
  minHeight: "100vh",
  backgroundColor: theme.palette.bgColor.main,
  border: `2px solid ${theme.palette.border.main}`,
}));

const InnerContainer = styled((props: ContainerProps) => (
  <Container maxWidth={false} {...props} />
))(({ theme }) => ({
  width: "98%",
  padding: 0,
  [theme.breakpoints.up("sm")]: {
    width: "96%",
  },
  minHeight: "100vh",
}));

function HomeLayout() {
  return (
    <Box minHeight="100vh" bgcolor="bgColor.dark">
      <OuterContainer>
        <InnerContainer>
          <NavBar />
          <Outlet />
        </InnerContainer>
      </OuterContainer>
    </Box>
  );
}

export default HomeLayout;
