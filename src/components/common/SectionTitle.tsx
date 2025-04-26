import React from "react";
import { Box, Typography, TypographyProps } from "@mui/material";

interface SectionTitleProps extends TypographyProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  variant = "h3",
  align = "center",
  ...props
}) => {
  return (
    <Box mb={4}>
      <Typography
        variant={variant}
        align={align}
        fontWeight={600}
        textTransform="uppercase"
        {...props}
      >
        {title}
      </Typography>
      <Box
        height="5px"
        width="60px"
        bgcolor={(theme) => theme.palette.primary.main}
        mx="auto"
        my={1.5}
      />
    </Box>
  );
};

export default SectionTitle;
