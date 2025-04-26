import { Box, Stack } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import Todo from "../../../../assets/images/my-todo-list.png";
import TwitterClone from "../../../../assets/images/twitter-profile-clone.png";
import NoteKeeper from "../../../../assets/images/note-keeper.png";
import VistaVoyage from "../../../../assets/images/vista-voyage.png";
import STEMerLab from "../../../../assets/images/STEMer-lab.png";
import Astrotech from "../../../../assets/images/astrotech.png";
import SectionTitle from "../../../../components/common/SectionTitle";
const projects = [
  {
    title: "STEMerLab",
    description:
      "A responsive website to showcase onsite courses and blogs, leveraging Firebase for backend functionality including content management, user authentication, and real-time data handling via an admin dashboard",
    image: STEMerLab,
    demoLink: "https://stemerlab.com/",
  },
  {
    title: "Astrotech Landing Page",
    description:
      "A responsive landing page using React TypeScript, Material UI, and Framer Motion to create cohesive layouts and smooth animations, enhancing user experience",
    image: Astrotech,
    demoLink: "https://astrotechltd.com/",
  },
  {
    title: "Travil Booking Platform",
    description:
      "A travel booking platform I built during my Foothill internship with React TypeScript, MUI, and Vite, featuring user/admin access, search filters, hotel listings, maps, and PDF confirmations.",
    image: VistaVoyage,
    demoLink: "https://vista-voyage-mo.vercel.app/",
    githubLink: "https://github.com/Mohammad-Mans/Travel-Booking-Platform",
  },
  {
    title: "My Note Keeper",
    description:
      "A full-stack note-taking app built with React.js and MUI on the frontend, and Node.js, Express.js, and MongoDB on the backend. Supports adding, editing, deleting, and searching notes with a clean, responsive UI and robust RESTful API integration",
    image: NoteKeeper,
    demoLink: "https://note-keeper-mo.vercel.app",
    githubLink: "https://github.com/Mohammad-Mans/my-note-keeper-frontend",
  },
  {
    title: "Twitter Profile Clone",
    description:
      "A static clone of a Twitter profile page built with React and MUI. This project showcases my ability to replicate complex UIs and was my first hands-on experience with React, focusing on component structure, styling, and responsive design",
    image: TwitterClone,
    demoLink: "https://twitter-clone-mo.vercel.app",
    githubLink: "https://github.com/Mohammad-Mans/twitter-react-profile",
  },

  {
    title: "TODO List",
    description:
      "A task management web app built with HTML, CSS, and JavaScript. Features include adding, deleting, marking tasks as done, searching, and real-time task counts. Designed with a clean, modern UI and fully responsive layout",
    image: Todo,
    demoLink: "https://todo-list-mo.vercel.app",
    githubLink: "https://github.com/Mohammad-Mans/todo-list",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <Box
      id="projects"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      py={4}
    >
      <SectionTitle title="Projects" />
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
