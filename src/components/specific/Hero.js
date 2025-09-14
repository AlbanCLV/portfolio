// src/components/specific/Hero.js
import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.scss';

// Icônes externes
import { FaNetworkWired, FaPhone, FaPeopleGroup } from "react-icons/fa6";
import { MdSecurity, MdShield } from "react-icons/md"; // Seules celles-ci existent
import 'devicon/devicon.min.css';

const Hero = () => {
  const mainTitle = "Alban Calvo";
  const roles = ["Ingénieur Informatique", "RSSI"];
  const descriptionText =
    "Je suis un ingénieur informatique passionné par le développement web moderne. Spécialisé en React et les technologies avancées, j'aime construire des applications robustes, performantes et intuitives. Mon objectif est de transformer les idées complexes en solutions élégantes et fonctionnelles.";

  // Liste de compétences avec icônes
  const competences = [
    { name: "routage", icon: <FaNetworkWired style={{ fontSize: "2.1rem", color: "#7abaff" }} /> },
    { name: "Linux", icon: "devicon-linux-plain" },
    { name: "Windows Server", icon: "devicon-windows8-plain" },
    { name: "VoIP", icon: <FaPhone style={{ fontSize: "2.1rem", color: "#7abaff" }} /> },
    { name: "sécurité réseau", icon: <MdSecurity style={{ fontSize: "2.1rem", color: "#232b3a" }} /> }, // noir
    { name: "pare-feu", icon: <MdShield style={{ fontSize: "2.1rem", color: "#232b3a" }} /> },        // noir
    { name: "Python", icon: "devicon-python-plain" },
    { name: "Bash", icon: "devicon-bash-plain" },
    { name: "PowerShell", icon: "devicon-powershell-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "C#", icon: "devicon-csharp-plain" },
    { name: "JavaScript (React/Node.js)", icon: "devicon-javascript-plain" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "AWS / Azure", icon: "devicon-azure-plain" },
    { name: "SQL (PostgreSQL, MySQL)", icon: "devicon-postgresql-plain" },
    { name: "NoSQL (MongoDB)", icon: "devicon-mongodb-plain" },
    { name: "gestion d’équipes", icon: <FaPeopleGroup style={{ fontSize: "2.1rem", color: "#7abaff" }} /> }
  ];

  // Animation machine à écrire pour le rôle
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    let typingTimeout;
    let cursorInterval;
    const currentRole = roles[roleIndex];

    cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);

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
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div style={{ width: '100%', textAlign: 'center', marginBottom: '40px' }}>
        <h1 className={styles.primaryTitle}>{mainTitle}</h1>
      </div>

      <div className={styles.heroContent} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '48px' }}>
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
                <span className={styles.cursor}>{showCursor ? "|" : " "}</span>
              </h2>
              <p className={styles.description}>{descriptionText}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Banderole compétences avec icônes */}
      <div style={{
        marginTop: "48px",
        width: "100%",
        overflow: "hidden",
        background: "#f4f8ff", // Fond beaucoup plus clair pour la banderole
        padding: "16px 0",
        borderTop: "2px solid #1a73e8",
        borderBottom: "2px solid #1a73e8",
        position: "relative"
      }}>
        <div ref={scrollRef} style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          willChange: "transform",
          animation: "scrollSkills 56s linear infinite"
        }}>
          {[...competences, ...competences].map((skill, index) => (
            <span key={index} style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              margin: "0 24px",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#232b3a",
              minWidth: "70px"
            }}>
              {typeof skill.icon === "string"
                ? <i className={`${skill.icon} colored`} style={{ fontSize: "2.1rem" }}></i>
                : skill.icon
              }
              <span>{skill.name}</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scrollSkills {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
