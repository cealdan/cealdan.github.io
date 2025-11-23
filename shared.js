(function (global) {
    const baseTranslations = {
        fr: {
            subtitle: "Étudiant à Sorbonne Université, développeur indépendant et passionné de neurotechnologie.",
            warning: "⚠️ Ce site est en cours d'optimisation pour mobile. Certaines fonctionnalités s'affichent mieux sur ordinateur.",
            projects: "Projets",
            "project1-desc": "Contrôle informatique par clignement d'œil",
            "project1-date": "Octobre 2024 (terminé)",
            "project1-full": "Un projet expérimental utilisant un microcontrôleur et des électrodes pour intéragir avec une ordinateur via un clignement d'œil. Un premier aperçu des ICM.",
            "aletheia-desc": "Application de création de contenu par IA",
            "aletheia-date": "Printemps 2025 (suspendu)",
            "aletheia-full": "Une application mobile sociale de création de contenu par IA pour générer des histoires, inventer des mondes fictifs et créer des illustrations.",
            "aletheia-intro": "<p>Bienvenue sur Aletheia — un projet visant à explorer l'intersection de la créativité et de l'intelligence artificielle. Ce dépôt contient des fichiers Kotlin et XML sélectionnés qui représentent la fonctionnalité principale et l'expérience utilisateur de l'application. Veuillez noter que ce n'est pas le projet complet (certains fichiers ne pouvant être partagés), et il n'est pas destiné à être distribué publiquement pour le moment.</p><p>Aletheia est une application mobile conçue pour permettre aux utilisateurs de créer des histoires, d'inventer des mondes fictifs et de générer des illustrations visuelles pour eux avec l'aide de l'IA. Elle combine le potentiel imaginatif de la création narrative avec les capacités expressives des outils d'apprentissage automatique modernes, le tout dans une plateforme socialement interactive inspirée de la dynamique des réseaux sociaux.</p><p>Le projet est actuellement en développement (même si actuellement suspendu), et ces fichiers partagés sont destinés uniquement à fournir un aperçu de l'architecture de l'application et des fonctionnalités principales.</p><p>Si vous avez des questions, des commentaires ou souhaitez discuter d'une collaboration potentielle, n'hésitez pas à me contacter par email à <a href=\"mailto:cealdan.dev@gmail.com\">cealdan.dev@gmail.com</a>.</p><p>Merci pour votre intérêt et votre compréhension.</p><p>Ce projet est partagé à des fins de démonstration uniquement. Tous droits réservés. La réutilisation, la reproduction ou la redistribution de toute partie du code n'est pas autorisée sans autorisation explicite de l'auteur.</p>",
            "project2-desc": "Application de magie",
            "project2-date": "Juillet 2025 (maintenant en cours de publication)",
            "project2-full": "Une application pour magiciens vue comme un tour de magie digital.",
            "view-project": "Voir le projet →",
            "view-on-github": "Voir sur GitHub",
            "view-on-kaggle": "Voir sur Kaggle",
            "view-github": "Voir le projet sur GitHub",
            "video-error": "Votre navigateur ne supporte pas la lecture de vidéos.",
            "readme-intro": "Un site web simple où un bouton peut être déclenché par un clignement d'œil — sans les mains.",
            "readme-description": "Vous trouverez ici les fichiers HTML, CSS et JavaScript pour exécuter le site web localement, ainsi que le code C++ pour Arduino. Le code Arduino a été repris d'<a href=\"https://github.com/upsidedownlabs/BioAmp-EXG-Pill\" target=\"_blank\">un autre dépôt</a> créé par Upside Down Labs, la société qui a fabriqué la carte d'acquisition de signal que j'ai utilisée. D'un autre côté, les codes HTML, CSS et JavaScript ont été écrits par moi-même avec l'aide d'un ami pour le premier projet de NeuroTechSorbonne, un club étudiant de neurotechnologie à Sorbonne Université que nous avons fondé.",
            "requirements-title": "Prérequis :",
            "requirements-text": "Cela ne fonctionne que sur Google Chrome car il utilise l'API Web Serial. Il nécessite également trois électrodes, une carte Arduino Uno et une carte d'acquisition de signal. Consultez le <a href=\"https://github.com/upsidedownlabs/BioAmp-EXG-Pill\" target=\"_blank\">dépôt Upside Down Labs</a> pour la configuration matérielle.",
            "review-title": "Critique :",
            "review-text": "Le projet fonctionne bien mais est un peu trop sensible. De plus, c'est un projet éducatif et n'a pas d'application pratique réelle, car les clignements d'yeux se produisent fréquemment et nous ne voulons pas que le bouton soit déclenché tout le temps. Une façon de résoudre ce problème pourrait être d'utiliser l'apprentissage profond pour distinguer les clignements d'yeux délibérés des clignements inconscients.",
            "repo-structure": "Arborescence du projet",
            "test-btn": "Test",
            "midigen-desc": "Générateur de mélodies MIDI",
            "midigen-date": "Mars 2025 (terminé)",
            "midigen-full": "Un générateur de mélodies MIDI utilisant Tensorflow pour créer de la musique dans le style d'ABBA.",
            "midigen-intro": "<p>Bienvenue dans ma première tentative de construction d'un modèle de machine learning g\u00e9n\u00e9ratif.</p>",
            "midigen-description": "<p>En explorant des jeux de donn\u00e9es sur Kaggle, j&#39;ai trouv\u00e9 un dataset de fichiers MIDI correspondants à des musiques d'ABBA et je me suis dit que ce serait amusant de construire une machine \u00e0 musique, tout en restant plus simple \u00e0 manipuler que des fichiers audio purs. Ce n&#39;\u00e9tait pas si facile pour moi en tant que d\u00e9butant complet, mais je suis plutôt satisfait du r\u00e9sultat car cela ne sonne pas trop \u00ab\u00a0al\u00e9atoire\u00a0\u00bb. Je dirais que les outputs sont relativement coh\u00e9rents avec les prompts: le morceau disco est plut\u00f4t dynamique tandis que celui joyeux sonne effectivement heureux.</p><p>Pour finir, concernant la partie technique, ma courbe d&#39;apprentissage a l'air assez bonne puisqu&#39;elle ressemble \u00e0 une pente raide. Mais je dois avouer que l&#39;architecture du mod\u00e8le que j&#39;ai choisi reste assez myst\u00e9rieuse pour moi. Utiliser des mod\u00e8les existants est pratique, mais ça veut aussi dire ne pas comprendre exactement ce qu&#39;il se passe derrière. Je n&#39;ai pas choisi les composants de l&#39;architecture au hasard\u00a0 cependant: je me suis fi\u00e9 \u00e0 des sources sur Internet, ce qui n&#39;est pas totalement satisfaisant et me laisse avec le besoin de tout comprendre un jour.</p>",
            "midigen-results": "🎵 Résultats générés",
            "audio-error": "Votre navigateur ne supporte pas la lecture audio.",
            "agrandir": "Agrandir",
            "réduire": "Réduire",
            "read-only": "Lecture seule"
        },
        en: {
            subtitle: "Student at Sorbonne University, independent developer, and neurotechnology enthusiast.",
            warning: "⚠️ This website is being optimized for mobile. Some features may display better on desktop.",
            projects: "Projects",
            "project1-desc": "Eye blink computer control",
            "project1-date": "October 2024 (completed)",
            "project1-full": "An experimental project using a microcontroller and a muscle sensor to trigger an action via eye blink. A first glance at BCIs.",
            "aletheia-desc": "AI content creation app",
            "aletheia-date": "Spring 2025 (suspended)",
            "aletheia-full": "A mobile AI content creation & social application for generating stories, inventing fictional worlds, and creating illustrations.",
            "aletheia-intro": "<p>Welcome to Aletheia — a project aimed at exploring the intersection of creativity and artificial intelligence. This repository contains selected Kotlin and XML files that represent the core functionality and user experience of the application. Please note that this is not the full project (some files could not be shared), and it is not intended to be publicly distributed at this time.</p><p>Aletheia is a mobile application designed to empower users to craft stories, invent fictional worlds, and generate visual illustrations for them with the help of AI. It blends the imaginative potential of narrative creation with the expressive capabilities of modern machine learning tools, all within a socially interactive platform inspired by the dynamics of social media.</p><p>The project is currently in development (although currently suspended), and these shared files are intended solely to provide insight into the app's architecture and main features.</p><p>If you have any questions, feedback, or would like to discuss potential collaboration, please feel free to reach out via email at <a href=\"mailto:cealdan.dev@gmail.com\">cealdan.dev@gmail.com</a>.</p><p>Thank you for your interest and understanding.</p><p>This project is shared for demonstration purposes only. All rights are reserved. Reuse, reproduction, or redistribution of any part of the code is not permitted without explicit permission from the author.</p>",
            "project2-desc": "Magic app",
            "project2-date": "July 2025 (now in the process of publication)",
            "project2-full": "An application for magicians seen as a digital magic trick.",
            "view-project": "View project →",
            "view-on-github": "View on GitHub",
            "view-on-kaggle": "View on Kaggle",
            "view-github": "View project on GitHub",
            "video-error": "Your browser does not support video playback.",
            "readme-intro": "A simple website where a button can be triggered by an eye blink — hands-free.",
            "readme-description": "Here you can find the HTML, CSS, and JavaScript files to run the website locally, as well as the C++ code for Arduino. The Arduino code was taken from <a href=\"https://github.com/upsidedownlabs/BioAmp-EXG-Pill\" target=\"_blank\">another repository</a> created by Upside Down Labs, the company that built the board for signal acquisition that I used. On the other hand, the HTML, CSS, and JavaScript code were written by myself with the help of a friend for the first project of NeuroTechSorbonne, a neurotech student club at Sorbonne University which we founded.",
            "requirements-title": "Requirements:",
            "requirements-text": "It only works on Google Chrome since it uses the Web Serial API. It also requires three electrodes, an Arduino Uno board, and a board for signal acquisition. Refer to the <a href=\"https://github.com/upsidedownlabs/BioAmp-EXG-Pill\" target=\"_blank\">Upside Down Labs repository</a> for the hardware setup.",
            "review-title": "Review:",
            "review-text": "The project works well but is a little too sensitive. Also, it is an educational project and has no real practical application, as eye blinks happen frequently and we don't want the button to be triggered all the time. One way to address this could be to use deep learning to distinguish deliberate eye blinks from unconscious ones.",
            "repo-structure": "Project tree",
            "test-btn": "Test",
            "midigen-desc": "MIDI melody generator",
            "midigen-date": "March 2025 (completed)",
            "midigen-full": "A MIDI melody generator using Tensorflow to create ABBA-like songs.",
            "midigen-intro": "<p>Welcome to my first attempt at building a generative machine learning model.</p>",
            "midigen-description": "<p>As I wandered in the kaggle datasets, I found a midi dataset of ABBA songs and thought it would be fun to buil a music machine but also not too hard to play with midi files compared to pure audio files. It wasn't that easy for me as a complete beginner but I'm satisfied with the results as it doesn't sound too \"random\". I would say the outputs are relatively coherent with the prompts : the disco one is a bit dynamic while the cheerful one sounds happy to me.</p><p>Finally, for the technical part, the learning curve I got was pretty good as it looks like a steep slope, but I have to say the architecture of the model I chose remains mysterious to me. Using already existing models is handy but it also means not understanding exactly what is going on. I didn't choose the components of the architecture randomly though but trusted sources from the internet, which is not very satisfying and leave me with the need to, one day, understand it all.</p>",
            "midigen-results": "🎵 Generated results",
            "audio-error": "Your browser does not support audio playback.",
            "agrandir": "Expand",
            "réduire": "Collapse",
            "read-only": "Read only"
        }
    };

    const fallbackComponents = {
        "components/topbar.html": `
<header class="top-bar">
    <a href="index.html" class="home-button">
        <img src="images/photo_cv.JPG" alt="Accueil">
    </a>
    <button class="menu-button" id="menu-button" aria-label="Ouvrir le menu">
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>`.trim(),
        "components/sidebar.html": `
<div class="overlay" id="overlay"></div>
<nav class="sidebar" id="sidebar">
    <div class="controls-wrapper">
        <label class="theme-switch">
            <input type="checkbox" id="theme-toggle">
            <span class="slider"></span>
        </label>
        <div class="language-switcher">
            <button id="lang-fr" class="active" type="button">FR</button>
            <button id="lang-en" type="button">EN</button>
        </div>
    </div>
    <h2 data-lang="projects">Projets</h2>
    <a href="project1.html" class="sidebar-link">
        <h3>Blink Activated Alert Button</h3>
        <p data-lang="project1-desc">Contrôle par clignement d'œil</p>
    </a>
    <a href="projectmidigen.html" class="sidebar-link">
        <h3>MidiGen</h3>
        <p data-lang="midigen-desc">Générateur de mélodies MIDI</p>
    </a>
    <a href="projectaletheia.html" class="sidebar-link">
        <h3>Aletheia</h3>
        <p data-lang="aletheia-desc">Application de création de contenu par IA</p>
    </a>
    <a href="project1.html" class="sidebar-link">
        <h3>AutoXic</h3>
        <p data-lang="project2-desc">Application de magie</p>
    </a>
</nav>`.trim()
    };

    function mergeTranslations(defaults, overrides = {}) {
        const merged = JSON.parse(JSON.stringify(defaults));
        Object.keys(overrides).forEach((lang) => {
            merged[lang] = {
                ...(merged[lang] || {}),
                ...overrides[lang]
            };
        });
        return merged;
    }

    async function loadIncludes() {
        const includeNodes = document.querySelectorAll("[data-include]");
        const tasks = Array.from(includeNodes).map((node) => injectComponent(node));
        await Promise.all(tasks);
    }

    async function injectComponent(node) {
        const url = node.getAttribute("data-include");
        if (!url) return;
        try {
            const html = await fetchComponent(url);
            if (html) {
                node.outerHTML = html;
                return;
            }
        } catch (error) {
            console.warn(error.message || error);
        }
        const fallback = fallbackComponents[url];
        if (fallback) {
            node.outerHTML = fallback;
        } else {
            console.error(`Aucun fallback disponible pour ${url}`);
        }
    }

    async function fetchComponent(url) {
        if (window.location.protocol === "file:") {
            throw new Error(
                `Chargement via fetch impossible en mode file:// pour ${url}. Utilisation du fallback.`
            );
        }
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Impossible de charger ${url} (statut ${response.status})`);
        }
        return response.text();
    }

    function detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang && browserLang.startsWith("fr") ? "fr" : "en";
    }

    const SharedUI = {
        translations: baseTranslations,
        currentLang: "fr",
        async init(options = {}) {
            await loadIncludes();
            this.translations = mergeTranslations(baseTranslations, options.translations);
            this.cacheElements();
            this.setupThemeToggle();
            this.setupSidebarToggle();
            this.setupLanguageSwitcher();
            this.setupScrollBehavior();
            const initialLang = this.getInitialLanguage();
            this.changeLanguage(initialLang);
            this.onLanguageChange = options.onLanguageChange;
            if (typeof this.onLanguageChange === "function") {
                this.onLanguageChange(initialLang);
            }
            return initialLang;
        },
        setupScrollBehavior() {
            let lastScrollY = window.scrollY;
            const topBar = document.querySelector('.top-bar');
            
            if (!topBar) return;

            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                
                // Protection : Ne pas cacher la barre si le menu latéral est ouvert
                // (sinon l'utilisateur ne peut plus le fermer)
                const sidebar = document.querySelector('.sidebar');
                if (sidebar && sidebar.classList.contains('active')) {
                    topBar.classList.remove('hidden');
                    return;
                }

                // Seuil de 60px pour éviter de cacher la barre tout en haut de page
                if (currentScrollY <= 60) {
                    topBar.classList.remove('hidden');
                    lastScrollY = currentScrollY;
                    return;
                }

                // Logique principale :
                // Si on scrolle vers le bas ET qu'on a dépassé le haut de page -> Cacher
                // Si on scrolle vers le haut -> Montrer
                if (currentScrollY > lastScrollY) {
                    topBar.classList.add('hidden');
                } else {
                    topBar.classList.remove('hidden');
                }

                lastScrollY = currentScrollY;
            });
        },
        cacheElements() {
            this.themeToggle = document.getElementById("theme-toggle");
            this.menuButton = document.getElementById("menu-button");
            this.sidebar = document.getElementById("sidebar");
            this.overlay = document.getElementById("overlay");
            this.langFr = document.getElementById("lang-fr");
            this.langEn = document.getElementById("lang-en");
        },
        setupThemeToggle() {
            if (!this.themeToggle) return;
            const savedTheme = window.localStorage ? localStorage.getItem("theme") : null;
            if (savedTheme === "light") {
                document.body.classList.add("light");
                this.themeToggle.checked = true;
            }
            this.themeToggle.addEventListener("change", () => {
                if (this.themeToggle.checked) {
                    document.body.classList.add("light");
                    if (window.localStorage) localStorage.setItem("theme", "light");
                } else {
                    document.body.classList.remove("light");
                    if (window.localStorage) localStorage.setItem("theme", "dark");
                }
            });
        },
        setupSidebarToggle() {
            if (!this.menuButton || !this.sidebar || !this.overlay) return;
            const toggleSidebar = () => {
                this.menuButton.classList.toggle("active");
                this.sidebar.classList.toggle("active");
                this.overlay.classList.toggle("active");
            };
            this.menuButton.addEventListener("click", toggleSidebar);
            this.overlay.addEventListener("click", toggleSidebar);
            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape" && this.sidebar.classList.contains("active")) {
                    toggleSidebar();
                }
            });
        },
        setupLanguageSwitcher() {
            if (!this.langFr || !this.langEn) return;
            this.langFr.addEventListener("click", () => this.changeLanguage("fr"));
            this.langEn.addEventListener("click", () => this.changeLanguage("en"));
        },
        getInitialLanguage() {
            const savedLang = window.localStorage ? localStorage.getItem("language") : null;
            return savedLang || detectLanguage();
        },
        changeLanguage(lang) {
            if (!this.translations[lang]) return;
            this.currentLang = lang;
            if (window.localStorage) localStorage.setItem("language", lang);
            document.documentElement.lang = lang;
            if (this.langFr && this.langEn) {
                this.langFr.classList.toggle("active", lang === "fr");
                this.langEn.classList.toggle("active", lang === "en");
            }
            this.applyTranslations(lang);
            if (typeof this.onLanguageChange === "function") {
                this.onLanguageChange(lang);
            }
        },
        applyTranslations(lang) {
            document.querySelectorAll("[data-lang]").forEach((element) => {
                const key = element.getAttribute("data-lang");
                const value = this.translations[lang] && this.translations[lang][key];
                if (value !== undefined) {
                    element.innerHTML = value;
                }
            });
        }
    };

    global.SharedUI = SharedUI

    // Fonction pour générer l'arborescence GitHub
    function generateGitHubTree(config) {
        const { repoName, repoUrl, tree, codeContents = {} } = config;
        
        const folderIcon = `<svg class="file-icon" viewBox="0 0 16 16" fill="#54a3ff">
            <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"/>
        </svg>`;
        
        const fileIcon = `<svg class="file-icon" viewBox="0 0 16 16" fill="#858585">
            <path d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"/>
        </svg>`;
        
        const githubIcon = `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>`;
        
        function renderItem(item, level = 0, parentPath = '') {
            // Un dossier est identifié par : nom se terminant par /, ou présence de la propriété children (même vide)
            const isFolder = item.name.endsWith('/') || item.hasOwnProperty('children');
            const isNonCode = item.nonCode === true;
            const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name;
            const folderPath = isFolder ? currentPath.replace(/\/$/, '') : '';
            const hasChildren = isFolder && item.children && item.children.length > 0;
            const classes = `file-item ${isFolder ? 'folder' : 'file'} ${isNonCode ? 'non-code' : ''} ${hasChildren ? 'has-children' : ''}`;
            const dataPath = !isFolder ? `data-file-path="${currentPath}"` : '';
            const dataFolderPath = isFolder ? `data-folder-path="${folderPath}"` : '';
            const dataHasChildren = isFolder ? `data-has-children="${hasChildren ? 'true' : 'false'}"` : '';
            
            let html = `<div class="${classes}" ${dataPath} ${dataFolderPath} ${dataHasChildren}>${isFolder ? folderIcon : fileIcon}<span class="file-name">${item.name}</span></div>`;
            
            if (hasChildren) {
                html += `<div class="indent folder-children">`;
                item.children.forEach(child => {
                    html += renderItem(child, level + 1, currentPath);
                });
                html += `</div>`;
            } else if (isFolder) {
                // Dossier vide - on ajoute un conteneur pour les enfants qui seront chargés dynamiquement
                html += `<div class="indent folder-children" style="display: none;"></div>`;
            }
            
            return html;
        }
        
        let treeHtml = `<div class="file-item folder" data-folder-path="" data-has-children="${tree.length > 0 ? 'true' : 'false'}">${folderIcon}<span class="file-name">${repoName}/</span></div><div class="indent folder-children">`;
        tree.forEach(item => {
            treeHtml += renderItem(item, 0);
        });
        treeHtml += `</div>`;
        
        let codeSectionsHtml = '';
        Object.keys(codeContents).forEach(codeId => {
            const code = codeContents[codeId];
            codeSectionsHtml += `<div id="code-${codeId}" class="code-content"><pre>${escapeHtml(code)}</pre></div>`;
        });
        
        return {
            html: `
                <div class="github-tree-container">
                    <div class="github-tree-header">
                        ${githubIcon}
                        <h3 data-lang="repo-structure">Arborescence du projet</h3>
                    </div>
                    <div class="file-tree">${treeHtml}</div>
                    <a href="${repoUrl}" target="_blank" class="github-link">
                        ${githubIcon}
                        <span data-lang="view-on-github">Voir sur GitHub</span>
                    </a>
                    ${codeSectionsHtml}
                </div>
            `,
            repoUrl: repoUrl,
            repoName: repoName
        };
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    async function fetchGitHubFileContent(repoUrl, filePath) {
        // Convertir l'URL GitHub en URL raw
        // https://github.com/owner/repo -> https://raw.githubusercontent.com/owner/repo/master
        const rawUrl = repoUrl.replace('github.com', 'raw.githubusercontent.com') + '/master/' + filePath;
        try {
            const response = await fetch(rawUrl);
            if (!response.ok) {
                throw new Error(`Impossible de charger ${filePath}`);
            }
            return await response.text();
        } catch (error) {
            console.error(`Erreur lors du chargement de ${filePath}:`, error);
            return null;
        }
    }
    
    async function fetchGitHubDirectoryContent(repoUrl, dirPath) {
        // Convertir l'URL GitHub en URL API
        // https://github.com/owner/repo -> https://api.github.com/repos/owner/repo/contents
        const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) {
            console.error('URL GitHub invalide');
            return null;
        }
        const [, owner, repo] = match;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${dirPath}`;
        
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Impossible de charger le dossier ${dirPath}`);
            }
            const contents = await response.json();
            return Array.isArray(contents) ? contents : null;
        } catch (error) {
            console.error(`Erreur lors du chargement du dossier ${dirPath}:`, error);
            return null;
        }
    }
    
    function renderDirectoryItem(item, parentPath = '', folderIcon, fileIcon) {
        const isFolder = item.type === 'dir';
        const fileName = item.name;
        const currentPath = parentPath ? `${parentPath}/${fileName}` : fileName;
        const classes = `file-item ${isFolder ? 'folder' : 'file'}`;
        const dataPath = !isFolder ? `data-file-path="${currentPath}"` : '';
        const dataFolderPath = isFolder ? `data-folder-path="${currentPath}"` : '';
        const dataHasChildren = isFolder ? `data-has-children="false"` : '';
        
        let html = `<div class="${classes}" ${dataPath} ${dataFolderPath} ${dataHasChildren}>${isFolder ? folderIcon : fileIcon}<span class="file-name">${fileName}${isFolder ? '/' : ''}</span></div>`;
        
        if (isFolder) {
            html += `<div class="indent folder-children" style="display: none;"></div>`;
        }
        
        return html;
    }
    
    function setupFileTreeClickHandlers(repoUrl, repoName) {
        const fileTree = document.querySelector('.file-tree');
        if (!fileTree) return;
        
        // Utiliser la délégation d'événements pour éviter les listeners multiples
        // Supprimer les anciens listeners si ils existent
        if (fileTree._folderClickHandler) {
            fileTree.removeEventListener('click', fileTree._folderClickHandler);
        }
        if (fileTree._fileClickHandler) {
            fileTree.removeEventListener('click', fileTree._fileClickHandler);
        }
        
        // Gestion des clics sur les dossiers (délégation d'événements)
        fileTree._folderClickHandler = async function(e) {
            const folderItem = e.target.closest('.file-item.folder');
            if (!folderItem) return;
            
            e.stopPropagation();
            
            const folderPath = folderItem.getAttribute('data-folder-path');
            if (!folderPath) return;
            
            const childrenContainer = folderItem.nextElementSibling;
            if (!childrenContainer || !childrenContainer.classList.contains('folder-children')) return;
            
            const isOpen = childrenContainer.style.display !== 'none';
            
            if (isOpen) {
                // Fermer le dossier
                childrenContainer.style.display = 'none';
                folderItem.classList.remove('open');
            } else {
                // Ouvrir le dossier
                const hasChildren = folderItem.getAttribute('data-has-children') === 'true';
                
                if (!hasChildren && childrenContainer.children.length === 0) {
                    // Le dossier est vide, charger son contenu depuis GitHub
                    const fileNameEl = folderItem.querySelector('.file-name');
                    const originalText = fileNameEl.textContent.replace(/\/$/, '');
                    fileNameEl.textContent = originalText + '/ (chargement...)';
                    
                    // Pour le dossier racine, utiliser un chemin vide
                    const dirPath = folderPath === '' ? '' : folderPath;
                    const contents = await fetchGitHubDirectoryContent(repoUrl, dirPath);
                    
                    if (contents && contents.length > 0) {
                        // Trier : dossiers d'abord, puis fichiers
                        contents.sort((a, b) => {
                            if (a.type === 'dir' && b.type !== 'dir') return -1;
                            if (a.type !== 'dir' && b.type === 'dir') return 1;
                            return a.name.localeCompare(b.name);
                        });
                        
                        // Définir les icônes
                        const folderIconSvg = `<svg class="file-icon" viewBox="0 0 16 16" fill="#54a3ff">
                            <path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"/>
                        </svg>`;
                        
                        const fileIconSvg = `<svg class="file-icon" viewBox="0 0 16 16" fill="#858585">
                            <path d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"/>
                        </svg>`;
                        
                        let childrenHtml = '';
                        contents.forEach(item => {
                            // Utiliser le bon chemin parent (vide pour la racine, sinon folderPath)
                            const parentPath = dirPath === '' ? '' : folderPath;
                            childrenHtml += renderDirectoryItem(item, parentPath, folderIconSvg, fileIconSvg);
                        });
                        
                        childrenContainer.innerHTML = childrenHtml;
                        folderItem.setAttribute('data-has-children', 'true');
                        folderItem.classList.add('has-children');
                    } else {
                        childrenContainer.innerHTML = '<div style="padding: 0.5rem; opacity: 0.6; font-style: italic;">Dossier vide</div>';
                    }
                    
                    fileNameEl.textContent = originalText + '/';
                }
                
                childrenContainer.style.display = 'block';
                folderItem.classList.add('open');
            }
        };
        
        // Gestion des clics sur les fichiers (délégation d'événements)
        fileTree._fileClickHandler = async function(e) {
            const fileItem = e.target.closest('.file-item.file[data-file-path]');
            if (!fileItem) return;
            
            e.stopPropagation();
            
            // Récupérer le chemin du fichier depuis l'attribut data
            const filePath = fileItem.getAttribute('data-file-path');
            if (!filePath) return;
            
            // Vérifier si le contenu est déjà chargé
            const codeId = filePath.replace(/[^a-zA-Z0-9]/g, '-');
            let codeSection = document.getElementById('code-' + codeId);
            
            if (!codeSection) {
                // Créer la section de code
                codeSection = document.createElement('div');
                codeSection.id = 'code-' + codeId;
                codeSection.className = 'code-content';
                codeSection.innerHTML = '<pre>Chargement...</pre>';
                
                // Trouver le conteneur github-tree-container et ajouter la section
                const container = document.querySelector('.github-tree-container');
                if (container) {
                    container.appendChild(codeSection);
                }
                
                // Charger le contenu du fichier
                const content = await fetchGitHubFileContent(repoUrl, filePath);
                if (content !== null) {
                    codeSection.innerHTML = `<pre>${escapeHtml(content)}</pre>`;
                } else {
                    codeSection.innerHTML = '<pre>Erreur lors du chargement du fichier.</pre>';
                }
            }
            
            // Fermer toutes les sections
            document.querySelectorAll('.code-content').forEach(section => {
                section.classList.remove('active');
            });
            
            // Ouvrir la section cliquée
            codeSection.classList.add('active');
            codeSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        };
        
        fileTree.addEventListener('click', fileTree._folderClickHandler);
        fileTree.addEventListener('click', fileTree._fileClickHandler);
    }
    
    global.SharedUI = SharedUI;
    global.generateGitHubTree = generateGitHubTree;
    global.setupFileTreeClickHandlers = setupFileTreeClickHandlers;
})(window);

function initIndexPage() {
    const canvas = document.getElementById('background-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true }); // Option alpha peut aider

    let width, height;
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // --- OPTIMISATION : Réduction du nombre de particules ---
    const particles = [];
    // 80 sur desktop, 40 sur mobile (au lieu de 120/60)
    const numParticles = window.innerWidth < 768 ? 40 : 80; 
    const connectionDistance = 140; // Légèrement réduit pour moins de lignes
    const mouse = { x: null, y: null, radius: 150 };

    window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
    window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.6; // Vitesse très légèrement réduite
            this.vy = (Math.random() - 0.5) * 0.6;
            this.size = Math.random() * 2 + 1;
            this.baseSize = this.size;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy); // Note: distSq est plus rapide, mais on garde sqrt pour la logique de force
                
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;
                    this.size = this.baseSize + force * 2;
                } else { this.size = this.baseSize; }
            }

            this.x += this.vx; 
            this.y += this.vy;
            this.vx *= 0.99; 
            this.vy *= 0.99;

            // Random mouvement aléatoire très léger
            this.vx += (Math.random() - 0.5) * 0.05;
            this.vy += (Math.random() - 0.5) * 0.05;

            if (this.x < 0) this.x = width;
            else if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            else if (this.y > height) this.y = 0;
        }

        draw() {
            // --- OPTIMISATION MAJEURE : Pas de Gradient ---
            // Dessiner un gradient à chaque frame est TRES lent.
            // On dessine simplement un rond avec une opacité
            const color = '77, 166, 255';
            
            // Le coeur de la particule
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${this.opacity})`;
            ctx.fill();
            
            // L'effet "Glow" (simplifié : un cercle plus grand, très transparent)
            // C'est 10x plus rapide que createRadialGradient
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color}, ${this.opacity * 0.2})`; // Opacité faible pour simuler le flou
            ctx.fill();
        }
    }

    for (let i = 0; i < numParticles; i++) particles.push(new Particle());

    function connectParticles() {
        const color = '77, 166, 255';
        ctx.lineWidth = 1;
        
        for (let i = 0; i < particles.length; i++) {
            // On ne boucle que sur les particules suivantes pour éviter doublons
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                // Astuce perf: comparer les carrés évite Math.sqrt si distance trop grande
                const distSq = dx * dx + dy * dy;
                
                if (distSq < connectionDistance * connectionDistance) {
                    const dist = Math.sqrt(distSq);
                    const opacity = (1 - dist / connectionDistance) * 0.15;
                    
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(${color}, ${opacity})`;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    const orbs = [];
    const numOrbs = 4; // Réduit de 5 à 4

    class Orb {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 150 + 100; // Légèrement plus petits
            this.vx = (Math.random() - 0.5) * 0.2;
            this.vy = (Math.random() - 0.5) * 0.2;
            this.hue = Math.random() * 60 + 200;
        }
        update() {
            this.x += this.vx; this.y += this.vy;
            if (this.x < -this.size) this.x = width + this.size;
            if (this.x > width + this.size) this.x = -this.size;
            if (this.y < -this.size) this.y = height + this.size;
            if (this.y > height + this.size) this.y = -this.size;
        }
        draw() {
            const isLight = document.body.classList.contains('light');
            const opacity = isLight ? 0.03 : 0.08;
            
            // Les gradients des orbes sont moins nombreux (4), on peut les garder
            // mais on s'assure de ne pas les rendre trop grands
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, `hsla(${this.hue}, 80%, 60%, ${opacity})`);
            gradient.addColorStop(1, 'transparent');
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    for (let i = 0; i < numOrbs; i++) orbs.push(new Orb());

    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Dessiner les orbes (fond)
        for(let i=0; i<orbs.length; i++) { orbs[i].update(); orbs[i].draw(); }
        
        // Dessiner particules
        for(let i=0; i<particles.length; i++) { particles[i].update(); particles[i].draw(); }
        
        connectParticles();
        requestAnimationFrame(animate);
    }
    animate();
}



