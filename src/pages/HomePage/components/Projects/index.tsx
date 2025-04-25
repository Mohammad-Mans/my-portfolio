import { Box, Stack } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import Todo from "../../../../assets/images/my-todo-list.png";
import TwitterClone from "../../../../assets/images/twitter-profile-clone.png";
import NoteKeeper from "../../../../assets/images/note-keeper.png";
import VistaVoyage from "../../../../assets/images/vista-voyage.png";
import STEMerLab from "../../../../assets/images/STEMer-lab.png";
import Astrotech from "../../../../assets/images/astrotech.png";
const projects = [
  {
    title: "STEMerLab",
    description:
      "A simple weather application built with React and OpenWeather API, allowing users to search for current weather conditions worldwide.",
    image: STEMerLab,
    demoLink: "https://stemerlab.com/",
  },
  {
    title: "Astrotech Landing Page",
    description:
      "A simple weather application built with React and OpenWeather API, allowing users to search for current weather conditions worldwide.",
    image: Astrotech,
    demoLink: "https://astrotechltd.com/",
  },
  {
    title: "Travil & Booking Platform",
    description:
      "A personal portfolio built using React and MUI, showcasing projects, skills, and contact information in a clean, responsive layout.",
    image: VistaVoyage,
    demoLink: "https://vista-voyage-mo.vercel.app/",
    githubLink: "https://github.com/Mohammad-Mans/Travel-Booking-Platform",
  },
  {
    title: "Note Keeper",
    description:
      "An online store platform built with Next.js and Stripe for payments. Features product listings, shopping cart, and checkout flow.",
    image: NoteKeeper,
    demoLink: "https://note-keeper-mo.vercel.app",
    githubLink: "https://github.com/Mohammad-Mans/frontend-note-keeper-webkit",
  },
  {
    title: "Twitter Profile Clone",
    description:
      "A Netflix-inspired web app built with React and Firebase. Features include user authentication, browsing movies, and a personalized watchlist.",
    image: TwitterClone,
    demoLink: "https://twitter-clone-mo.vercel.app",
    githubLink: "https://github.com/Mohammad-Mans/twitter-react-profile",
  },

  {
    title: "TODO List",
    description:
      "This application is a replica of the popular Spotify platform, built using Vue.js, Tailwind CSS, and Pinia.",
    image: Todo,
    demoLink: "https://todo-list-mo.vercel.app",
    githubLink: "https://github.com/Mohammad-Mans/todo-list",
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
              githubLink={project.githubLink || ""}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ProjectSection;
