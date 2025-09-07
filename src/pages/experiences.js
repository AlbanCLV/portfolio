import React from 'react';
import Timeline from '../components/specific/Timeline';
import { motion } from 'framer-motion';
import styles from './formations.module.scss'; // Réutilisation du style pour la page

// Données des expériences professionnelles
const experiencesData = [
  {
    id: 1,
    logo: "visiativ.png", // à placer dans public/assets/images/
    school: "Visiativ",
    title: "CISO Trainee",
    year: "2024 - Présent",
    description: "Participation aux audits de sécurité, scans de vulnérabilité, sensibilisation des équipes, et suivi de la sécurité des produits web."
  },
  {
    id: 2,
    logo: "vizyon.png", // à placer dans public/assets/images/
    school: "Vizyon",
    title: "Administrateur Réseaux & Sécurité",
    year: "2023 - 2024",
    description: "Gestion des réseaux pour cabinets médicaux, mise en place de VPN, firewalls, SIEM, et développement d’outils Python pour l’administration."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ExperiencesPage() {
  return (
    <motion.section
      className={styles.formationsPage}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className={styles.title}>Expériences professionnelles</motion.h1>
      <Timeline formations={experiencesData} />
    </motion.section>
  );
}
