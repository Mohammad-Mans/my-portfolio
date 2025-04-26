import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, styled, Button, ButtonProps, Stack } from "@mui/material";
import StyledIconButton from "../../../../components/common/StyledIconButton";

const pages = ["about", "services", "projects", "contact"];

const StyledButton = styled((props: ButtonProps) => <Button {...props} />)(
  ({ theme }) => ({
    display: "block",
    padding: theme.spacing(1.5),
    fontWeight: 600,
    color: theme.palette.text.secondary,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  })
);

const FooterSection: React.FC = () => {
  const handleSectionClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    let lastY = window.scrollY;
    let idleCount = 0;

    const checkScrollFinished = () => {
      const currentY = window.scrollY;

      if (currentY === lastY) {
        idleCount++;
      } else {
        idleCount = 0;
        lastY = currentY;
      }

      if (idleCount > 5) {
        window.scrollBy(0, 1);
      } else {
        requestAnimationFrame(checkScrollFinished);
      }
    };

    requestAnimationFrame(checkScrollFinished);
  };

  return (
    <Box
      id="footer"
      display="flex"
      flexDirection={{ xxs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      py={4}
    >
      <Box my={2}>
        <StyledIconButton href="https://github.com/Mohammad-Mans">
          <GitHub />
        </StyledIconButton>
        <StyledIconButton href="https://www.linkedin.com/in/mohammad-mans">
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
  );
};

export default FooterSection;
