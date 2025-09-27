import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Button from '../ui/Button';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, image, demoUrl, githubUrl, reportUrl, featured } = project;

  return (
    <Card className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__image">
        <img src={image} alt={title} loading="lazy" />
        <div className="project-card__overlay">
          <div className="project-card__actions">
            {demoUrl && (
              <Button 
                href={demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="primary"
                size="small"
              >
                Demo
              </Button>
            )}
            {githubUrl && (
              <Button 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="outline"
                size="small"
              >
                {githubUrl.endsWith('.pdf') ? 'Report' : 'Code'}
              </Button>
            )}
            {reportUrl && (
              <Button 
                href={reportUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="outline"
                size="small"
              >
                Report
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        
        <div className="project-card__technologies">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="project-card__tech"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    demoUrl: PropTypes.string,
    githubUrl: PropTypes.string,
    reportUrl: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;