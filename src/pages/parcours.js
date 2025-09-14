import React from 'react';
import { motion } from 'framer-motion';
import styles from './formations.module.scss';

// Données formations
const formationsData = [
  {
    id: 1,
    logo: "cesi.png",
    school: "CESI",
    title: "Diplôme d'ingénieur, Ingénierie informatique",
    year: "Oct 2024 - Aug 2027",
    description: ""
  },
  {
    id: 2,
    logo: "iut1.png",
    school: "IUT1 Grenoble",
    title: "BUT Réseaux et Télécommunications",
    year: "Sep 2021 - Jun 2024",
    description: ""
  },
  {
    id: 3,
    logo: "svp.png",
    school: "Lycée Saint-Vincent de Paul",
    title: "Baccalauréat professionnel, Réseaux Informatiques et Systèmes Communicants",
    year: "Sep 2018 - Jun 2021",
    description: ""
  }
];

// Données expériences professionnelles
const experiencesData = [
  {
    id: 1,
    logo: "visiativ.png",
    school: "Visiativ",
    title: "CISO Trainee",
    year: "Oct 2024 - Présent",
    description: "Participation aux audits de sécurité, scans de vulnérabilité, sensibilisation des équipes, et suivi de la sécurité des produits web.",
    link: "https://www.visiativ.com/",
    rapport: "/assets/MT_CALVO.pdf"
  },
  {
    id: 2,
    logo: "vizyon.png",
    school: "Vizyon",
    title: "Administrateur Réseaux & Sécurité",
    year: "Sep 2023 - Jun 2024",
    description: "Gestion des réseaux pour cabinets médicaux, mise en place de VPN, firewalls, SIEM, et développement d’outils Python pour l’administration.",
    link: "https://www.linkedin.com/company/vizyon-france/?originalSubdomain=fr",
    rapport: "/assets/Rapport_Vizyon.pdf"
  }
];

// Animation Framer Motion
const itemVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.18, type: "spring", stiffness: 60 }
  })
};

function AnimatedTimeline({ formations }) {
  return (
    <div className={styles.timelineWrapper}>
      <ul className={styles.timelineList}>
        {formations.map((formation, i) => (
          <motion.li
            key={formation.id}
            className={styles.timelineItem}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            style={{
              background: "#181818",
              borderRadius: "16px",
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
              margin: "24px 0",
              padding: "24px 32px",
              display: "flex",
              alignItems: "center",
              minWidth: "320px",
              maxWidth: "700px"
            }}
          >
            <img
              src={`/assets/images/${formation.logo}`}
              alt={formation.school}
              className={styles.logo}
              style={{
                width: "64px",
                height: "64px",
                objectFit: "contain",
                marginRight: "32px",
                flexShrink: 0
              }}
            />
            <div className={styles.textBlock} style={{ flex: 1, textAlign: "justify" }}>
              <div className={styles.school}>
                {formation.link ? (
                  <a
                    href={formation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {formation.school}
                  </a>
                ) : (
                  formation.school
                )}
              </div>
              <div className={styles.title}>{formation.title}</div>
              <div className={styles.year}>{formation.year}</div>
              {formation.description && (
                <div className={styles.description}>{formation.description}</div>
              )}
              {formation.rapport && (
                <div style={{ marginTop: 12 }}>
                  <a
                    href={formation.rapport}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#7abaff",
                      textDecoration: "underline",
                      fontWeight: 600,
                      fontSize: "1.08rem"
                    }}
                  >
                    Voir le rapport
                  </a>
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function ParcoursPage() {
  return (
    <motion.section
      className={styles.formationsPage}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className={styles.title}>Parcours</motion.h1>
      <h2 style={{marginTop: 40, marginBottom: 18}}>Formations</h2>
      <AnimatedTimeline formations={formationsData} />
      <h2 style={{marginTop: 60, marginBottom: 18}}>Expériences professionnelles</h2>
      <AnimatedTimeline formations={experiencesData} />
    </motion.section>
  );
}