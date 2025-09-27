import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ParcoursSection from '../components/sections/Parcours';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <About />
      <ParcoursSection />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default Home;