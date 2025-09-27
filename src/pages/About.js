import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import './About.scss';

const About = () => {
  const skills = [
    'Cybersecurity audit', 'Network management', 'Programming', 'Cloud Computing',
    'Web development', 'Git & GitHub', 'Virtualisation'
  ];

  return (
    <motion.div
        className="about-page"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <motion.h1
            className="about-page__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About me
          </motion.h1>

          <div className="about-page__content">
            <motion.div
              className="about-page__text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <h2>My journey</h2>
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
              </Card>
            </motion.div>

            <motion.div
              className="about-page__skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <h2>Technical skills</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="skill-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
};

export default About;