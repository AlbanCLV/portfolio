import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import { GuitarIcon, JudoIcon, FitnessIcon } from '../components/icons';
import './About.scss';

const About = () => {
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

          <motion.div
            className="about-page__passions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="passions-title">My Passions</h2>
            <div className="passions-grid">
              {passions.map((passion, index) => {
                const IconComponent = passion.icon;
                return (
                  <motion.div
                    key={passion.name}
                    className="passion-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 + index * 0.2 }}
                  >
                    <Card>
                      <div className="passion-card__icon">
                        <IconComponent size={64} color="var(--color-accent)" />
                      </div>
                      <h3 className="passion-card__title">{passion.name}</h3>
                      <p className="passion-card__description">{passion.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
};

export default About;