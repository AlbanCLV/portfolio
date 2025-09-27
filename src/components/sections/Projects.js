import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Button from '../ui/Button';
import { projectsData } from '../../data/projects';
import './Projects.scss';

const Projects = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  const featuredProjects = projectsData.filter(project => project.featured).slice(0, 2);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Recents realisations
        </motion.p>

        <div className="projects-section__grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-section__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button href="/projects" variant="outline" size="large">
            View all my projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;