import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { experienceData } from '../../data/projects';
import './Parcours.scss';

const ParcoursSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  // Take only the 2 most recent experiences
  const recentExperiences = experienceData.slice(0, 2);

  return (
    <section id="parcours" className="parcours-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Career
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          An overview of my professional evolution
        </motion.p>

        <div className="parcours-section__grid">
          {recentExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="parcours-section__item"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              <Card>
                <div className="parcours-item">
                  <div className="parcours-item__header">
                    <h3 className="parcours-item__position">{experience.position}</h3>
                    <span className="parcours-item__period">{experience.period}</span>
                  </div>
                  
                  <h4 className="parcours-item__company">{experience.company}</h4>
                  
                  <p className="parcours-item__description">
                    {experience.description}
                  </p>
                  
                  <div className="parcours-item__technologies">
                    {experience.technologies.map((tech) => (
                      <span key={tech} className="parcours-item__tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="parcours-section__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button href="/parcours" variant="outline" size="large">
            View my complete career
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ParcoursSection;