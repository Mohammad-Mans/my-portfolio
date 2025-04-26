import { Box, Typography } from "@mui/material";

const CopyrightSection: React.FC = () => {
  return (
    <Box
      id="copyright"
      display="flex"
      py={2}
      justifyContent="center"
      alignItems="center"
    >
      <Typography color="text.secondary">© 2024 All Rights Reserved</Typography>
    </Box>
  );
};

export default CopyrightSection;
