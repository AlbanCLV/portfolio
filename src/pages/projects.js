import React from 'react';
import Link from 'next/link';
import styles from './projects.module.scss';

const projects = [
	{
		id: 1,
		title: 'Portfolio Web',
		image: '/assets/images/portfolio-project.png',
		description:
			'Site personnel développé avec Next.js, animations React, et déploiement CI/CD sur GitHub Actions.',
	},
	{
		id: 2,
		title: 'Dashboard Sécurité',
		image: '/assets/images/security-dashboard.png',
		description:
			'Application de suivi des vulnérabilités et alertes SIEM, interface React, backend Node.js.',
	},
	{
		id: 3,
		title: 'Outil de Supervision Réseau',
		image: '/assets/images/network-tool.png',
		description:
			'Outil Python pour la supervision de réseaux, génération de rapports et alertes automatisées.',
	},
];

// Projects page
export default function ProjectsPage() {
	return (
		<section className={styles.projectsSection}>
			<h1 className={styles.title}>Projets</h1>
			<div className={styles.catalogue}>
				{projects.map((project) => (
					<div className={styles.projectCard} key={project.id}>
						<img
							src={project.image}
							alt={project.title}
							className={styles.projectImage}
						/>
						<div className={styles.projectContent}>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<Link
								href={`/projects/${project.id}`}
								className={styles.projectLink}
							>
								Détails du projet
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
