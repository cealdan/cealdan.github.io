(function (global) {
    const baseTranslations = {
        fr: {
            subtitle: "Étudiant à Sorbonne Université, développeur indépendant et passionné de neurotechnologie.",
            warning: "⚠️ Ce site est en cours d'optimisation pour mobile. Certaines fonctionnalités s'affichent mieux sur ordinateur.",
            projects: "Projets",
            "project1-desc": "Contrôle par clignement d'œil",
            "project2-desc": "Application de magie",
            "view-project": "Voir le projet →",
            "view-on-github": "Voir sur GitHub",
            "video-error": "Votre navigateur ne supporte pas la lecture de vidéos."
        },
        en: {
            subtitle: "Student at Sorbonne University, independent developer, and neurotechnology enthusiast.",
            warning: "⚠️ This website is being optimized for mobile. Some features may display better on desktop.",
            projects: "Projects",
            "project1-desc": "Eye blink control",
            "project2-desc": "Magic app",
            "view-project": "View project →",
            "view-on-github": "View on GitHub",
            "video-error": "Your browser does not support video playback."
        }
    };

    const fallbackComponents = {
        "components/topbar.html": `
<header class="top-bar">
    <a href="index.html" class="home-button">
        <img src="photo_cv.JPG" alt="Accueil">
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
            const initialLang = this.getInitialLanguage();
            this.changeLanguage(initialLang);
            this.onLanguageChange = options.onLanguageChange;
            if (typeof this.onLanguageChange === "function") {
                this.onLanguageChange(initialLang);
            }
            return initialLang;
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

    global.SharedUI = SharedUI;
})(window);

