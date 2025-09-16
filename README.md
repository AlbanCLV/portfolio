# Portfolio

Ce projet est un portfolio personnel construit avec Next.js.

Déploiement sur GitHub Pages
----------------------------

1. Générer un site statique :

	```bash
	npm run export
	```

	Le contenu exporté se trouvera dans le dossier `out/`.

2. Pousser `out/` sur la branche `gh-pages` (ou configurer GitHub Pages pour servir la branche `gh-pages`).

	Exemple rapide avec `gh-pages` :

	```bash
	npm install --save-dev gh-pages
	npx gh-pages -d out
	```

Remarque : `next.config.js` est configuré pour servir le site sous `/portfolio` (nom du repo). Si votre repo s'appelle autrement, adaptez `next.config.js`.
