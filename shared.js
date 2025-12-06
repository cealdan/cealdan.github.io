(function (global) {
    const baseTranslations = {
        fr: {
            subtitle: "Étudiant à Sorbonne Université, développeur indépendant et passionné de neurotechnologie.",
            warning: "⚠️ Ce site est en cours d'optimisation pour mobile. Certaines fonctionnalités s'affichent mieux sur ordinateur.",
            projects: "Projets",
            "project1-desc": "Contrôle informatique par clignement d'œil",
            "project1-date": "Octobre 2024 (terminé)",
            "project1-full": "Un projet expérimental utilisant un microcontrôleur et des électrodes pour intéragir avec une ordinateur via un clignement d'œil. Un premier aperçu des ICM.",
            "aletheia-desc": "Interface cerveau-machine DIY avec android",
            "aletheia-date": "Novembre 2025-aujourd'hui",
            "aletheia-full": "Une interface cerveau-machine complète faite maison des électrodes jusqu'à l'application android. Objectifs : visualisation des données selon les fréquences, détection de P300.",
            "aletheia-intro": "<p>Bienvenue sur la page de mon premier projet complet d'interface cerveau-machine. Le but de ce projet est de construire moi-même une BCI de A à Z, depuis les électrodes jusqu'à l’application Android connectée au hardware.</p><p>Le système repose sur des électrodes sèches Ag/AgCl provenant du casque OpenBCI imprimé en 3D (actuellement le Mark IV). Ce montage évoluera bientôt, car je prévois d’imprimer mon propre boîtier afin d’y intégrer entièrement mon hardware personnalisé.</p><p>Le pipeline matériel suit une chaîne simple et entièrement maîtrisée :<br>électrodes → module d’acquisition JNEEG (ADS1299) → micro-contrôleur ESP32 → transmission BLE → application Android.</p><p>Je programme l’ESP32 moi-même pour effectuer un premier traitement des signaux en temps réel. L’application Android réalise ensuite une seconde étape d’analyse, notamment l’affichage des rythmes cérébraux (alpha, bêta, gamma, etc.). Une fois cette base solide, j’ajouterai une expérience de P300 avec un clavier visuel. L’objectif final est d’améliorer un P300 speller classique grâce à un système d’eye-tracking superposé — une étape prévue lorsque toute l’architecture de base sera parfaitement stable.</p><p><strong>Compétences logicielles mobilisées</strong> :<br>C++ (programmation bas niveau), Python (traitement du signal, machine learning), Kotlin (développement Android).</p><p><strong>Compétences matérielles</strong> :<br>Électronique analogique/numérique, manipulation de micro-contrôleurs, usage et conception d’électrodes, intégration des composants et câblage.</p>",
            "aletheia-hardware-desc": "Premiers tests avec le casque OpenBCI Mark IV imprimé en 3D (seulement le casque et les électrodes) et un Jetson Nano Orin accompagné du JNEEG Hat.",
            "aletheia-app-desc": "Interface de l'application Android : Écran de chargement, Page d'accueil, Page de profil et Paramètres.",
            "aletheia-wiring-desc": "Premier schéma rudimentaire du câblage entre le JNEEG Hat et l’ESP32.",
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
            "read-only": "Lecture seule",
            "neurotech-club": "Mon club neurotech"
        },
        en: {
            subtitle: "Student at Sorbonne University, independent developer, and neurotechnology enthusiast.",
            warning: "⚠️ This website is being optimized for mobile. Some features may display better on desktop.",
            projects: "Projects",
            "project1-desc": "Eye blink computer control",
            "project1-date": "October 2024 (completed)",
            "project1-full": "An experimental project using a microcontroller and a muscle sensor to trigger an action via eye blink. A first glance at BCIs.",
            "aletheia-desc": "DIY BCI with Android",
            "aletheia-date": "November 2025-today",
            "aletheia-full": "A fully homemade brain–computer interface, from the electrodes to the Android application. Goals: frequency-based data visualization and P300 detection.",
            "aletheia-intro": "<p>Welcome to the presentation page of my first fully custom brain-computer interface project. The goal is to build a complete BCI system from scratch, from the electrodes all the way to the Android application connected to the hardware.</p><p>The system currently uses dry Ag/AgCl electrodes from the 3D-printed OpenBCI headset (Mark IV). This setup will evolve soon, as I plan to design and print my own enclosure to house fully customized hardware.</p><p>The hardware pipeline follows a clear and fully self-built chain:<br>electrodes → JNEEG acquisition board (ADS1299) → ESP32 microcontroller → BLE transmission → Android application.</p><p>I program the ESP32 to perform an initial real-time preprocessing of the EEG signals. The Android app then applies a second processing stage, including live visualization of brain rhythms (alpha, beta, gamma, etc.). Once this foundation is in place, I will implement a P300 experiment with a visual speller. The long-term goal is to enhance a traditional P300 speller by adding an eye-tracking layer — a feature planned once the core system is stable.</p><p><strong>Software skills involved</strong>:<br>C++ (low-level programming), Python (signal processing and machine learning), Kotlin (Android development).</p><p><strong>Hardware skills</strong>:<br>Analog/digital electronics, microcontroller programming, electrode design and handling, integration and wiring of components.</p>",
            "aletheia-hardware-desc": "First tests with the 3D-printed openBCI Mark IV (only the headset and the electrodes) and a jetson nano orin + jneeg hat.",
            "aletheia-app-desc": "Android App Interface: Loading Screen, Home Page, Profile Page and Settings.",
            "aletheia-wiring-desc": "First rudimentary schematic for the wiring between the JNEEG hat and the esp32",
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
            "read-only": "Read only",
            "neurotech-club": "My neurotech club"
        },
        ja: {
            subtitle: "ソルボンヌ大学の学生、個人開発者、ニューロテクノロジー愛好家。",
            warning: "⚠️ このサイトはモバイル向けに最適化中です。一部の機能はPCでの表示が推奨されます。",
            projects: "プロジェクト",
            "project1-desc": "瞬きによるコンピュータ制御",
            "project1-date": "2024年10月（完了）",
            "project1-full": "マイクロコントローラーと筋電位センサーを使用し、瞬きでアクションをトリガーする実験的プロジェクト。BCI（ブレイン・コンピュータ・インターフェース）の基礎的アプローチ。",
            "aletheia-desc": "Androidを使用したDIY BCI",
            "aletheia-date": "2025年11月 - 現在",
            "aletheia-full": "電極からAndroidアプリまで、完全に自作されたブレイン・コンピュータ・インターフェース。目標：周波数に基づくデータ視覚化とP300検出。",
            "aletheia-intro": "<p>私の最初の完全自作BCIプロジェクトのページへようこそ。このプロジェクトの目的は、電極からハードウェアに接続されたAndroidアプリまで、BCIシステムをゼロから構築することです。</p><p>システムは現在、3DプリントされたOpenBCIヘッドセット（Mark IV）の乾式Ag/AgCl電極を使用しています。完全にカスタマイズされたハードウェアを収納するために独自のケースを設計・印刷する予定なので、このセットアップはまもなく進化します。</p><p>ハードウェアのパイプラインは、明確で完全に自作されたチェーンに従います：<br>電極 → JNEEG取得ボード（ADS1299）→ ESP32マイクロコントローラー → BLE送信 → Androidアプリ。</p><p>私はESP32をプログラムして、EEG信号の初期リアルタイム前処理を実行します。その後、Androidアプリが2番目の処理段階（脳波リズムのライブ視覚化：アルファ、ベータ、ガンマなど）を適用します。この基盤が整い次第、視覚的スペラーを使用したP300実験を実装します。最終的な目標は、アイトラッキングレイヤーを追加して従来のP300スペラーを強化することです。これは、コアシステムが安定した後に計画されている機能です。</p><p><strong>使用されるソフトウェアスキル</strong>：<br>C++（低レベルプログラミング）、Python（信号処理と機械学習）、Kotlin（Android開発）。</p><p><strong>ハードウェアスキル</strong>：<br>アナログ/デジタル電子回路、マイクロコントローラープログラミング、電極の設計と取り扱い、コンポーネントの統合と配線。</p>",
            "aletheia-hardware-desc": "3DプリントされたOpenBCI Mark IV（ヘッドセットと電極のみ）とJetson Nano Orin + JNEEGハットを使用した最初のテスト。",
            "aletheia-app-desc": "Androidアプリのインターフェース：ロード画面、ホームページ、プロフィールページ、設定。",
            "aletheia-wiring-desc": "JNEEGハットとESP32間の配線の最初の基本的な回路図。",
            "project2-desc": "マジックアプリ",
            "project2-date": "2025年7月（公開準備中）",
            "project2-full": "デジタル手品として設計されたマジシャン向けアプリケーション。",
            "view-project": "プロジェクトを見る →",
            "view-on-github": "GitHubで見る",
            "view-on-kaggle": "Kaggleで見る",
            "view-github": "GitHubでプロジェクトを見る",
            "video-error": "お使いのブラウザは動画再生をサポートしていません。",
            "readme-intro": "瞬きだけでボタンを操作できるシンプルなウェブサイト — ハンズフリー。",
            "readme-description": "ウェブサイトをローカルで実行するためのHTML、CSS、JavaScriptファイル、およびArduino用のC++コードがここにあります。Arduinoコードは、私が使用した信号取得ボードを製造したUpside Down Labsが作成した<a href=\"https://github.com/upsidedownlabs/BioAmp-EXG-Pill\" target=\"_blank\">別のリポジトリ</a>から引用しました。一方、HTML、CSS、JavaScriptコードは、私たちが設立したソルボンヌ大学のニューロテック学生クラブ「NeuroTechSorbonne」の最初のプロジェクトのために、友人の助けを借りて私が書きました。",
            "requirements-title": "要件：",
            "requirements-text": "Web Serial APIを使用しているため、Google Chromeでのみ動作します。また、3つの電極、Arduino Unoボード、および信号取得ボードが必要です。ハードウェアのセットアップについては、<a href=\"https://github.com/upsidedownlabs/BioAmp-EXG-Pill\" target=\"_blank\">Upside Down Labsのリポジトリ</a>を参照してください。",
            "review-title": "レビュー：",
            "review-text": "プロジェクトはうまく機能しますが、感度が少し高すぎます。また、これは教育プロジェクトであり、瞬きは頻繁に発生するため、常にボタンがトリガーされるのは望ましくないため、実用的なアプリケーションはありません。これを解決する1つの方法は、ディープラーニングを使用して、意図的な瞬きと無意識の瞬きを区別することです。",
            "repo-structure": "プロジェクト構成",
            "test-btn": "テスト",
            "midigen-desc": "MIDIメロディ生成器",
            "midigen-date": "2025年3月（完了）",
            "midigen-full": "Tensorflowを使用してABBA風の曲を作成するMIDIメロディジェネレーター。",
            "midigen-intro": "<p>生成型機械学習モデル構築への私の最初の挑戦へようこそ。</p>",
            "midigen-description": "<p>Kaggleのデータセットを探索していたとき、ABBAの曲のMIDIデータセットを見つけ、純粋なオーディオファイルと比較して操作が簡単でありながら、音楽マシンを構築するのは楽しいだろうと思いました。完全な初心者である私にとってはそれほど簡単ではありませんでしたが、結果には満足しています。「ランダム」すぎる音にはなっていません。出力はプロンプトと比較的整合していると言えます。ディスコの曲はややダイナミックで、陽気な曲は私には幸せそうに聞こえます。</p><p>最後に、技術的な部分については、学習曲線は急な坂のように見え、かなり良かったです。しかし、私が選んだモデルのアーキテクチャは私にとってまだ謎のままです。既存のモデルを使用するのは便利ですが、それはまた、裏で何が起こっているのかを正確に理解していないことを意味します。アーキテクチャのコンポーネントをランダムに選んだわけではありませんが、インターネット上のソースを信頼しました。これは完全に満足できるものではなく、いつかすべてを理解したいという欲求を残しています。</p>",
            "midigen-results": "🎵 生成結果",
            "audio-error": "お使いのブラウザはオーディオ再生をサポートしていません。",
            "agrandir": "拡大",
            "réduire": "縮小",
            "read-only": "読み取り専用",
            "neurotech-club": "私のニューロテッククラブ"
        }
    };
    

    const fallbackComponents = {
        "components/topbar.html": `
<header class="top-bar">
    <div class="nav-left">
        <a href="index.html" class="home-button" aria-label="Retour à l'accueil">
            <img src="images/photo_cv.JPG" alt="Accueil">
        </a>
        
        <a href="https://www.reddit.com/r/neurorights/" target="_blank" class="reddit-button" aria-label="Communauté Neurorights">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.561-1.25-1.249-1.25zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
            <span>r/neurorights</span>
        </a>

        <a href="https://neurotechsorbonne.com/" target="_blank" class="neurotech-button" aria-label="NeuroTech Sorbonne">
            <img src="images/NeuroTechSorbonne logo.png" alt="NeuroTech Logo">
            <span data-lang="neurotech-club">Mon club neurotech</span>
        </a>
    </div>

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
            <button id="lang-ja" type="button">JP</button>
        </div>
    </div>
    <h2 data-lang="projects">Projets</h2>
    <a href="projectaletheia.html" class="sidebar-link">
        <h3>Aletheia</h3>
        <p data-lang="aletheia-desc">Interface cerveau-machine DIY avec android</p>
    </a>

    <a href="projectmidigen.html" class="sidebar-link">
        <h3>MidiGen</h3>
        <p data-lang="midigen-desc">Générateur de mélodies MIDI</p>
    </a>

    <a href="project1.html" class="sidebar-link">
        <h3>Blink Activated Alert Button</h3>
        <p data-lang="project1-desc">Contrôle par clignement d'œil</p>
    </a>

    <!-- <a href="project1.html" class="sidebar-link">
        <h3>AutoXic</h3>
        <p data-lang="project2-desc">Application de magie</p>
    </a> -->
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
            this.langJa = document.getElementById("lang-ja");
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
            this.langJa.addEventListener("click", () => this.changeLanguage("ja"));
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
                this.langJa.classList.toggle("active", lang === "ja");
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



