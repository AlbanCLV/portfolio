import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
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
              <h3>Skills</h3>
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
      </div>
    </section>
  );
};

export default About;