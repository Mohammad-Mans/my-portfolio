import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
  ToolbarProps,
  ButtonProps,
  IconButton,
  Container,
  ContainerProps,
  Menu,
  MenuItem,
  Typography,
  Divider,
  MenuProps,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/NightlightOutlined";
import { useThemeContext } from "../../../../../config/theme.config";

const pages = ["about", "services", "projects", "contact"];

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "transparent",
}));

const StyledToolBar = styled((props: ToolbarProps) => <Toolbar {...props} />)(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: "96%",
    [theme.breakpoints.up("sm")]: {
      width: "88%",
    },
    margin: "auto",
  })
);

const StyledContainer = styled((props: ContainerProps) => (
  <Container maxWidth={false} {...props} />
))(({ theme }) => ({
  width: "98%",
  padding: 0,
  [theme.breakpoints.up("sm")]: {
    width: "96%",
  },
  marginLeft: theme.spacing("auto"),
  marginRight: theme.spacing("auto"),
  display: "flex",
  justifyContent: "start",
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
  },
}));

const StyledButtonsBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  width: "min-content",
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  borderRadius: "30px",
  backgroundColor: theme.palette.bgColor.light,
  boxShadow: "1px 1px 30px 1px #3532324a",
}));

const StyledButton = styled((props: ButtonProps) => <Button {...props} />)(
  ({ theme }) => ({
    display: "block",
    padding: theme.spacing(1.5),
    fontFamily: "Poppins SemiBold",
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  })
);

const ThemeModeButton = styled(IconButton)(({ theme }) => ({
  zIndex: 1100,
  marginRight: theme.spacing(0),
  backgroundColor: theme.palette.bgColor.light,
  border: `1px solid ${theme.palette.bgColor.light}`,
  boxShadow: "1px 1px 30px 1px #3532324a",
  "&:hover": {
    backgroundColor: theme.palette.bgColor.light,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  marginLeft: theme.spacing(0),
  backgroundColor: theme.palette.bgColor.light,
  border: `1px solid ${theme.palette.bgColor.light}`,
  boxShadow: "1px 1px 30px 1px #3532324a",
  "&:hover": {
    backgroundColor: theme.palette.bgColor.light,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    disableScrollLock={true}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  justifyContent: "center",
  maxWidth: "400px",
  marginTop: theme.spacing(1),
  "& .MuiMenu-paper": {
    borderRadius: "30px",
  },
}));

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { toggleTheme, isDarkMode } = useThemeContext();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSectionClick = (sectionId: string) => {
    const appBarHeight = document.getElementById("appbar")?.offsetHeight || 0;
    const destinationElement = document.getElementById(sectionId);
    if (destinationElement) {
      const offsetTop = destinationElement.offsetTop - appBarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    handleCloseNavMenu();
  };

  return (
    <>
      <HideOnScroll>
        <StyledAppBar id="appbar" elevation={0}>
          <StyledToolBar>
            <StyledContainer>
              <StyledButtonsBox>
                {pages.map((page) => (
                  <StyledButton
                    key={page}
                    onClick={() => handleSectionClick(page)}
                  >
                    {page}
                  </StyledButton>
                ))}
              </StyledButtonsBox>
              <MenuButton edge="start" size="large" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </MenuButton>
              <StyledMenu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page, index) => (
                  <Box key={page}>
                    {index !== 0 && <Divider />}
                    <MenuItem
                      onClick={() => {
                        handleSectionClick(page);
                      }}
                    >
                      <Typography
                        textAlign="center"
                        fontFamily="Poppins SemiBold"
                        width="100vw"
                        fontSize="1.2em"
                      >
                        {page.toUpperCase()}
                      </Typography>
                    </MenuItem>
                  </Box>
                ))}
              </StyledMenu>
            </StyledContainer>
          </StyledToolBar>
        </StyledAppBar>
      </HideOnScroll>
      <Toolbar
        disableGutters
        sx={{
          height: "80.5px",
          flexDirection: "row-reverse",
        }}
      >
        <ThemeModeButton edge="end" size="large" onClick={toggleTheme}>
          {isDarkMode ? (
            <DarkModeIcon sx={{ transform: "rotate(-30deg)" }} />
          ) : (
            <LightModeIcon sx={{ color: "#feac17" }} />
          )}
        </ThemeModeButton>
      </Toolbar>
    </>
  );
}

export default NavBar;
