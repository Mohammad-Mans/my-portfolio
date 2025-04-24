import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  styled,
  IconButton,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  backgroundColor: theme.palette.bgColor.light,
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.03)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
  },
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
}) => {
  return (
    <StyledCard elevation={0}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={`${title} cover image`}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="grey.400">
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
        {githubLink !== "" ? (
          <IconButton
            component="a"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        ) : (
          <Box></Box>
        )}

        <Button
          size="small"
          variant="text"
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#3b82f6", textTransform: "none" }}
        >
          View
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default ProjectCard;
