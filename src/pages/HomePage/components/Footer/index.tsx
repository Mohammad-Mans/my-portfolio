import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton, Box, styled, Button, ButtonProps, Stack } from "@mui/material";

const pages = ["about", "services", "projects", "contact"];

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

const StyledButton = styled((props: ButtonProps) => <Button {...props} />)(
  ({ theme }) => ({
    display: "block",
    padding: theme.spacing(1.5),
    fontFamily: "Poppins SemiBold",
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  })
);

const FooterSection: React.FC = () => {
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
  };

  return (
    <Box id="footer" display="flex" py={4} justifyContent="center">
      <Box
        display="flex"
        flexDirection={{ xxs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        flex={2}

        maxWidth="1300px"
      >
        <Box my={2}>
          <StyledIconButton>
            <GitHub />
          </StyledIconButton>
          <StyledIconButton>
            <LinkedIn />
          </StyledIconButton>
        </Box>

        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          {pages.map((page) => (
            <StyledButton key={page} onClick={() => handleSectionClick(page)}>
              {page}
            </StyledButton>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default FooterSection;
