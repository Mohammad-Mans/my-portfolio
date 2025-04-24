import { Box, Stack } from "@mui/material";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Spotify | Clone",
    description:
      "This application is a replica of the popular Spotify platform, built using Vue.js, Tailwind CSS, and Pinia. It includes a component for controlling songs, playback duration, and volume. The app is designed to be responsive and user-friendly.",
    image: "/images/spotify-clone.png",
    demoLink: "https://spotify-clone-demo.com",
  },
  {
    title: "Netflix | Clone",
    description:
      "A Netflix-inspired web app built with React and Firebase. Features include user authentication, browsing movies, and a personalized watchlist.",
    image: "/images/netflix-clone.png",
    demoLink: "https://netflix-clone-demo.com",
  },
  {
    title: "E-commerce Store",
    description:
      "An online store platform built with Next.js and Stripe for payments. Features product listings, shopping cart, and checkout flow.",
    image: "/images/ecommerce-store.png",
    demoLink: "https://ecommerce-store-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React and MUI, showcasing projects, skills, and contact information in a clean, responsive layout.",
    image: "/images/portfolio-website.png",
    demoLink: "https://portfolio-demo.com",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application built with React and OpenWeather API, allowing users to search for current weather conditions worldwide.",
    image: "/images/weather-app.png",
    demoLink: "https://weather-app-demo.com",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <Box id="projects" display="flex" py={4} justifyContent="center">
      <Stack
        direction="row"
        spacing={4}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"
      >
        {projects.map((project, index) => (
          <Box
            key={index}
            sx={{ display: "flex", flex: "1 1 300px", maxWidth: "300px" }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              demoLink={project.demoLink}
              githubLink={""}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectSection;
