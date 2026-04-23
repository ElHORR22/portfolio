# Haroun Dorbez — Portfolio

> Portfolio personnel · Design éditorial noir & blanc · HTML/CSS/JS pur

**Live** → [elhorr22.github.io/portfolio/](https://elhorr22.github.io/portfolio/)

---

## Aperçu

Portfolio single-page conçu et développé sans framework, sans dépendance externe. Esthétique éditoriale inspirée des magazines de luxe : typographie serif, palette strictement noir et blanc, animations CSS natives.

## Stack

| Couche | Choix |
|--------|-------|
| Markup | HTML5 sémantique |
| Style | CSS3 — variables, grid, animations |
| Script | JavaScript vanilla — pas de framework |
| Fonts | Cormorant Garamond · DM Sans (Google Fonts) |

## Fonctionnalités

- **Curseur personnalisé** — point + anneau magnétique avec lag fluide
- **Scroll reveal** — `IntersectionObserver`, stagger delay
- **Hover inversé** — projets et compétences en inversion noir/blanc
- **Barres de langues animées** — déclenchées à l'entrée dans le viewport
- **Navigation active** — lien courant mis en évidence au scroll
- **Grain overlay** — texture subtile en `position: fixed`
- **Responsive** — mobile-first dès 768px

## Structure

```
portfolio/
├── index.html          # Tout le code (HTML + CSS + JS inline)
└── README.md
```

> Choix délibéré : fichier unique, zéro build tool, déploiement instantané.

## Sections

```
Hero → Profil → Compétences → Projets → Expérience → Formation → Contact
```

## Déploiement

### GitHub Pages

```bash
# 1. Push sur la branche main
git add .
git commit -m "init: portfolio"
git push origin main

# 2. Settings → Pages → Source : main / root
# 3. URL générée : https://ElHORR22.github.io/portfolio
```

### Local

```bash
# Ouvrir directement dans le navigateur
open index.html

# Ou via serveur local
npx serve .
python3 -m http.server 8000
```

## Personnalisation

| Ligne | Variable | Valeur actuelle |
|-------|----------|-----------------|
| Contact | Email | `dorbezaaron@gmail.com` |
| Contact | Téléphone | `+216 25 604 404` |
| Contact | LinkedIn | `linkedin.com/in/haroun-dorbez` |
| Contact | GitHub | `github.com/ElHORR22` |
| Hero | Live URL | https://elhorr22.github.io/portfolio/ |

---

## Auteur

**Haroun Dorbez**
Développeur Full-Stack · Analyste Fonctionnel · Consultant IT

[LinkedIn](https://linkedin.com/in/haroun-dorbez) · [GitHub](https://github.com/ElHORR22) · dorbezaaron@gmail.com

---

*Conçu et développé en autonomie complète — comme tout le reste.*
