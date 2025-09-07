// src/components/specific/Hero.js
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  const mainTitle = "Alban Calvo";
  const roles = ["Ingénieur Informatique", "RSSI"];
  const descriptionText = "Je suis un ingénieur informatique passionné par le développement web moderne. Spécialisé en React et les technologies avancées, j'aime construire des applications robustes, performantes et intuitives. Mon objectif est de transformer les idées complexes en solutions élégantes et fonctionnelles.";

  // Animation machine à écrire pour le rôle
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let cursorInterval;
    const currentRole = roles[roleIndex];

    cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setDisplayedRole(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          typingTimeout = setTimeout(handleTyping, 40);
        } else {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedRole(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          typingTimeout = setTimeout(handleTyping, 35);
        } else {
          setTimeout(() => {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
            setCharIndex(0);
          }, 400);
        }
      }
    };

    typingTimeout = setTimeout(handleTyping, 200);

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className={styles.heroSection}>
      {/* Titre principal centré en haut */}
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '40px' }}>
        <h1 className={styles.primaryTitle}>{mainTitle}</h1>
      </div>
      <div className={styles.heroContent} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '48px' }}>
        {/* Cellule photo + bouton à gauche */}
        <div className={styles.photoCell}>
          <img
            src="/assets/images/alban-calvo-profile.jpg"
            alt="Alban Calvo"
            className={styles.profileImage}
          />
          <a
            href="/Resume_AlbanCalvo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cvDownload}
          >
            Voir mon CV
          </a>
        </div>
        {/* Fenêtre stylisée à droite */}
        <div className={styles.mainContentCell}>
          <div className={styles.contentWindow}>
            <div className={styles.windowControls}>
              <span className={`${styles.dot} ${styles.red}`}></span>
              <span className={`${styles.dot} ${styles.yellow}`}></span>
              <span className={`${styles.dot} ${styles.green}`}></span>
            </div>
            <div className={styles.windowContent}>
              <h2 className={styles.secondaryTitle}>
                {displayedRole}
                <span className={styles.cursor}>{showCursor ? '|' : ' '}</span>
              </h2>
              <p className={styles.description}>{descriptionText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;