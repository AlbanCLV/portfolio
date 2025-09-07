// src/pages/formations.js
import React from 'react';
import Timeline from '../components/specific/Timeline';
import { motion } from 'framer-motion';
import styles from './formations.module.scss'; // Un module CSS spécifique pour la page

// Les données de vos formations (extraites du CV)
const formationsData = [
  {
    id: 1,
    logo: "cesi.png", // à placer dans public/assets/images/
    school: "CESI",
    title: "Diplôme d'ingénieur, Ingénierie informatique",
    year: "Oct 2024 - Aug 2027",
    description: ""
  },
  {
    id: 2,
    logo: "iut1.png", // à placer dans public/assets/images/
    school: "IUT1 Grenoble",
    title: "BUT Réseaux et Télécommunications",
    year: "Sep 2021 - Jun 2024",
    description: ""
  },
  {
    id: 3,
    logo: "svp.png", // à placer dans public/assets/images/
    school: "Lycée Saint-Vincent de Paul",
    title: "Baccalauréat professionnel, Réseaux Informatiques et Systèmes Communicants",
    year: "2018 - 2021",
    description: ""
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Délai d'apparition entre les éléments
    }
  }
};

export default function FormationsPage() {
  return (
    <motion.section
      className={styles.formationsPage}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className={styles.title}>Mon parcours académique</motion.h1>
      <Timeline formations={formationsData} />
    </motion.section>
  );
}