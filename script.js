/* =========================================================
   InfoTalkies V3 - app.js
   ========================================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";

/* =========================================================
   FIREBASE
   ========================================================= */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCaALqxdtEPCNxg5XPPG81T9853gOPO4qY",
  authDomain: "server-41203.firebaseapp.com",
  databaseURL: "https://server-41203-default-rtdb.firebaseio.com",
  projectId: "server-41203",
  storageBucket: "server-41203.firebasestorage.app",
  messagingSenderId: "26278139327",
  appId: "1:26278139327:web:db44a7e2d8d42d690abd0a"
};

const firebaseApp = initializeApp(FIREBASE_CONFIG);
const db = getDatabase(firebaseApp);

/* =========================================================
   HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const safeId = value =>
  String(value || "")
    .replace(/[.#$[\]/]/g, "_")
    .replace(/\s+/g, "-")
    .toLowerCase();

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value);
}

/* =========================================================
   LINKS
   ========================================================= */

const LINKS = {
  youtube: "https://www.youtube.com/@infotalkies",
  instagram: "https://www.instagram.com/infotalkies",
  facebook: "https://www.facebook.com/infotalkies",
  github: "https://github.com/kaviyarasan-1997",
  portfolio: "https://kaviyarasan-1997.github.io/Portfolio",
  gamend: "https://kaviyarasan-1997.github.io/gamendbot/",
  dyfi: "https://dyfitamilnadu.org"
};

/* =========================================================
   ONLINE IMAGE LIBRARY
   ========================================================= */

const IMAGES = {
  gaming:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=82",

  gaming2:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=82",

  tech:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=82",

  coding:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=82",

  laptop:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=82",

  mobile:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=82",

  ai:
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=82",

  social:
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=82",

  instagram:
    "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=900&q=82",

  team:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=82",

  music:
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=82",

  fitness:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=82",

  notes:
    "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=82",

  android:
    "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=900&q=82",

  database:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=82",

  web:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=82"
};

/* =========================================================
   APP DATA
   ========================================================= */

const appData = [
  {
    id: "gamend-apk",
    title: "GAMEND",
    description:
      "Ultra Pro Game Hub Android application. Download the latest APK.",
    icon: "fa-solid fa-gamepad",
    image: IMAGES.gaming,
    url:
      "https://github.com/mozhihub/Infotalkies-/raw/refs/heads/main/apps/GAMEND.apk",
    download: true
  },

  {
    id: "rhythm-music-apk",
    title: "Rhythm Music",
    description:
      "Rhythm Music Android application. Download the APK and enjoy music.",
    icon: "fa-solid fa-music",
    image: IMAGES.music,
    url:
      "https://github.com/mozhihub/Infotalkies-/raw/refs/heads/main/apps/Rhythm%20music%20(1).apk",
    download: true
  },

  {
    id: "info-app",
    title: "InfoTalkies",
    description:
      "Technology media application with useful tech updates and information.",
    icon: "fa-solid fa-bolt",
    image: IMAGES.tech,
    url: LINKS.youtube
  },

  {
    id: "note",
    title: "Note Studio",
    description: "Advanced notes application.",
    icon: "fa-solid fa-note-sticky",
    image: IMAGES.notes,
    url: LINKS.portfolio
  },

  {
    id: "fitness",
    title: "Fitness Pro",
    description: "Workout planner application.",
    icon: "fa-solid fa-dumbbell",
    image: IMAGES.fitness,
    url: LINKS.portfolio
  },

  {
    id: "ai-chat",
    title: "AI Chat Hub",
    description: "AI assistant application concept.",
    icon: "fa-solid fa-robot",
    image: IMAGES.ai,
    url: LINKS.portfolio
  },

  {
    id: "game-center",
    title: "Game Center",
    description: "Game collection interface.",
    icon: "fa-solid fa-dice",
    image: IMAGES.gaming2,
    url: LINKS.gamend
  },

  {
    id: "project-manager",
    title: "Project Manager",
    description: "Developer utility application.",
    icon: "fa-solid fa-code",
    image: IMAGES.coding,
    url: LINKS.portfolio
  },

  {
    id: "media-toolkit",
    title: "Media Toolkit",
    description: "Creator utility tools.",
    icon: "fa-solid fa-wand-magic-sparkles",
    image: IMAGES.social,
    url: LINKS.portfolio
  }
];

/* =========================================================
   WEBSITE DATA
   ========================================================= */

const websiteData = [
  {
    id: "downloader",
    title: "Downloader",
    description: "Online downloader web application.",
    image: IMAGES.web,
    demo: "https://mozhihub.github.io/Downloader/"
  },

  {
    id: "music-website",
    title: "Music Website",
    description: "Online Tamil music player and music website.",
    image: IMAGES.music,
    demo: "https://mozhihub.github.io/MUSIC/"
  },

  {
    id: "signature",
    title: "Signature Database",
    description: "Signature database web application.",
    image: IMAGES.database,
    demo: "https://mozhihub.github.io/signature/"
  },

  {
    id: "voting",
    title: "Voting",
    description: "Online voting web application.",
    image: IMAGES.team,
    demo: "https://kaviyarasan-1997.github.io/Vote/"
  },

  {
    id: "dyfi",
    title: "DYFI Tamil Nadu",
    description: "Official web platform.",
    image: IMAGES.team,
    demo: LINKS.dyfi
  },

  {
    id: "gamehub",
    title: "Ultra Pro Game Hub",
    description: "Gaming web application.",
    image: IMAGES.gaming,
    demo: LINKS.gamend
  },

  {
    id: "portfolio",
    title: "Kaviyarasan Portfolio",
    description: "Developer portfolio.",
    image: IMAGES.laptop,
    demo: LINKS.portfolio
  },

  {
    id: "infotalkies",
    title: "InfoTalkies",
    description: "Technology media platform.",
    image: IMAGES.tech,
    demo: LINKS.youtube
  },

  {
    id: "web-demo-9",
    title: "Mobile UI Demo",
    description: "Mobile-first interface.",
    image: IMAGES.mobile,
    demo: LINKS.portfolio
  },

  {
    id: "web-demo-10",
    title: "AI Web Project",
    description: "Experimental AI web project.",
    image: IMAGES.ai,
    demo: LINKS.portfolio
  }
];

/* =========================================================
   PROJECT DATA
   ========================================================= */

const projectData = [
  {
    id: "mention-robot",
    title: "Mention Robot",
    description: "GitHub project for Mention Robot.",
    icon: "fa-brands fa-github",
    image: IMAGES.ai,
    url: "https://github.com/mozhihub/Mention-Robot"
  },

  {
    id: "arduino",
    title: "Arduino Projects",
    description: "Boards, sensors and electronics experiments.",
    icon: "fa-solid fa-microchip",
    image: IMAGES.tech,
    url: LINKS.github
  },

  {
    id: "automation",
    title: "Automation",
    description: "Automation and hardware projects.",
    icon: "fa-solid fa-gears",
    image: IMAGES.android,
    url: LINKS.github
  },

  {
    id: "fullstack",
    title: "Full Stack Projects",
    description: "HTML, CSS, JavaScript and Firebase.",
    icon: "fa-solid fa-code",
    image: IMAGES.coding,
    url: LINKS.github
  },

  {
    id: "ai",
    title: "AI Experiments",
    description: "AI powered application concepts.",
    icon: "fa-solid fa-brain",
    image: IMAGES.ai,
    url: LINKS.github
  },

  {
    id: "ui",
    title: "Web UI Lab",
    description: "Responsive interface experiments.",
    icon: "fa-solid fa-palette",
    image: IMAGES.web,
    url: LINKS.github
  },

  {
    id: "android",
    title: "Android WebView",
    description: "Web-to-app Android projects.",
    icon: "fa-brands fa-android",
    image: IMAGES.android,
    url: LINKS.github
  },

  {
    id: "firebase",
    title: "Firebase Apps",
    description: "Realtime Firebase projects.",
    icon: "fa-solid fa-database",
    image: IMAGES.database,
    url: LINKS.github
  },

  {
    id: "game-ui",
    title: "Game UI Lab",
    description: "Interactive game interfaces.",
    icon: "fa-solid fa-gamepad",
    image: IMAGES.gaming2,
    url: LINKS.github
  },

  {
    id: "media",
    title: "Media Tools",
    description: "Creator utility projects.",
    icon: "fa-solid fa-photo-film",
    image: IMAGES.social,
    url: LINKS.github
  }
];

/* =========================================================
   CURRENT USER
   ========================================================= */

const userId =
  localStorage.getItem("info_user_id") ||
  "user_" +
    Math.random()
      .toString(36)
      .substring(2, 12);

localStorage.setItem("info_user_id", userId);

/* =========================================================
   IMAGE CARD
   ========================================================= */

function cardImage(image, title) {
  const fallback =
    "https://picsum.photos/seed/" +
    encodeURIComponent(title) +
    "/900/520";

  return `
    <div class="card-cover">
      <img
        src="${escapeAttr(image)}"
        alt="${escapeAttr(title)}"
        loading="lazy"
        onerror="this.onerror=null;this.src='${fallback}'"
      >

      <span class="image-badge">
        <i class="fa-solid fa-globe"></i>
        ONLINE LIBRARY
      </span>
    </div>
  `;
}

/* =========================================================
   REACTION BUTTONS
   ========================================================= */

function reactionButtons(type, id) {
  const key = safeId(type + "_" + id);

  return `
    <div class="reaction-row" data-reaction-group="${key}">

      <button
        class="reaction-btn like-btn"
        data-type="${escapeAttr(type)}"
        data-id="${escapeAttr(id)}"
        data-reaction="like"
      >
        <i class="fa-regular fa-thumbs-up"></i>
        <span id="like-${key}">0</span>
      </button>

      <button
        class="reaction-btn dislike-btn"
        data-type="${escapeAttr(type)}"
        data-id="${escapeAttr(id)}"
        data-reaction="dislike"
      >
        <i class="fa-regular fa-thumbs-down"></i>
        <span id="dislike-${key}">0</span>
      </button>

    </div>
  `;
}

/* =========================================================
   RATING
   ========================================================= */

function ratingButtons(type, id) {
  const key = safeId(type + "_" + id);

  return `
    <div class="rating-row" data-rating-group="${key}">
      <span class="rating-label">
        <i class="fa-solid fa-star"></i>
        Rating
      </span>

      <div class="rating-stars">
        ${[1, 2, 3, 4, 5]
          .map(
            n => `
              <button
                class="star-btn"
                data-type="${escapeAttr(type)}"
                data-id="${escapeAttr(id)}"
                data-rating="${n}"
                aria-label="${n} star"
              >
                <i class="fa-regular fa-star"></i>
              </button>
            `
          )
          .join("")}
      </div>

      <span class="rating-value" id="rating-${key}">
        0.0
      </span>
    </div>
  `;
}

/* =========================================================
   RENDER APPS
   ========================================================= */

function renderApps() {
  const container = $("#appsGrid");

  if (!container) return;

  container.innerHTML = appData
    .map(
      item => `
      <article
        class="app-card searchable-card"
        data-search="${escapeAttr(item.title)} ${escapeAttr(
          item.description
        )}"
      >

        ${cardImage(item.image, item.title)}

        <div class="card-body">

          <div class="mini-head">

            <div class="app-icon">
              <i class="${escapeAttr(item.icon)}"></i>
            </div>

            <div class="card-title">
              <b>${escapeHTML(item.title)}</b>

              <span>
                ${item.download ? "Android APK" : "App • Mobile Ready"}
              </span>
            </div>

          </div>

          <p class="card-desc">
            ${escapeHTML(item.description)}
          </p>

          <div class="card-actions">

            <a
              class="action-btn primary"
              href="${escapeAttr(item.url)}"
              ${item.download ? "download" : ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-download"></i>

              ${item.download ? "Download APK" : "Open / Get"}
            </a>

            <button
              class="action-btn comment-open"
              data-type="app"
              data-id="${escapeAttr(item.id)}"
            >
              <i class="fa-regular fa-comment"></i>
              Comment
            </button>

          </div>

          ${reactionButtons("app", item.id)}

          ${ratingButtons("app", item.id)}

        </div>
      </article>
    `
    )
    .join("");

  bindDynamicEvents();
}

/* =========================================================
   RENDER WEBSITES
   ========================================================= */

function renderWebsites() {
  const container = $("#websitesGrid");

  if (!container) return;

  container.innerHTML = websiteData
    .map(
      item => `
      <article
        class="website-card searchable-card"
        data-search="${escapeAttr(item.title)} ${escapeAttr(
          item.description
        )}"
      >

        ${cardImage(item.image, item.title)}

        <div class="card-body">

          <div class="mini-head">

            <div class="app-icon website-icon">
              <i class="fa-solid fa-globe"></i>
            </div>

            <div class="card-title">
              <b>${escapeHTML(item.title)}</b>
              <span>Website • Online</span>
            </div>

          </div>

          <p class="card-desc">
            ${escapeHTML(item.description)}
          </p>

          <div class="card-actions">

            <a
              class="action-btn primary"
              href="${escapeAttr(item.demo)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              Visit Website
            </a>

            <button
              class="action-btn comment-open"
              data-type="website"
              data-id="${escapeAttr(item.id)}"
            >
              <i class="fa-regular fa-comment"></i>
              Comment
            </button>

          </div>

          ${reactionButtons("website", item.id)}

          ${ratingButtons("website", item.id)}

        </div>
      </article>
    `
    )
    .join("");

  bindDynamicEvents();
}

/* =========================================================
   RENDER PROJECTS
   ========================================================= */

function renderProjects() {
  const container = $("#projectsGrid");

  if (!container) return;

  container.innerHTML = projectData
    .map(
      item => `
      <article
        class="project-card searchable-card"
        data-search="${escapeAttr(item.title)} ${escapeAttr(
          item.description
        )}"
      >

        ${cardImage(item.image, item.title)}

        <div class="card-body">

          <div class="mini-head">

            <div class="app-icon">
              <i class="${escapeAttr(item.icon)}"></i>
            </div>

            <div class="card-title">
              <b>${escapeHTML(item.title)}</b>
              <span>Developer Project</span>
            </div>

          </div>

          <p class="card-desc">
            ${escapeHTML(item.description)}
          </p>

          <div class="card-actions">

            <a
              class="action-btn primary"
              href="${escapeAttr(item.url || LINKS.github)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github"></i>
              GitHub
            </a>

            <button
              class="action-btn comment-open"
              data-type="project"
              data-id="${escapeAttr(item.id)}"
            >
              <i class="fa-regular fa-comment"></i>
              Comment
            </button>

          </div>

          ${reactionButtons("project", item.id)}

          ${ratingButtons("project", item.id)}

        </div>
      </article>
    `
    )
    .join("");

  bindDynamicEvents();
}

/* =========================================================
   GITHUB
   ========================================================= */

async function loadGitHubRepos() {
  const container = $("#githubLatest");

  if (!container) return;

  container.innerHTML = `
    <div class="loading-box">
      <i class="fa-solid fa-spinner fa-spin"></i>
      Loading GitHub projects...
    </div>
  `;

  try {
    const response = await fetch(
      "https://api.github.com/users/kaviyarasan-1997/repos?sort=updated&direction=desc&per_page=8"
    );

    if (!response.ok) {
      throw new Error("GitHub API error");
    }

    const repos = await response.json();

    if (!repos.length) {
      container.innerHTML = `
        <div class="empty-box">
          No GitHub repositories found.
        </div>
      `;
      return;
    }

    container.innerHTML = repos
      .map(
        repo => `
        <article class="github-card searchable-card"
          data-search="${escapeAttr(repo.name)} ${escapeAttr(
            repo.description || ""
          )}"
        >

          ${cardImage(IMAGES.coding, repo.name)}

          <div class="card-body">

            <div class="github-title">
              <i class="fa-brands fa-github"></i>
              <b>${escapeHTML(repo.name)}</b>
            </div>

            <p class="card-desc">
              ${escapeHTML(
                repo.description || "GitHub development project."
              )}
            </p>

            <div class="github-meta">

              ${
                repo.language
                  ? `<span>
                      <i class="fa-solid fa-code"></i>
                      ${escapeHTML(repo.language)}
                    </span>`
                  : ""
              }

              <span>
                <i class="fa-solid fa-star"></i>
                ${repo.stargazers_count || 0}
              </span>

              <span>
                <i class="fa-solid fa-code-branch"></i>
                ${repo.forks_count || 0}
              </span>

            </div>

            <div class="card-actions">

              <a
                class="action-btn primary"
                href="${escapeAttr(repo.html_url)}"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
                Open GitHub
              </a>

            </div>

          </div>

        </article>
      `
      )
      .join("");

  } catch (error) {
    console.error(error);

    container.innerHTML = `
      <div class="empty-box">
        <i class="fa-brands fa-github"></i>
        GitHub projects couldn't be loaded.
        <button class="retry-btn" id="githubRetry">
          Retry
        </button>
      </div>
    `;

    $("#githubRetry")?.addEventListener(
      "click",
      loadGitHubRepos
    );
  }
}

/* =========================================================
   THEME
   ========================================================= */

function applyTheme(theme) {
  const isLight = theme === "light";

  document.body.classList.toggle("light", isLight);

  localStorage.setItem("info_theme", theme);

  const metaTheme = document.querySelector(
    'meta[name="theme-color"]'
  );

  if (metaTheme) {
    metaTheme.setAttribute(
      "content",
      isLight ? "#ffffff" : "#090b0e"
    );
  }

  const themeButton = $("#themeToggle");

  if (themeButton) {
    themeButton.innerHTML = isLight
      ? `<i class="fa-solid fa-moon"></i>`
      : `<i class="fa-solid fa-sun"></i>`;
  }
}

function initTheme() {
  const savedTheme =
    localStorage.getItem("info_theme") || "dark";

  applyTheme(savedTheme);
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function showSection(sectionName) {
  $$(".page-section").forEach(section => {
    section.classList.remove("active");
  });

  const target = document.getElementById(
    sectionName + "Section"
  );

  if (target) {
    target.classList.add("active");
  }

  $$(".bottom-nav button").forEach(btn => {
    btn.classList.toggle(
      "active",
      btn.dataset.section === sectionName
    );
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function initNavigation() {
  $$(".bottom-nav button").forEach(button => {
    button.addEventListener("click", () => {
      const section = button.dataset.section;

      if (section) {
        showSection(section);
      }
    });
  });
}

/* =========================================================
   HEADER SCROLL
   ========================================================= */

let lastScrollY = window.scrollY;

function initScrollHeader() {
  const header = $(".top-header");

  if (!header) return;

  window.addEventListener(
    "scroll",
    () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY && currentY > 90) {
        header.classList.add("hide-on-scroll");
      } else {
        header.classList.remove("hide-on-scroll");
      }

      lastScrollY = currentY;
    },
    { passive: true }
  );
}

/* =========================================================
   SEARCH
   ========================================================= */

function initSearch() {
  const searchInput = $("#globalSearch");

  if (!searchInput) return;

  searchInput.addEventListener("input", event => {
    const query = event.target.value
      .trim()
      .toLowerCase();

    $$(".searchable-card").forEach(card => {
      const text =
        card.dataset.search?.toLowerCase() || "";

      card.style.display =
        !query || text.includes(query)
          ? ""
          : "none";
    });
  });
}

/* =========================================================
   FIREBASE INTERACTION PATH
   ========================================================= */

function interactionPath(type, id) {
  return ref(
    db,
    `interactions/${safeId(type)}/${safeId(id)}`
  );
}

/* =========================================================
   LOAD INTERACTIONS
   ========================================================= */

function listenInteractions(type, id) {
  const key = safeId(type + "_" + id);

  onValue(interactionPath(type, id), snapshot => {
    const data = snapshot.val() || {};

    const likes = Number(data.likes || 0);
    const dislikes = Number(data.dislikes || 0);

    const likeElement = $(`#like-${key}`);
    const dislikeElement = $(`#dislike-${key}`);
    const ratingElement = $(`#rating-${key}`);

    if (likeElement) {
      likeElement.textContent = likes;
    }

    if (dislikeElement) {
      dislikeElement.textContent = dislikes;
    }

    const ratings = data.ratings || {};

    const values = Object.values(ratings)
      .map(Number)
      .filter(value => value >= 1 && value <= 5);

    const average =
      values.length > 0
        ? values.reduce((a, b) => a + b, 0) /
          values.length
        : 0;

    if (ratingElement) {
      ratingElement.textContent =
        average > 0 ? average.toFixed(1) : "0.0";
    }

    updateReactionUI(type, id, data);
    updateRatingUI(type, id, data);
  });
}

/* =========================================================
   REACTION UI
   ========================================================= */

function updateReactionUI(type, id, data) {
  const saved =
    localStorage.getItem(
      `reaction_${safeId(type)}_${safeId(id)}`
    );

  $$(
    `.reaction-btn[data-type="${CSS.escape(
      type
    )}"][data-id="${CSS.escape(id)}"]`
  ).forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.reaction === saved
    );
  });
}

/* =========================================================
   RATING UI
   ========================================================= */

function updateRatingUI(type, id, data) {
  const saved = Number(
    localStorage.getItem(
      `rating_${safeId(type)}_${safeId(id)}`
    ) || 0
  );

  $$(
    `.star-btn[data-type="${CSS.escape(
      type
    )}"][data-id="${CSS.escape(id)}"]`
  ).forEach(button => {
    const rating = Number(button.dataset.rating);

    button.classList.toggle(
      "selected",
      rating <= saved
    );

    const icon = button.querySelector("i");

    if (icon) {
      icon.className =
        rating <= saved
          ? "fa-solid fa-star"
          : "fa-regular fa-star";
    }
  });
}

/* =========================================================
   REACTION
   ========================================================= */

async function handleReaction(button) {
  const type = button.dataset.type;
  const id = button.dataset.id;
  const reaction = button.dataset.reaction;

  const storageKey =
    `reaction_${safeId(type)}_${safeId(id)}`;

  const previous =
    localStorage.getItem(storageKey);

  try {
    const snapshot = await new Promise(resolve => {
      onValue(
        interactionPath(type, id),
        snap => resolve(snap),
        {
          onlyOnce: true
        }
      );
    });

    const data = snapshot.val() || {};

    let likes = Number(data.likes || 0);
    let dislikes = Number(data.dislikes || 0);

    if (previous === reaction) {
      if (reaction === "like") {
        likes = Math.max(0, likes - 1);
      }

      if (reaction === "dislike") {
        dislikes = Math.max(0, dislikes - 1);
      }

      localStorage.removeItem(storageKey);
    } else {
      if (previous === "like") {
        likes = Math.max(0, likes - 1);
      }

      if (previous === "dislike") {
        dislikes = Math.max(0, dislikes - 1);
      }

      if (reaction === "like") {
        likes++;
      }

      if (reaction === "dislike") {
        dislikes++;
      }

      localStorage.setItem(storageKey, reaction);
    }

    await update(interactionPath(type, id), {
      likes,
      dislikes
    });

    showToast(
      reaction === "like"
        ? "Liked 👍"
        : "Dislike updated"
    );
  } catch (error) {
    console.error(error);
    showToast("Something went wrong");
  }
}

/* =========================================================
   RATING
   ========================================================= */

async function handleRating(button) {
  const type = button.dataset.type;
  const id = button.dataset.id;
  const rating = Number(button.dataset.rating);

  const storageKey =
    `rating_${safeId(type)}_${safeId(id)}`;

  try {
    const currentRef =
      interactionPath(type, id);

    const snapshot = await new Promise(resolve => {
      onValue(
        currentRef,
        snap => resolve(snap),
        {
          onlyOnce: true
        }
      );
    });

    const data = snapshot.val() || {};
    const ratings = data.ratings || {};

    ratings[userId] = rating;

    await update(currentRef, {
      ratings
    });

    localStorage.setItem(
      storageKey,
      String(rating)
    );

    showToast(`Rated ${rating}/5 ⭐`);
  } catch (error) {
    console.error(error);
    showToast("Rating failed");
  }
}

/* =========================================================
   COMMENTS
   ========================================================= */

function openCommentModal(type, id) {
  const modal = $("#commentModal");

  if (!modal) return;

  modal.dataset.type = type;
  modal.dataset.id = id;

  const title = $("#commentModalTitle");

  if (title) {
    title.textContent =
      "Comments";
  }

  const input = $("#commentInput");

  if (input) {
    input.value = "";
  }

  modal.classList.add("show");

  loadComments(type, id);
}

function closeCommentModal() {
  $("#commentModal")?.classList.remove("show");
}

function loadComments(type, id) {
  const list = $("#commentsList");

  if (!list) return;

  const commentsRef = ref(
    db,
    `interactions/${safeId(type)}/${safeId(id)}/comments`
  );

  onValue(commentsRef, snapshot => {
    const comments = snapshot.val() || {};

    const entries = Object.entries(comments);

    if (!entries.length) {
      list.innerHTML = `
        <div class="empty-comments">
          <i class="fa-regular fa-comments"></i>
          <p>No comments yet.</p>
          <small>Be the first to comment.</small>
        </div>
      `;

      return;
    }

    list.innerHTML = entries
      .reverse()
      .map(([commentId, comment]) => {
        const name =
          comment.name ||
          "InfoTalkies User";

        const text =
          comment.text || "";

        const time =
          comment.time || "";

        return `
          <div class="comment-item">

            <div class="comment-avatar">
              <i class="fa-solid fa-user"></i>
            </div>

            <div class="comment-content">

              <div class="comment-top">
                <b>${escapeHTML(name)}</b>
                <small>${escapeHTML(time)}</small>
              </div>

              <p>${escapeHTML(text)}</p>

            </div>

          </div>
        `;
      })
      .join("");
  });
}

async function submitComment() {
  const modal = $("#commentModal");

  if (!modal) return;

  const type = modal.dataset.type;
  const id = modal.dataset.id;

  const input = $("#commentInput");

  if (!input) return;

  const text = input.value.trim();

  if (!text) {
    showToast("Type a comment first");
    return;
  }

  try {
    const commentsRef = ref(
      db,
      `interactions/${safeId(type)}/${safeId(id)}/comments`
    );

    const commentRef = push(commentsRef);

    await set(commentRef, {
      userId,
      name:
        localStorage.getItem("info_username") ||
        "InfoTalkies User",
      text,
      time: new Date().toLocaleString("en-IN"),
      createdAt: Date.now()
    });

    input.value = "";

    showToast("Comment added 💬");
  } catch (error) {
    console.error(error);
    showToast("Comment failed");
  }
}

/* =========================================================
   DYNAMIC EVENTS
   ========================================================= */

function bindDynamicEvents() {
  $$(".reaction-btn").forEach(button => {
    button.onclick = () =>
      handleReaction(button);
  });

  $$(".star-btn").forEach(button => {
    button.onclick = () =>
      handleRating(button);
  });

  $$(".comment-open").forEach(button => {
    button.onclick = () =>
      openCommentModal(
        button.dataset.type,
        button.dataset.id
      );
  });

  listenAllInteractions();
}

/* =========================================================
   LISTEN ALL
   ========================================================= */

function listenAllInteractions() {
  appData.forEach(item => {
    listenInteractions("app", item.id);
  });

  websiteData.forEach(item => {
    listenInteractions("website", item.id);
  });

  projectData.forEach(item => {
    listenInteractions("project", item.id);
  });
}

/* =========================================================
   MODAL
   ========================================================= */

function initModal() {
  $("#commentClose")?.addEventListener(
    "click",
    closeCommentModal
  );

  $("#commentSubmit")?.addEventListener(
    "click",
    submitComment
  );

  $("#commentModal")?.addEventListener(
    "click",
    event => {
      if (
        event.target.id ===
        "commentModal"
      ) {
        closeCommentModal();
      }
    }
  );
}

/* =========================================================
   MENU
   ========================================================= */

function initMenu() {
  const menuButton = $("#menuButton");
  const menu = $("#moreMenu");

  if (!menuButton || !menu) return;

  menuButton.addEventListener(
    "click",
    event => {
      event.stopPropagation();
      menu.classList.toggle("show");
    }
  );

  document.addEventListener(
    "click",
    event => {
      if (
        !menu.contains(event.target) &&
        event.target !== menuButton
      ) {
        menu.classList.remove("show");
      }
    }
  );
}

/* =========================================================
   THEME BUTTON
   ========================================================= */

function initThemeButton() {
  $("#themeToggle")?.addEventListener(
    "click",
    () => {
      const light =
        document.body.classList.contains(
          "light"
        );

      applyTheme(
        light ? "dark" : "light"
      );

      showToast(
        light
          ? "Dark mode enabled"
          : "Light mode enabled"
      );
    }
  );
}

/* =========================================================
   SOCIAL LINKS
   ========================================================= */

function initSocialLinks() {
  $$("[data-social]").forEach(button => {
    button.addEventListener("click", () => {
      const target =
        LINKS[button.dataset.social];

      if (target) {
        window.open(
          target,
          "_blank",
          "noopener,noreferrer"
        );
      }
    });
  });
}

/* =========================================================
   SHARE APP
   ========================================================= */

async function shareApp() {
  const shareData = {
    title: "InfoTalkies",
    text:
      "InfoTalkies – Latest Tech News, AI Updates, Apps, Tips & Tricks – All in Tamil",
    url: window.location.href
  };

  try {
    if (
      navigator.share &&
      typeof navigator.share === "function"
    ) {
      await navigator.share(
        shareData
      );
    } else {
      await navigator.clipboard.writeText(
        window.location.href
      );

      showToast(
        "App link copied 📋"
      );
    }
  } catch (error) {
    if (error?.name !== "AbortError") {
      showToast("Share failed");
    }
  }
}

/* =========================================================
   FEEDBACK / REPORT
   ========================================================= */

function openFeedback(type = "feedback") {
  const subject =
    type === "report"
      ? "InfoTalkies Report"
      : "InfoTalkies Feedback";

  const body =
    type === "report"
      ? "Please describe the issue:\n\n"
      : "My feedback:\n\n";

  window.location.href =
    `mailto:info@infotalkies.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
}

/* =========================================================
   TOAST
   ========================================================= */

let toastTimer;

function showToast(message) {
  let toast = $("#infoToast");

  if (!toast) {
    toast = document.createElement(
      "div"
    );

    toast.id = "infoToast";
    toast.className = "info-toast";

    document.body.appendChild(toast);
  }

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* =========================================================
   PWA / ONLINE STATUS
   ========================================================= */

function updateOnlineStatus() {
  const online =
    navigator.onLine;

  document.body.classList.toggle(
    "offline",
    !online
  );

  if (!online) {
    showToast(
      "You are offline"
    );
  }
}

function initNetwork() {
  window.addEventListener(
    "online",
    () => {
      document.body.classList.remove(
        "offline"
      );

      showToast(
        "Back online ✓"
      );
    }
  );

  window.addEventListener(
    "offline",
    () => {
      document.body.classList.add(
        "offline"
      );

      showToast(
        "No internet connection"
      );
    }
  );

  updateOnlineStatus();
}

/* =========================================================
   USER NAME
   ========================================================= */

function initUserName() {
  const existing =
    localStorage.getItem(
      "info_username"
    );

  if (existing) return;

  const generated =
    "InfoTalkies User";

  localStorage.setItem(
    "info_username",
    generated
  );
}

/* =========================================================
   HOME SOCIAL CTA
   ========================================================= */

function setupSocialButtons() {
  const youtube =
    $("#youtubeButton");

  const instagram =
    $("#instagramButton");

  const facebook =
    $("#facebookButton");

  if (youtube) {
    youtube.onclick = () =>
      window.open(
        LINKS.youtube,
        "_blank",
        "noopener,noreferrer"
      );
  }

  if (instagram) {
    instagram.onclick = () =>
      window.open(
        LINKS.instagram,
        "_blank",
        "noopener,noreferrer"
      );
  }

  if (facebook) {
    facebook.onclick = () =>
      window.open(
        LINKS.facebook,
        "_blank",
        "noopener,noreferrer"
      );
  }
}

/* =========================================================
   EXTERNAL LINK SAFETY
   ========================================================= */

function secureExternalLinks() {
  $$('a[target="_blank"]').forEach(link => {
    link.setAttribute(
      "rel",
      "noopener noreferrer"
    );
  });
}

/* =========================================================
   KEYBOARD SHORTCUT
   ========================================================= */

function initKeyboard() {
  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "/" &&
        document.activeElement.tagName !==
          "INPUT" &&
        document.activeElement.tagName !==
          "TEXTAREA"
      ) {
        event.preventDefault();

        $("#globalSearch")?.focus();
      }

      if (event.key === "Escape") {
        closeCommentModal();

        $("#moreMenu")?.classList.remove(
          "show"
        );
      }
    }
  );
}

/* =========================================================
   ACTIVE SECTION FROM URL HASH
   ========================================================= */

function initHashNavigation() {
  const hash =
    window.location.hash.replace(
      "#",
      ""
    );

  const validSections = [
    "home",
    "discover",
    "websites",
    "apps",
    "projects"
  ];

  if (
    validSections.includes(hash)
  ) {
    showSection(hash);
  }
}

/* =========================================================
   SERVICE WORKER
   ========================================================= */

function registerServiceWorker() {
  if (
    "serviceWorker" in navigator
  ) {
    window.addEventListener(
      "load",
      () => {
        navigator.serviceWorker
          .register("./sw.js")
          .catch(error => {
            console.log(
              "Service worker not registered:",
              error
            );
          });
      }
    );
  }
}

/* =========================================================
   APP INIT
   ========================================================= */

function initApp() {
  initUserName();

  initTheme();

  renderApps();
  renderWebsites();
  renderProjects();

  loadGitHubRepos();

  initNavigation();
  initScrollHeader();
  initSearch();

  initModal();
  initMenu();

  initThemeButton();

  initSocialLinks();
  setupSocialButtons();

  initNetwork();
  initKeyboard();

  secureExternalLinks();

  initHashNavigation();

  registerServiceWorker();

  /* Global share */
  $("#shareApp")?.addEventListener(
    "click",
    shareApp
  );

  /* Feedback */
  $("#feedbackButton")?.addEventListener(
    "click",
    () => openFeedback("feedback")
  );

  /* Report */
  $("#reportButton")?.addEventListener(
    "click",
    () => openFeedback("report")
  );

  console.log(
    "%cInfoTalkies V3 Loaded ✓",
    "font-size:16px;font-weight:bold;"
  );
}

/* =========================================================
   START
   ========================================================= */

if (
  document.readyState ===
  "loading"
) {
  document.addEventListener(
    "DOMContentLoaded",
    initApp
  );
} else {
  initApp();
}