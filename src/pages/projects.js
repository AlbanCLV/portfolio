import React from 'react';
import Link from 'next/link';
import styles from './projects.module.scss';

const projects = [
	{
		id: 1,
		title: 'SI - Sécurité et Administration',
		image: require('../utils/assetPath').default('/assets/images/SI.jpeg'),
		description:
			'Mise en place d\' une architecture sécurisée pour une PME, incluant firewall, VPN, et politiques de sécurité.',
	},
	{
		id: 2,
		title: 'Génie Logiciel',
		image: require('../utils/assetPath').default('/assets/images/GL.jpg'),
		description:
			'Développement d\' une application de sauvegarde de fichiers en C# avec interface WPF et gestion des versions.',
	},
	{
		id: 3,
		title: 'Recherche Opérationnelle',
		image: require('../utils/assetPath').default('/assets/images/RO.jpg'),
		description:
			'Utilisation de la programmation linéaire pour optimiser des problèmes logistiques, implémentée en Python avec PuLP.',
	},
	{
		id: 4,
		title: 'Développement Web Avancé',
		image: require('../utils/assetPath').default('/assets/images/DWA.jpg'),
		description:
			'Création d\' une application web de type Twitter avec Next.js, incluant authentification, gestion des utilisateurs, et API REST.',
	},
];

// Projects page
export default function ProjectsPage() {
	return (
		<section className={styles.projectsSection}>
			<h1 className={styles.title}>Projets</h1>
			<div className={styles.catalogue}>
				{projects.map((project) => (
					<Link
						href={`/projects/${project.id}`}
						className={styles.projectCard}
						key={project.id}
						style={{ textDecoration: 'none', color: 'inherit' }}
					>
						<img
							src={project.image}
							alt={project.title}
							className={styles.projectImage}
						/>
						<div className={styles.projectContent}>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<span className={styles.projectLink}>
								Détails du projet
							</span>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
