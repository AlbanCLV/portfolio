import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function Project3() {
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
            Recherche Opérationnelle
            
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
                Ce projet consiste à modéliser et résoudre un problème de tournée (proche du voyageur de commerce)
              </span> intégrant des contraintes réalistes telles que :
            </p>
            <ul style={{marginTop: 0, marginBottom: 18, paddingLeft: 22, lineHeight: 1.7}}>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>des routes en travaux</span> (inutilisables),</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>la minimisation des coûts de déplacement</span>,</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>la génération d’instances aléatoires</span> pour tester la robustesse des solutions.</li>
            </ul>
            <p style={{ fontSize: "1.08rem", marginBottom: 18, marginTop: 0, lineHeight: 1.7 }}>
              Les algorithmes développés s’appuient sur des structures de graphes (<span style={{ color: "#7abaff" }}>matrices d’adjacence, arbres couvrants</span>) et sur des méthodes de visualisation et d’analyse pour évaluer les parcours optimaux.
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
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Mathématiques & optimisation :</span> graphes, arbre couvrant minimal, heuristiques d’optimisation, théorie d’Euler</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Programmation avancée en Python :</span></li>
              <ul style={{marginTop: 0, marginBottom: 0, paddingLeft: 20}}>
                <li>NetworkX (manipulation de graphes)</li>
                <li>NumPy (gestion de matrices)</li>
                <li>Matplotlib (visualisation des résultats)</li>
              </ul>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Modélisation & simulation :</span> génération d’instances réalistes, évaluation de la complexité des algorithmes</li>
              <li><span style={{ color: "#7abaff", fontWeight: 600 }}>Travail en équipe :</span> répartition des tâches, mise en commun des résultats, rédaction scientifique</li>
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
                href={require('../../utils/assetPath').default('/assets/Rapport_RO.ipynb')}
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
                href="https://github.com/AlbanCLV/Recherche-Operationnelle"
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
              <a
                href="https://www.canva.com/design/DAGlbrlfgjk/gRJ-Ka1L6_3mdcd3t-Fdow/edit?utm_content=DAGlbrlfgjk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#7abaff",
                  textDecoration: "underline",
                  fontWeight: 600,
                  fontSize: "1.08rem"
                }}
              >
                Voir la présentation Canva
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}