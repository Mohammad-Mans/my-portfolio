import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface StyledIconButtonProps extends IconButtonProps<"a"> {
  href: string;
}

const StyledIconButton = styled((props: StyledIconButtonProps) => (
  <IconButton
    {...props}
    component="a"
    target="_blank"
    rel="noopener noreferrer"
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.bgColor.light,
  border: `1px solid ${theme.palette.bgColor.light}`,
  marginRight: theme.spacing(2),
  padding: theme.spacing(1.5),
  "&:hover": {
    backgroundColor: theme.palette.bgColor.light,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

export default StyledIconButton;
