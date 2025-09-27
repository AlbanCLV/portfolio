import { motion } from 'framer-motion';
import { useState } from 'react';
import Timeline from '../components/sections/Timeline';
import { experienceData, formationData } from '../data/projects';
import './Parcours.scss';

const Parcours = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabVariants = {
    inactive: { 
      backgroundColor: 'transparent',
      color: 'var(--color-text-secondary)'
    },
    active: { 
      backgroundColor: 'var(--color-accent)',
      color: 'var(--color-background)'
    }
  };

  return (
    <motion.div
      className="parcours-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.h1
          className="parcours-page__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          My Career
        </motion.h1>

        <motion.p
          className="parcours-page__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Discover my professional and academic evolution
        </motion.p>

        <motion.div
          className="parcours-page__tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className={`parcours-page__tab ${activeTab === 'experience' ? 'parcours-page__tab--active' : ''}`}
            onClick={() => setActiveTab('experience')}
            variants={tabVariants}
            animate={activeTab === 'experience' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Professional Experience
          </motion.button>
          
          <motion.button
            className={`parcours-page__tab ${activeTab === 'formation' ? 'parcours-page__tab--active' : ''}`}
            onClick={() => setActiveTab('formation')}
            variants={tabVariants}
            animate={activeTab === 'formation' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.button>
        </motion.div>

        <motion.div
          className="parcours-page__content"
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'experience' ? (
            <Timeline items={experienceData} type="experience" />
          ) : (
            <Timeline items={formationData} type="formation" />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Parcours;