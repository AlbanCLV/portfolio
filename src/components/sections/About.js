import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { GuitarIcon, JudoIcon, FitnessIcon } from '../icons';
import './About.scss';

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setInView(true);
  }, []);

  const skills = [
    'Cybersecurity audit', 'Network management', 'Programming', 'Cloud Computing',
    'Web development', 'Git & GitHub', 'Virtualisation'
  ];

  const passions = [
    {
      name: 'Guitar',
      icon: GuitarIcon,
      description: 'Music helps me express creativity and find balance. Playing guitar teaches me patience and precision - qualities essential in cybersecurity work.',
    },
    {
      name: 'Judo',
      icon: JudoIcon,
      description: 'Martial arts developed my discipline and strategic thinking. The mental fortitude from judo helps me stay calm under pressure in high-stakes security situations.',
    },
    {
      name: 'Fitness',
      icon: FitnessIcon,
      description: 'Physical training maintains my focus and energy. The discipline required for consistent workouts translates directly to the persistence needed in cybersecurity analysis.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About me
        </motion.h2>

        <div className="about-section__content">
          <motion.div
            className="about-section__text"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <h3>My career</h3>
              <p>
                Passionate CISO junior with expertise in cybersecurity and network management,
                I create secure and efficient IT environments.
                My approach combines vigilance and technical rigor to
                deliver quality security solutions.
              </p>
              <p>
                Always on the lookout for the latest technologies and best practices,
                I strive to secure infrastuctures and implement effective security measures
                that meet organizational needs.
              </p>
              <Button href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/about`} variant="outline">
                Learn more
              </Button>
            </Card>
          </motion.div>

          <motion.div
            className="about-section__skills"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="about-section__passions"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="passions-title">My Passions</h3>
          <div className="passions-grid">
            {passions.map((passion, index) => {
              const IconComponent = passion.icon;
              return (
                <motion.div
                  key={passion.name}
                  className="passion-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <Card>
                    <div className="passion-card__icon">
                      <IconComponent size={64} color="var(--color-accent)" />
                    </div>
                    <h4 className="passion-card__title">{passion.name}</h4>
                    <p className="passion-card__description">{passion.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;