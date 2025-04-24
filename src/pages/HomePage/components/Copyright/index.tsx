import { Box, Typography } from "@mui/material";

const CopyrightSection: React.FC = () => {
  return (
    <Box id="copyright" display="flex" py={2} justifyContent="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={2}
        maxWidth="1300px"
      >
        <Typography color="text.secondary">© 2024 All Rights Reserved</Typography>
      </Box>
    </Box>
  );
};

export default CopyrightSection;
