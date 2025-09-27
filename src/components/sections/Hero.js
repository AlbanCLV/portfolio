import { motion } from 'framer-motion';
import Button from '../ui/Button';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm{' '}
            <span className="hero__name">Alban Calvo</span>
          </motion.h1>

          <motion.h2
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Engineering Student & CISO Junior
          </motion.h2>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I assure the security of information systems and
            implement cybersecurity measures to protect data and
            networks.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button href="#parcours" variant="primary" size="large">
              View my journey
            </Button>
            <Button href="#projects" variant="outline" size="large">
              My projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="hero__image">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/alban-calvo-profile.jpg`}
              alt="Alban Calvo"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;