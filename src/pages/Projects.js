import { motion } from 'framer-motion';
import ProjectCard from '../components/sections/ProjectCard';
import { projectsData } from '../data/projects';
import './Projects.scss';

const Projects = () => {
  return (
    <motion.div
        className="projects-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            className="projects-page__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Projects
          </motion.h1>

          <motion.p
            className="projects-page__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Here's a selection of my recent achievements
          </motion.p>

          <div className="projects-page__grid">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
};

export default Projects;