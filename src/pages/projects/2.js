import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function Project2() {
  const router = useRouter();
  const ellipse1 = useRef(null);
  const ellipse2 = useRef(null);
  const ellipse3 = useRef(null);

  useEffect(() => {
    let frame = 0;
    let raf;
    function animate() {
      frame++;
      if (ellipse1.current)
        ellipse1.current.setAttribute('cx', 350 + Math.sin(frame / 60) * 30);
      if (ellipse2.current)
        ellipse2.current.setAttribute('cy', 90 + Math.cos(frame / 50) * 20);
      if (ellipse3.current)
        ellipse3.current.setAttribute('cx', 900 + Math.sin(frame / 40) * 40);
      raf = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, []);

  const macWindowStyle = {
    background: "#181c24",
    borderRadius: "14px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.22)",
    padding: "32px 28px 28px 28px",
    color: "#e0e0e0",
    position: "relative"
  };
  const macControlsStyle = {
    display: "flex",
    gap: 8,
    position: "absolute",
    top: 16,
    left: 18
  };
  const dotStyle = color => ({
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: color,
    display: "inline-block"
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#121212",
        color: "#f3f6fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative"
      }}
    >
      {/* Bandeau haut avec illustration SVG animée */}
      <div
        style={{
          width: "100%",
          height: "260px",
          background: "linear-gradient(120deg, #1a73e8 0%, #232323 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="1440" height="260" rx="0" fill="#181c24" />
          <ellipse ref={ellipse1} cx="350" cy="130" rx="320" ry="80" fill="#1a73e8" opacity="0.13"/>
          <ellipse ref={ellipse2} cx="1100" cy="90" rx="260" ry="60" fill="#7abaff" opacity="0.11"/>
          <ellipse ref={ellipse3} cx="900" cy="200" rx="180" ry="40" fill="#fff" opacity="0.07"/>
          <circle cx="220" cy="70" r="40" fill="#7abaff" opacity="0.18"/>
          <circle cx="1300" cy="180" r="28" fill="#1a73e8" opacity="0.18"/>
          <rect x="600" y="40" width="240" height="32" rx="12" fill="#fff" opacity="0.10"/>
          <text x="50%" y="54%" textAnchor="middle" fill="#eaf2fb" fontSize="44" fontWeight="bold" fontFamily="sans-serif" opacity="0.92">
            Génie Logiciel
          </text>
        </svg>
      </div>
      <button
        onClick={() => router.back()}
        aria-label="Fermer"
        style={{
          position: 'absolute',
          top: 32,
          right: 38,
          background: 'none',
          border: 'none',
          fontSize: 32,
          color: '#fff',
          cursor: 'pointer',
          zIndex: 10,
          lineHeight: 1,
          padding: 0,
        }}
      >
        ×
      </button>

      {/* Grille responsive */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 32,
          width: "100%",
          maxWidth: 1200,
          marginTop: 48,
          justifyContent: "center",
          alignItems: "stretch"
        }}
      >
        {/* Description à gauche, étirée en hauteur */}
        <div style={{ flex: 2, minWidth: 320, maxWidth: 520, display: "flex" }}>
          <div style={{ ...macWindowStyle, width: "100%", minHeight: 520, height: "100%" }}>
            <div style={macControlsStyle}>
              <span style={dotStyle("#ff5f56")}></span>
              <span style={dotStyle("#ffbd2e")}></span>
              <span style={dotStyle("#27c93f")}></span>
            </div>
            <h2 style={{marginTop: 0, marginLeft: 0, marginBottom: 18, fontSize: "1.35rem", color: "#7abaff", letterSpacing: "0.5px"}}>Description du projet</h2>
            <p style={{ fontSize: "1.08rem", marginBottom: 18, marginTop: 0, lineHeight: 1.7 }}>
              <span style={{ color: "#b0d6ff", fontWeight: 600 }}>
                EasySave
              </span> est un logiciel de sauvegarde avancé développé dans un cadre pédagogique de génie logiciel.<br /><br />
              <span style={{ color: "#7abaff" }}>L’objectif :</span> concevoir un outil performant, évolutif et adapté aux besoins des professionnels.
            </p>
            <div style={{ fontWeight: 600, color: "#b0d6ff", marginTop: 18, marginBottom: 6, fontSize: "1.08rem" }}>
              La version 3.0 implémente des fonctionnalités clés :
            </div>
            <ul style={{marginTop: 0, marginBottom: 18, paddingLeft: 22, lineHeight: 1.7}}>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>sauvegardes en parallèle via threads</span>,</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>gestion de fichiers prioritaires</span>,</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>arrêt automatique</span> en cas de détection de logiciels métiers,</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>interface de contrôle déportée</span> (via sockets),</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>surveillance de la charge réseau</span>.</li>
            </ul>
            <p style={{ fontSize: "1.08rem", marginBottom: 18, marginTop: 0, lineHeight: 1.7 }}>
              Le projet a suivi une approche incrémentale avec gestion des versions et respect des bonnes pratiques de qualité logicielle.
            </p>
          </div>
        </div>
        {/* Deux fenêtres à droite, l'une au-dessus de l'autre */}
        <div style={{ flex: 1.2, minWidth: 280, display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ ...macWindowStyle, width: "100%" }}>
            <div style={macControlsStyle}>
              <span style={dotStyle("#ff5f56")}></span>
              <span style={dotStyle("#ffbd2e")}></span>
              <span style={dotStyle("#27c93f")}></span>
            </div>
            <h2 style={{marginTop: 0, marginLeft: 0, marginBottom: 18, fontSize: "1.35rem", color: "#7abaff", letterSpacing: "0.5px"}}>🛠️ Compétences acquises</h2>
            <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20, lineHeight: 1.7}}>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Programmation avancée en C# :</span> multithreading, sockets, DLL</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Génie logiciel :</span> gestion de versions, documentation, conception modulaire</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Gestion des ressources système :</span> charge réseau, priorisation, limitations de volume</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Sécurité & fiabilité :</span> chiffrement des données, arrêt sécurisé en cas de conflit</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Travail collaboratif :</span> développement en équipe, livrables incrémentaux</li>
            </ul>
          </div>
          <div style={{ ...macWindowStyle, width: "100%" }}>
            <div style={macControlsStyle}>
              <span style={dotStyle("#ff5f56")}></span>
              <span style={dotStyle("#ffbd2e")}></span>
              <span style={dotStyle("#27c93f")}></span>
            </div>
            <h2 style={{marginTop: 0, marginLeft: 0, marginBottom: 18, fontSize: "1.35rem", color: "#7abaff", letterSpacing: "0.5px"}}>Ressources</h2>
            <div style={{display: "flex", flexDirection: "column", gap: 12}}>
              <a
                href="/assets/Rapport_GL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#7abaff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: "1.08rem"
                }}
              >
                Afficher le rapport
              </a>
              <a
                href="https://github.com/AlbanCLV/EasySave"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#7abaff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: "1.08rem"
                }}
              >
                Voir le code sur GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}