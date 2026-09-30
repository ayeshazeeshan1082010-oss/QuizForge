// ============================================================
//  LANGUAGE CONFIG — icons + display names + descriptions
// ============================================================
const LANGUAGES = [
    { key: "html",       name: "HTML",        icon: "fa-brands fa-html5",       desc: "Web structure",       category: "frontend" },
    { key: "css",        name: "CSS",         icon: "fa-brands fa-css3-alt",    desc: "Styling & layout",    category: "frontend" },
    { key: "javascript", name: "JavaScript",  icon: "fa-brands fa-js",          desc: "Web interactivity",   category: "frontend" },
    { key: "typescript", name: "TypeScript",  icon: "fa-solid fa-t",            desc: "Typed JS",            category: "frontend" },
    { key: "react",      name: "React",       icon: "fa-brands fa-react",       desc: "UI library",          category: "frontend" },
    { key: "vue",        name: "Vue.js",      icon: "fa-brands fa-vuejs",       desc: "Progressive JS",      category: "frontend" },
    { key: "angular",    name: "Angular",     icon: "fa-brands fa-angular",     desc: "JS framework",        category: "frontend" },
    { key: "sass",       name: "Sass",        icon: "fa-brands fa-sass",        desc: "CSS preprocessor",    category: "frontend" },
    { key: "bootstrap",  name: "Bootstrap",   icon: "fa-brands fa-bootstrap",   desc: "CSS framework",       category: "frontend" },
    { key: "tailwind",   name: "Tailwind",    icon: "fa-solid fa-wind",         desc: "Utility CSS",         category: "frontend" },
    { key: "php",        name: "PHP",         icon: "fa-brands fa-php",         desc: "Server-side",         category: "backend" },
    { key: "laravel",    name: "Laravel",     icon: "fa-brands fa-laravel",     desc: "PHP framework",       category: "backend" },
    { key: "nodejs",     name: "Node.js",     icon: "fa-brands fa-node-js",     desc: "Backend JS",          category: "backend" },
    { key: "python",     name: "Python",      icon: "fa-brands fa-python",      desc: "General purpose",     category: "backend" },
    { key: "django",     name: "Django",      icon: "fa-solid fa-fire",         desc: "Python framework",    category: "backend" },
    { key: "java",       name: "Java",        icon: "fa-brands fa-java",        desc: "Enterprise",          category: "backend" },
    { key: "spring",     name: "Spring Boot", icon: "fa-solid fa-leaf",         desc: "Java framework",      category: "backend" },
    { key: "csharp",     name: "C#",          icon: "fa-solid fa-hashtag",      desc: ".NET language",       category: "backend" },
    { key: "dotnet",     name: ".NET",        icon: "fa-brands fa-microsoft",   desc: "MS framework",        category: "backend" },
    { key: "cpp",        name: "C++",         icon: "fa-solid fa-code",         desc: "Systems language",    category: "backend" },
    { key: "c",          name: "C",           icon: "fa-solid fa-c",            desc: "Low-level",           category: "backend" },
    { key: "go",         name: "Go",          icon: "fa-brands fa-golang",      desc: "Google's lang",       category: "backend" },
    { key: "rust",       name: "Rust",        icon: "fa-brands fa-rust",        desc: "Memory safe",         category: "backend" },
    { key: "ruby",       name: "Ruby",        icon: "fa-solid fa-gem",          desc: "Elegant syntax",      category: "backend" },
    { key: "rails",      name: "Ruby on Rails", icon: "fa-solid fa-train",      desc: "Ruby framework",      category: "backend" },
    { key: "kotlin",     name: "Kotlin",      icon: "fa-solid fa-k",            desc: "Android lang",        category: "mobile" },
    { key: "swift",      name: "Swift",       icon: "fa-brands fa-swift",       desc: "iOS language",        category: "mobile" },
    { key: "flutter",    name: "Flutter",     icon: "fa-solid fa-mobile-screen", desc: "Cross-platform",     category: "mobile" },
    { key: "dart",       name: "Dart",        icon: "fa-solid fa-feather",      desc: "Flutter's lang",      category: "mobile" },
    { key: "reactnative",name: "React Native", icon: "fa-brands fa-react",      desc: "Mobile React",        category: "mobile" },
    { key: "sql",        name: "SQL",         icon: "fa-solid fa-database",     desc: "Query language",      category: "database" },
    { key: "mysql",      name: "MySQL",       icon: "fa-solid fa-database",     desc: "Relational DB",       category: "database" },
    { key: "postgres",   name: "PostgreSQL",  icon: "fa-solid fa-elephant",     desc: "Advanced RDBMS",       category: "database" },
    { key: "mongodb",    name: "MongoDB",     icon: "fa-solid fa-leaf",         desc: "NoSQL DB",            category: "database" },
    { key: "redis",      name: "Redis",       icon: "fa-solid fa-bolt",         desc: "In-memory cache",     category: "database" },
    { key: "git",        name: "Git",         icon: "fa-brands fa-git-alt",     desc: "Version control",     category: "tools" },
    { key: "github",     name: "GitHub",      icon: "fa-brands fa-github",      desc: "Code hosting",        category: "tools" },
    { key: "docker",     name: "Docker",      icon: "fa-brands fa-docker",      desc: "Containers",          category: "tools" },
    { key: "kubernetes", name: "Kubernetes",  icon: "fa-solid fa-cubes",        desc: "Orchestration",       category: "tools" },
    { key: "aws",        name: "AWS",         icon: "fa-brands fa-aws",         desc: "Cloud platform",      category: "tools" },
    { key: "wordpress",  name: "WordPress",   icon: "fa-brands fa-wordpress",   desc: "CMS",                 category: "cms" }
];

// ============================================================
//  QUESTION BANK — per language, per level
//  Structure: QUESTION_BANK[langKey][levelKey] = [ {question, options, correct}, ... ]
//  Currently each level has 6 questions — add more anytime!
// ============================================================
const QUESTION_BANK = {
    html: {
        easy: [
            { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], correct: 0 },
            { question: "Which tag creates a paragraph?", options: ["<p>", "<para>", "<text>", "<pg>"], correct: 0 },
            { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1 },
            { question: "Which tag creates the largest heading?", options: ["<h6>", "<head>", "<h1>", "<heading>"], correct: 2 },
            { question: "Which tag embeds an image?", options: ["<img>", "<image>", "<pic>", "<src>"], correct: 0 },
            { question: "Which tag creates an unordered list?", options: ["<ol>", "<list>", "<ul>", "<li>"], correct: 2 }
        ],
        medium: [
            { question: "What does <br> do?", options: ["Line break", "Bold", "Border", "Bullet"], correct: 0 },
            { question: "Which attribute specifies link destination?", options: ["src", "href", "link", "url"], correct: 1 },
            { question: "Which HTML5 tag defines navigation?", options: ["<nav>", "<navigate>", "<menu>", "<links>"], correct: 0 },
            { question: "Which input type creates a checkbox?", options: ["type='check'", "type='box'", "type='checkbox'", "type='tick'"], correct: 2 },
            { question: "Which tag defines a table row?", options: ["<td>", "<tr>", "<th>", "<row>"], correct: 1 },
            { question: "Correct HTML5 doctype?", options: ["<!DOCTYPE HTML5>", "<!DOCTYPE html>", "<DOCTYPE html>", "<!html>"], correct: 1 }
        ],
        hard: [
            { question: "Purpose of <figure> tag?", options: ["Self-contained content", "Figure shape", "Fonts", "Table"], correct: 0 },
            { question: "Which attribute makes input required?", options: ["must", "validate", "required", "needed"], correct: 2 },
            { question: "What does <meta charset='UTF-8'> do?", options: ["Title", "Character encoding", "Stylesheet", "Favicon"], correct: 1 },
            { question: "Which tag defines a footer?", options: ["<bottom>", "<footer>", "<foot>", "<end>"], correct: 1 },
            { question: "Role of <canvas>?", options: ["Draw graphics via JS", "Show images", "Play audio", "Tables"], correct: 0 },
            { question: "Which is semantic?", options: ["<div>", "<span>", "<article>", "<b>"], correct: 2 }
        ],
        extraHard: [
            { question: "What does iframe sandbox do?", options: ["Restricts capabilities", "Styles", "Speeds loading", "Border"], correct: 0 },
            { question: "<section> vs <article>?", options: ["No diff", "Article is self-contained", "Section inline", "Article deprecated"], correct: 1 },
            { question: "<template> tag purpose?", options: ["Reusable HTML fragment", "Theme", "CSS load", "Instant render"], correct: 0 },
            { question: "defer attribute on <script>?", options: ["Blocks render", "Executes after parsing", "Async load", "Caches"], correct: 1 },
            { question: "Which API draws on <canvas>?", options: ["WebGL only", "Canvas 2D & WebGL", "SVG", "CSS Paint"], correct: 1 },
            { question: "<picture> element allows?", options: ["Responsive images", "Photo edit", "Filters", "Slides"], correct: 0 }
        ],
        professional: [
            { question: "srcset attribute does?", options: ["Sets source", "Multiple resolutions", "Alt text", "Preloads"], correct: 1 },
            { question: "Improves first paint?", options: ["Lazy images", "Inlining critical CSS", "More divs", "Blocking scripts"], correct: 1 },
            { question: "meta viewport controls?", options: ["Mobile zoom", "Title", "SEO", "Cache"], correct: 0 },
            { question: "ARIA stands for?", options: ["Accessible Rich Internet Apps", "Layout", "CSS framework", "JS library"], correct: 0 },
            { question: "loading='lazy' does?", options: ["Defers image load", "Faster", "Animation", "Compress"], correct: 0 },
            { question: "Best for breadcrumbs?", options: ["<nav>", "<bread>", "<crumbs>", "<path>"], correct: 0 }
        ]
    },

    css: {
        easy: [
            { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correct: 1 },
            { question: "Which property changes text color?", options: ["font-color", "text-color", "color", "text-style"], correct: 2 },
            { question: "Which property sets background color?", options: ["bg", "background-color", "color-bg", "fill"], correct: 1 },
            { question: "Which selector targets an ID?", options: [".id", "#id", "*id", "id"], correct: 1 },
            { question: "Which property controls font size?", options: ["text-size", "font-size", "size", "font"], correct: 1 },
            { question: "How to write a class selector?", options: [".classname", "#classname", "classname", "*classname"], correct: 0 }
        ],
        medium: [
            { question: "Which property adds space inside?", options: ["margin", "padding", "border", "gap"], correct: 1 },
            { question: "Which display creates flex container?", options: ["block", "flex", "grid", "inline"], correct: 1 },
            { question: "Which controls stacking order?", options: ["z-index", "order", "position", "stack"], correct: 0 },
            { question: "Unit relative to root font?", options: ["px", "em", "rem", "%"], correct: 2 },
            { question: "Which adds text shadow?", options: ["box-shadow", "text-shadow", "shadow", "font-shadow"], correct: 1 },
            { question: "Sticky viewport position?", options: ["fixed", "sticky", "absolute", "static"], correct: 1 }
        ],
        hard: [
            { question: "'flex: 1' does?", options: ["Grow & shrink equally", "Font", "Padding", "Align"], correct: 0 },
            { question: "Default position value?", options: ["relative", "absolute", "static", "fixed"], correct: 2 },
            { question: "Controls text overflow?", options: ["overflow", "text-overflow", "white-space", "clip"], correct: 1 },
            { question: "'gap' works in?", options: ["Only flex", "Only grid", "Flex & grid", "Only block"], correct: 2 },
            { question: "Pseudo-class for hover?", options: [":focus", ":active", ":hover", ":target"], correct: 2 },
            { question: "box-sizing: border-box?", options: ["Includes padding/border in width", "Adds border", "Removes margin", "Adds shadow"], correct: 0 }
        ],
        extraHard: [
            { question: "grid-template-areas?", options: ["Names grid areas", "Colors", "Fonts", "Animations"], correct: 0 },
            { question: "Smooth animation property?", options: ["transition", "animate", "motion", "smooth"], correct: 0 },
            { question: "'contain: layout'?", options: ["Isolates layout", "Hides", "Borders", "Aligns"], correct: 0 },
            { question: "'will-change'?", options: ["Optimization hint", "Color", "Animates", "Reset"], correct: 0 },
            { question: "em vs rem?", options: ["em parent-relative, rem root-relative", "Same", "rem is pixels", "em is fixed"], correct: 0 },
            { question: "aspect-ratio controls?", options: ["Width-to-height", "Font", "Border", "Opacity"], correct: 0 }
        ],
        professional: [
            { question: "CSS custom property?", options: ["Defined with --", "JS variable", "HTML attr", "Preprocessor only"], correct: 0 },
            { question: "clamp() used for?", options: ["Responsive sizing", "Colors", "Radius", "Opacity"], correct: 0 },
            { question: "@supports used for?", options: ["Feature queries", "Media queries", "Imports", "Fonts"], correct: 0 },
            { question: "CSS containment used for?", options: ["Performance", "Layout", "Colors", "Fonts"], correct: 0 },
            { question: "subgrid?", options: ["Inherits parent tracks", "Nested only", "Deprecated", "Table"], correct: 0 },
            { question: ":is() does?", options: ["Matches any selector", "Type check", "Important", "Inherit"], correct: 0 }
        ]
    },

    javascript: {
        easy: [
            { question: "Which declares a variable?", options: ["var", "int", "define", "let's"], correct: 0 },
            { question: "Prints to console?", options: ["print()", "console.log()", "log()", "echo()"], correct: 1 },
            { question: "Single-line comment?", options: ["//", "/*", "#", "--"], correct: 0 },
            { question: "Correct array syntax?", options: ["{1,2,3}", "[1,2,3]", "(1,2,3)", "<1,2,3>"], correct: 1 },
            { question: "Strict equality operator?", options: ["==", "===", "=", "!="], correct: 1 },
            { question: "Function declaration?", options: ["function myFunc()", "def myFunc()", "func myFunc()", "void myFunc()"], correct: 0 }
        ],
        medium: [
            { question: "typeof NaN returns?", options: ["'NaN'", "'number'", "'undefined'", "'object'"], correct: 1 },
            { question: "Adds to end of array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
            { question: "'2' + 2 + 3 evaluates?", options: ["7", "223", "27", "NaN"], correct: 1 },
            { question: "JSON to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.convert()"], correct: 0 },
            { question: "What is a closure?", options: ["Function with parent scope access", "A loop", "CSS property", "Close browser"], correct: 0 },
            { question: "'this' in regular function?", options: ["Function", "Global / caller", "Undefined", "Parent"], correct: 1 }
        ],
        hard: [
            { question: "What is a Promise?", options: ["Eventual completion object", "Guarantee", "Loop", "Callback"], correct: 0 },
            { question: "[1,2,3].map(n=>n*2) returns?", options: ["[2,4,6]", "[1,2,3]", "6", "undefined"], correct: 0 },
            { question: "Event delegation?", options: ["Single parent listener", "Many child listeners", "Inline onclick", "Remove events"], correct: 0 },
            { question: "async/await does?", options: ["Handles promises cleanly", "Faster", "Blocks render", "Threads"], correct: 0 },
            { question: "0.1 + 0.2 === 0.3?", options: ["true", "false", "undefined", "NaN"], correct: 1 },
            { question: "Deep clone in modern JS?", options: ["Object.assign()", "structuredClone()", "JSON parse/stringify", "Both structuredClone and JSON"], correct: 3 }
        ],
        extraHard: [
            { question: "What is a WeakMap?", options: ["Weakly held keys", "Weak var", "Loop", "Promise"], correct: 0 },
            { question: "Event loop?", options: ["Async callbacks", "For loop", "Timer", "Renderer"], correct: 0 },
            { question: "Object.freeze()?", options: ["Immutable object", "Deletes", "Clones", "Hides"], correct: 0 },
            { question: "Generator function?", options: ["Pauses with yield", "Creates arrays", "Async only", "Deprecated"], correct: 0 },
            { question: "Proxy purpose?", options: ["Intercept operations", "Backup", "Cache", "Clone"], correct: 0 },
            { question: "queueMicrotask does?", options: ["Schedules microtask", "Timer", "Blocks", "Sync"], correct: 0 }
        ],
        professional: [
            { question: "Temporal dead zone?", options: ["let/const inaccessible region", "Memory leak", "Timing bug", "CSS zone"], correct: 0 },
            { question: "Memory leak in JS?", options: ["Unfreed references", "Crash", "Infinite loop", "Stack overflow"], correct: 0 },
            { question: "Web Worker purpose?", options: ["Background threads", "Cache", "CSS", "Cookies"], correct: 0 },
            { question: "Debouncing?", options: ["Limit call frequency", "Cancel promises", "Block events", "Sort"], correct: 0 },
            { question: "== vs ===?", options: ["Coercion vs strict", "Same", "=== slower", "== strict"], correct: 0 },
            { question: "structuredClone fixes?", options: ["Dates, sets, maps", "Faster", "Smaller", "Async"], correct: 0 }
        ]
    },

    php: {
        easy: [
            { question: "PHP stands for?", options: ["PHP: Hypertext Preprocessor", "Personal Home Page", "Preprocessed HTML", "Private Hosting Protocol"], correct: 0 },
            { question: "Opens PHP block?", options: ["<?php", "<php>", "<?", "<script>"], correct: 0 },
            { question: "Variable prefix?", options: ["$", "@", "#", "&"], correct: 0 },
            { question: "Prints output?", options: ["echo", "print_r", "console.log", "printf"], correct: 0 },
            { question: "Counts array elements?", options: ["count()", "length()", "size()", "total()"], correct: 0 },
            { question: "Comment styles?", options: ["// ", "# ", "/* */", "All of these"], correct: 3 }
        ],
        medium: [
            { question: "Superglobal for POST?", options: ["$_POST", "$POST", "$_GET", "$_DATA"], correct: 0 },
            { question: "Connect MySQL?", options: ["mysqli_connect", "mysql_open", "db_connect", "connect_db"], correct: 0 },
            { question: "=== checks?", options: ["Value & type", "Only value", "Only type", "Reference"], correct: 0 },
            { question: "Includes file?", options: ["include", "import", "require_once", "Both include and require"], correct: 3 },
            { question: "Array syntax?", options: ["array(1,2,3)", "[1,2,3]", "Both", "Neither"], correct: 2 },
            { question: "String length?", options: ["strlen()", "length()", "count()", "size()"], correct: 0 }
        ],
        hard: [
            { question: "PHP session?", options: ["Server-side user data", "Cookie", "File", "Database"], correct: 0 },
            { question: "PDO stands for?", options: ["PHP Data Objects", "PHP Database Object", "Personal Data Object", "Public Data Output"], correct: 0 },
            { question: "Prevents SQL injection?", options: ["Prepared statements", "Concat", "addslashes", "htmlspecialchars"], correct: 0 },
            { question: "Composer is?", options: ["Dependency manager", "Framework", "CMS", "Server"], correct: 0 },
            { question: ".htaccess purpose?", options: ["Server config", "PHP config", "CSS", "JS"], correct: 0 },
            { question: "namespace does?", options: ["Avoid name collisions", "Imports", "Creates classes", "Constants"], correct: 0 }
        ],
        extraHard: [
            { question: "Late static binding?", options: ["Static:: at runtime", "Early binding", "Design pattern", "Class type"], correct: 0 },
            { question: "Trait in PHP?", options: ["Reusable methods", "Class", "Interface", "Function"], correct: 0 },
            { question: "__invoke does?", options: ["Object callable", "Constructor", "Destructor", "Cloner"], correct: 0 },
            { question: "Anonymous class?", options: ["Class without name", "Abstract", "Final", "Interface"], correct: 0 },
            { question: "yield does?", options: ["Creates generator", "Returns value", "Pauses", "Exits"], correct: 0 },
            { question: "strict_types=1 does?", options: ["Enforces strict typing", "Errors", "Disable types", "Speed"], correct: 0 }
        ],
        professional: [
            { question: "OPcache?", options: ["Caches bytecode", "Caches HTML", "CDN", "DB"], correct: 0 },
            { question: "PHP-FPM?", options: ["FastCGI Process Manager", "Framework", "CMS", "Compiler"], correct: 0 },
            { question: "Abstract vs Interface?", options: ["Abstract has implementation", "Same", "Interface faster", "Abstract deprecated"], correct: 0 },
            { question: "Dependency injection?", options: ["Passing deps externally", "Internal creation", "Avoid", "Global state"], correct: 0 },
            { question: "PSR?", options: ["PHP Standard Recommendation", "Server Runtime", "Safe Response", "Pre-Shared Resource"], correct: 0 },
            { question: "JIT in PHP 8?", options: ["Just-In-Time compilation", "JSON in Type", "Java Integration", "Join in Table"], correct: 0 }
        ]
    },

    // ----- Placeholder pattern for the rest -----
    // For any language not filled in, script will auto-generate placeholder questions
    // so the app never breaks. You can fill these with real questions over time.
};

// ============================================================
//  CONSTANTS
// ============================================================
const LEVELS = ["easy", "medium", "hard", "extraHard", "professional"];
const LEVEL_NAMES = {
    easy: "EASY", medium: "MEDIUM", hard: "HARD", extraHard: "EXTRA HARD", professional: "PROFESSIONAL"
};
const LEVEL_TIMES = { easy: 60, medium: 50, hard: 40, extraHard: 30, professional: 20 };
const QUESTIONS_PER_LEVEL = 6;
const PASS_PERCENT = 60;

// ============================================================
//  LOCAL STORAGE — track progress per language
// ============================================================
function getProgress() {
    try {
        return JSON.parse(localStorage.getItem("quizforge_progress") || "{}");
    } catch { return {}; }
}

function saveProgress(progress) {
    localStorage.setItem("quizforge_progress", JSON.stringify(progress));
}

function getLangProgress(langKey) {
    const all = getProgress();
    return all[langKey] || { unlockedLevels: 1, completedLevels: [], completed: false };
}

function setLangProgress(langKey, data) {
    const all = getProgress();
    all[langKey] = data;
    saveProgress(all);
}

// ============================================================
//  PLACEHOLDER QUESTION GENERATOR (for languages without questions yet)
// ============================================================
function generatePlaceholderQuestions(langName, levelKey) {
    const arr = [];
    for (let i = 1; i <= QUESTIONS_PER_LEVEL; i++) {
        arr.push({
            question: `${langName} — ${LEVEL_NAMES[levelKey]} Question ${i}`,
            options: [
                `${langName} option A for Q${i}`,
                `${langName} option B for Q${i}`,
                `${langName} option C for Q${i}`,
                `${langName} option D for Q${i}`
            ],
            correct: (i - 1) % 4
        });
    }
    return arr;
}

function getQuestions(langKey, levelKey) {
    const lang = LANGUAGES.find(l => l.key === langKey);
    if (!lang) return generatePlaceholderQuestions("Unknown", levelKey);

    const bank = QUESTION_BANK[langKey];
    if (bank && bank[levelKey] && bank[levelKey].length) {
        return bank[levelKey];
    }
    // No real questions yet — return placeholder
    return generatePlaceholderQuestions(lang.name, levelKey);
}

// ============================================================
//  STATE
// ============================================================
let selectedLang = null;
let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let levelCorrectCount = 0;
let levelTotalQuestions = 0;
let answered = false;
let currentQuestions = [];
let currentCorrectIndex = -1;
let timerInterval = null;
let timeLeft = 60;
let totalTimeForLevel = 60;
let quizActive = false;

// ============================================================
//  DOM
// ============================================================
const languageGrid = document.getElementById("languageGrid");
const languageOverlay = document.getElementById("languageOverlay");
const languagePicker = document.getElementById("languagePicker");
const langCloseBtn = document.getElementById("langCloseBtn");
const langModalTitle = document.getElementById("langModalTitle");
const langModalSubtitle = document.getElementById("langModalSubtitle");

const levelOverlay = document.getElementById("levelOverlay");
const levelPicker = document.getElementById("levelPicker");
const levelCloseBtn = document.getElementById("levelCloseBtn");
const levelModalTitle = document.getElementById("levelModalTitle");
const levelModalSubtitle = document.getElementById("levelModalSubtitle");

const quizOverlay = document.getElementById("quizOverlay");
const quizLangChip = document.getElementById("quizLangChip");
const quizLevelChip = document.getElementById("quizLevelChip");
const quizScore = document.getElementById("quizScore");
const quizProgressText = document.getElementById("quizProgressText");
const quizProgressFill = document.getElementById("quizProgressFill");
const timerWrap = document.getElementById("timerWrap");
const timerText = document.getElementById("timerText");
const timerBarFill = document.getElementById("timerBarFill");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizFeedback = document.getElementById("quizFeedback");
const quizNextBtn = document.getElementById("quizNextBtn");
const quizBody = document.getElementById("quizBody");

const levelResult = document.getElementById("levelResult");
const levelResultIcon = document.getElementById("levelResultIcon");
const levelResultTitle = document.getElementById("levelResultTitle");
const levelResultMessage = document.getElementById("levelResultMessage");
const levelResultScore = document.getElementById("levelResultScore");
const levelResultCorrect = document.getElementById("levelResultCorrect");
const levelResultTotal = document.getElementById("levelResultTotal");
const nextLevelBtn = document.getElementById("nextLevelBtn");
const retryLevelBtn = document.getElementById("retryLevelBtn");
const exitLevelBtn = document.getElementById("exitLevelBtn");

const finalResult = document.getElementById("finalResult");
const finalResultIcon = document.getElementById("finalResultIcon");
const finalResultTitle = document.getElementById("finalResultTitle");
const finalResultMessage = document.getElementById("finalResultMessage");
const finalResultScore = document.getElementById("finalResultScore");
const finalResultCorrect = document.getElementById("finalResultCorrect");
const nextLanguageBtn = document.getElementById("nextLanguageBtn");
const replayLangBtn = document.getElementById("replayLangBtn");
const exitFinalBtn = document.getElementById("exitFinalBtn");

// ============================================================
//  UTILS
// ============================================================
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ============================================================
//  RENDER LANGUAGE GRID (landing section)
// ============================================================
function renderLanguageGrid() {
    languageGrid.innerHTML = "";
    const progress = getProgress();

    LANGUAGES.forEach(lang => {
        const p = progress[lang.key] || { completed: false };
        const card = document.createElement("div");
        card.className = "lang-card";
        if (p.completed) card.classList.add("completed");

        let badge = "Start";
        if (p.completed) badge = "Done";

        card.innerHTML = `
            <span class="lang-badge">${badge}</span>
            <span class="lang-icon"><i class="${lang.icon}"></i></span>
            <h4>${lang.name}</h4>
            <p>${lang.desc}</p>
        `;
        card.addEventListener("click", () => openLevelPicker(lang.key));
        languageGrid.appendChild(card);
    });
}

// ============================================================
//  LANGUAGE PICKER (modal) — opens when user clicks "Start Quiz"
// ============================================================
function buildLanguagePicker() {
    languagePicker.innerHTML = "";
    const progress = getProgress();

    LANGUAGES.forEach(lang => {
        const p = progress[lang.key] || { completed: false };
        const btn = document.createElement("button");
        btn.className = "lang-pick-btn";
        if (p.completed) btn.classList.add("completed");

        btn.innerHTML = `
            <span class="emoji-icon"><i class="${lang.icon}"></i></span>
            <span class="name">${lang.name}</span>
            <span class="desc">${lang.desc}</span>
            ${p.completed ? '<span class="lock-badge"><i class="fa-solid fa-check" style="color:#5F8A56;"></i></span>' : ''}
        `;
        btn.addEventListener("click", () => {
            closeLanguagePicker();
            openLevelPicker(lang.key);
        });
        languagePicker.appendChild(btn);
    });
}

function openLanguagePicker() {
    buildLanguagePicker();
    languageOverlay.classList.add("active");
}

function closeLanguagePicker() {
    languageOverlay.classList.remove("active");
}

// ============================================================
//  LEVEL PICKER — shows 5 levels, locked/unlocked
// ============================================================
function openLevelPicker(langKey) {
    selectedLang = langKey;
    const lang = LANGUAGES.find(l => l.key === langKey);
    const progress = getLangProgress(langKey);

    levelModalTitle.textContent = lang.name + " · Select Level";
    levelModalSubtitle.textContent = `Level 1 is unlocked. Pass each level to unlock the next. You need ${PASS_PERCENT}% to pass.`;

    levelPicker.innerHTML = "";

    LEVELS.forEach((lvl, idx) => {
        const levelNum = idx + 1;
        const isUnlocked = levelNum <= progress.unlockedLevels;
        const isCompleted = progress.completedLevels.includes(levelNum);

        const btn = document.createElement("button");
        btn.className = `level-pick-btn l${levelNum}`;
        if (!isUnlocked) btn.disabled = true;
        if (isCompleted) btn.classList.add("completed");

        let statusIcon = '<i class="fa-solid fa-lock"></i>';
        if (isCompleted) statusIcon = '<i class="fa-solid fa-check-circle" style="color:#5F8A56;"></i>';
        else if (isUnlocked) statusIcon = '<i class="fa-solid fa-play"></i>';

        btn.innerHTML = `
            <span class="level-num-badge">${levelNum}</span>
            <span class="level-info-mini">
                <h4>${LEVEL_NAMES[lvl]}</h4>
                <span>${LEVEL_TIMES[lvl]} sec per Q</span>
            </span>
            <span class="level-status">${statusIcon}</span>
        `;

        if (isUnlocked) {
            btn.addEventListener("click", () => {
                closeLevelPicker();
                startLevel(levelNum - 1);
            });
        }

        levelPicker.appendChild(btn);
    });

    levelOverlay.classList.add("active");
}

function closeLevelPicker() {
    levelOverlay.classList.remove("active");
}

// ============================================================
//  TIMER
// ============================================================
function startTimer(seconds) {
    stopTimer();
    timeLeft = seconds;
    totalTimeForLevel = seconds;
    timerWrap.classList.remove("warning", "danger");
    updateTimerUI();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();

        if (timeLeft <= 5 && timeLeft > 2) {
            timerWrap.classList.add("danger");
            timerWrap.classList.remove("warning");
        } else if (timeLeft <= 10 && timeLeft > 5) {
            timerWrap.classList.add("warning");
            timerWrap.classList.remove("danger");
        }

        if (timeLeft <= 0) {
            stopTimer();
            if (!answered) handleTimeout();
        }
    }, 1000);
}

function updateTimerUI() {
    timerText.textContent = timeLeft;
    const pct = (timeLeft / totalTimeForLevel) * 100;
    timerBarFill.style.width = Math.max(0, pct) + "%";
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// ============================================================
//  TIMEOUT
// ============================================================
function handleTimeout() {
    if (answered || !quizActive) return;
    answered = true;
    const allOptions = quizOptions.querySelectorAll(".quiz-option");
    allOptions.forEach(btn => btn.disabled = true);
    allOptions.forEach((btn, idx) => {
        if (idx === currentCorrectIndex) btn.classList.add("correct");
    });
    quizFeedback.className = "quiz-feedback wrong";
    quizFeedback.textContent = "Time's up! Correct answer revealed.";
    quizNextBtn.disabled = false;
}

// ============================================================
//  START LEVEL
// ============================================================
function startLevel(levelIndex) {
    currentLevelIndex = levelIndex;
    openQuiz();
}

function openQuiz() {
    quizOverlay.classList.add("active");
    quizBody.style.display = "flex";
    levelResult.classList.remove("active");
    finalResult.classList.remove("active");
    quizActive = true;

    score = 0;
    correctCount = 0;
    currentQuestionIndex = 0;
    quizScore.textContent = "0";

    const lang = LANGUAGES.find(l => l.key === selectedLang);
    quizLangChip.textContent = lang.name;

    loadLevel(currentLevelIndex);
}

function closeQuiz() {
    stopTimer();
    quizActive = false;
    quizOverlay.classList.remove("active");
    answered = false;
}

function loadLevel(levelIndex) {
    currentLevelIndex = levelIndex;
    const levelKey = LEVELS[levelIndex];

    const rawQuestions = getQuestions(selectedLang, levelKey);
    currentQuestions = shuffleArray(rawQuestions);
    currentQuestionIndex = 0;
    levelCorrectCount = 0;
    levelTotalQuestions = currentQuestions.length;

    quizLevelChip.textContent = LEVEL_NAMES[levelKey];
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    quizNextBtn.disabled = true;
    quizFeedback.className = "quiz-feedback";
    quizFeedback.textContent = "Select an answer";

    if (currentQuestionIndex >= currentQuestions.length) {
        showLevelResult();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    currentCorrectIndex = q.correct;

    quizQuestion.textContent = q.question;
    quizProgressText.textContent = `Q${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    const progressPct = (currentQuestionIndex / currentQuestions.length) * 100;
    quizProgressFill.style.width = progressPct + "%";

    quizOptions.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.dataset.index = idx;

        const keySpan = document.createElement("span");
        keySpan.className = "key";
        keySpan.textContent = letters[idx];

        const textSpan = document.createElement("span");
        textSpan.textContent = opt;

        btn.appendChild(keySpan);
        btn.appendChild(textSpan);
        btn.addEventListener("click", () => handleAnswer(idx, btn));
        quizOptions.appendChild(btn);
    });

    const seconds = LEVEL_TIMES[LEVELS[currentLevelIndex]];
    startTimer(seconds);
}

function handleAnswer(selectedIdx, selectedBtn) {
    if (answered || !quizActive) return;
    answered = true;
    stopTimer();

    const isCorrect = selectedIdx === currentCorrectIndex;
    const allOptions = quizOptions.querySelectorAll(".quiz-option");
    allOptions.forEach(btn => btn.disabled = true);
    allOptions.forEach((btn, idx) => {
        if (idx === currentCorrectIndex) btn.classList.add("correct");
        else if (idx === selectedIdx && !isCorrect) btn.classList.add("wrong");
    });

    if (isCorrect) {
        score += 10;
        correctCount++;
        levelCorrectCount++;
        quizScore.textContent = score;
        quizFeedback.className = "quiz-feedback correct";
        quizFeedback.textContent = "Correct! +10 points";
    } else {
        const correctLetter = String.fromCharCode(65 + currentCorrectIndex);
        quizFeedback.className = "quiz-feedback wrong";
        quizFeedback.textContent = `Incorrect. Correct answer: ${correctLetter}`;
    }

    quizNextBtn.disabled = false;
}

function goToNext() {
    if (!answered) return;
    currentQuestionIndex++;
    loadQuestion();
}

// ============================================================
//  LEVEL RESULT
// ============================================================
function showLevelResult() {
    stopTimer();
    quizBody.style.display = "none";
    levelResult.classList.add("active");

    levelResultScore.textContent = score;
    levelResultCorrect.textContent = levelCorrectCount;
    levelResultTotal.textContent = levelTotalQuestions;

    const percent = (levelCorrectCount / levelTotalQuestions) * 100;
    const isPassed = percent >= PASS_PERCENT;
    const isLastLevel = currentLevelIndex === LEVELS.length - 1;

    if (isPassed) {
        // Save progress: unlock next level
        const progress = getLangProgress(selectedLang);
        if (!progress.completedLevels.includes(currentLevelIndex + 1)) {
            progress.completedLevels.push(currentLevelIndex + 1);
        }
        if (currentLevelIndex + 1 >= progress.unlockedLevels) {
            progress.unlockedLevels = Math.min(LEVELS.length, currentLevelIndex + 2);
        }

        if (isLastLevel) {
            progress.completed = true;
            progress.unlockedLevels = LEVELS.length;
            setLangProgress(selectedLang, progress);
            levelResult.classList.remove("active");
            showFinalResult();
            return;
        }

        setLangProgress(selectedLang, progress);

        levelResultIcon.innerHTML = '<i class="fa-solid fa-trophy"></i>';
        levelResultTitle.textContent = "Level Passed!";
        levelResultMessage.textContent = `You scored ${Math.round(percent)}%. Next level is unlocked!`;
        nextLevelBtn.style.display = "inline-flex";
    } else {
        levelResultIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        levelResultTitle.textContent = "Level Not Cleared";
        levelResultMessage.textContent = `You scored ${Math.round(percent)}%. Need ${PASS_PERCENT}% to unlock next level. Try again!`;
        nextLevelBtn.style.display = "none";
    }

    renderLanguageGrid();
}

// ============================================================
//  FINAL RESULT (all 5 levels done for a language)
// ============================================================
function showFinalResult() {
    stopTimer();
    quizBody.style.display = "none";
    levelResult.classList.remove("active");
    finalResult.classList.add("active");

    finalResultScore.textContent = score;
    finalResultCorrect.textContent = correctCount;

    const lang = LANGUAGES.find(l => l.key === selectedLang);
    finalResultTitle.textContent = `${lang.name} Mastered!`;
    finalResultMessage.textContent = `You've conquered all five levels of ${lang.name}.`;

    if (score >= 250) {
        finalResultIcon.innerHTML = '<i class="fa-solid fa-crown"></i>';
    } else if (score >= 150) {
        finalResultIcon.innerHTML = '<i class="fa-solid fa-star"></i>';
    } else {
        finalResultIcon.innerHTML = '<i class="fa-solid fa-award"></i>';
    }

    renderLanguageGrid();
}

// ============================================================
//  EVENT LISTENERS
// ============================================================
document.getElementById("startQuizBtn").addEventListener("click", openLanguagePicker);
langCloseBtn.addEventListener("click", closeLanguagePicker);
languageOverlay.addEventListener("click", (e) => { if (e.target === languageOverlay) closeLanguagePicker(); });

levelCloseBtn.addEventListener("click", closeLevelPicker);
levelOverlay.addEventListener("click", (e) => { if (e.target === levelOverlay) closeLevelPicker(); });

document.getElementById("quizCloseBtn").addEventListener("click", closeQuiz);
quizNextBtn.addEventListener("click", goToNext);

nextLevelBtn.addEventListener("click", () => {
    levelResult.classList.remove("active");
    quizBody.style.display = "flex";
    loadLevel(currentLevelIndex + 1);
});

retryLevelBtn.addEventListener("click", () => {
    levelResult.classList.remove("active");
    quizBody.style.display = "flex";
    loadLevel(currentLevelIndex);
});

exitLevelBtn.addEventListener("click", closeQuiz);

nextLanguageBtn.addEventListener("click", () => {
    finalResult.classList.remove("active");
    closeQuiz();
    openLanguagePicker();
});

replayLangBtn.addEventListener("click", () => {
    finalResult.classList.remove("active");
    openQuiz();
});

exitFinalBtn.addEventListener("click", closeQuiz);

quizOverlay.addEventListener("click", (e) => { if (e.target === quizOverlay) closeQuiz(); });

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && quizActive && !quizNextBtn.disabled && answered) quizNextBtn.click();
    if (e.key === "Escape" && quizActive) closeQuiz();
});

// ============================================================
//  INIT
// ============================================================
renderLanguageGrid();

document.querySelectorAll('a[href="#start"]').forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("start").scrollIntoView({ behavior: "smooth" });
    });
});