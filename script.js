import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
  getDatabase,
  ref,
  get,
  update,
  push
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js";


/* =========================================
   FIREBASE
========================================= */

const FIREBASE_CONFIG = {

  apiKey:
    "AIzaSyCaALqxdtEPCNxg5XPPG81T9853gOPO4qY",

  authDomain:
    "server-41203.firebaseapp.com",

  databaseURL:
    "https://server-41203-default-rtdb.firebaseio.com",

  projectId:
    "server-41203",

  storageBucket:
    "server-41203.firebasestorage.app",

  messagingSenderId:
    "26278139327",

  appId:
    "1:26278139327:web:db44a7e2d8d42d690abd0a"
};


const firebaseApp =
  initializeApp(FIREBASE_CONFIG);

const db =
  getDatabase(firebaseApp);


/* =========================================
   LINKS
========================================= */

const LINKS = {

  youtube:
    "https://www.youtube.com/@infotalkies",

  instagram:
    "https://www.instagram.com/infotalkies",

  facebook:
    "https://www.facebook.com/infotalkies",

  github:
    "https://github.com/kaviyarasan-1997",

  portfolio:
    "https://kaviyarasan-1997.github.io/Portfolio",

  gamend:
    "https://kaviyarasan-1997.github.io/gamendbot/",

  dyfi:
    "https://dyfitamilnadu.org"

};


/* =========================================
   USER ID
========================================= */

const userId =
  localStorage.getItem("info_user") ||
  "user_" +
  Math.random()
    .toString(36)
    .slice(2,10);

localStorage.setItem(
  "info_user",
  userId
);


/* =========================================
   ONLINE IMAGE LIBRARY
========================================= */

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


/* =========================================
   HELPERS
========================================= */

const $ =
  selector =>
    document.querySelector(selector);


const $$ =
  selector =>
    [...document.querySelectorAll(selector)];


function escapeHTML(value){

  return String(value)
    .replace(
      /[&<>"']/g,
      char => ({
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        '"':"&quot;",
        "'":"&#039;"
      }[char])
    );

}


function showToast(message){

  const toast =
    $("#toast");

  toast.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(
      () => {
        toast.classList.remove(
          "show"
        );
      },
      2200
    );

}


/* =========================================
   IMAGE
========================================= */

function cardImage(
  image,
  title
){

  const fallback =
    "https://picsum.photos/seed/" +
    encodeURIComponent(title) +
    "/900/520";

  return `

    <div class="card-cover">

      <img
        src="${image}"
        alt="${escapeHTML(title)}"
        loading="lazy"
        onerror="
          this.onerror=null;
          this.src='${fallback}';
        "
      >

      <div class="cover-gradient"></div>

      <span class="cover-badge">
        ONLINE LIBRARY
      </span>

    </div>

  `;

}


/* =========================================
   DISCOVER DATA
========================================= */

const discoverData = [

  {
    id:"youtube",
    title:"InfoTalkies YouTube",
    subtitle:"Tech Updates",
    description:
      "Latest tech news, AI updates, apps, tips & tricks in Tamil.",
    icon:"fa-brands fa-youtube",
    image:IMAGES.social,
    url:LINKS.youtube
  },

  {
    id:"instagram",
    title:"InfoTalkies Instagram",
    subtitle:"Tech Reels",
    description:
      "Technology posters, reels and interesting updates.",
    icon:"fa-brands fa-instagram",
    image:IMAGES.instagram,
    url:LINKS.instagram
  },

  {
    id:"facebook",
    title:"InfoTalkies Facebook",
    subtitle:"Community",
    description:
      "Follow the latest InfoTalkies updates.",
    icon:"fa-brands fa-facebook",
    image:IMAGES.team,
    url:LINKS.facebook
  },

  {
    id:"github",
    title:"Kaviyarasan GitHub",
    subtitle:"Open Source",
    description:
      "Explore web apps, Android projects and experiments.",
    icon:"fa-brands fa-github",
    image:IMAGES.coding,
    url:LINKS.github
  },

  {
    id:"youtube-shorts",
    title:"InfoTalkies Shorts",
    subtitle:"Quick Videos",
    description:
      "Short and interesting technology explainers.",
    icon:"fa-brands fa-youtube",
    image:IMAGES.mobile,
    url:LINKS.youtube
  },

  {
    id:"creator",
    title:"Creator Feed",
    subtitle:"Visual Content",
    description:
      "Creative technology content and updates.",
    icon:"fa-solid fa-photo-film",
    image:IMAGES.social,
    url:LINKS.instagram
  }

];


/* =========================================
   WEBSITE DATA
========================================= */

const websiteData = [

  {
    id:"dyfi",
    title:"DYFI Tamil Nadu",
    description:
      "Official web platform.",
    image:IMAGES.team,
    demo:LINKS.dyfi
  },

  {
    id:"gamehub",
    title:"Ultra Pro Game Hub",
    description:
      "Gaming web application.",
    image:IMAGES.gaming,
    demo:LINKS.gamend
  },

  {
    id:"portfolio",
    title:"Kaviyarasan Portfolio",
    description:
      "Developer portfolio.",
    image:IMAGES.laptop,
    demo:LINKS.portfolio
  },

  {
    id:"infotalkies",
    title:"InfoTalkies",
    description:
      "Technology media platform.",
    image:IMAGES.tech,
    demo:LINKS.youtube
  },

  {
    id:"web-demo-5",
    title:"Modern Web Demo",
    description:
      "Responsive modern web interface.",
    image:IMAGES.web,
    demo:LINKS.portfolio
  },

  {
    id:"web-demo-6",
    title:"Creative UI Demo",
    description:
      "Creative website interface.",
    image:IMAGES.coding,
    demo:LINKS.portfolio
  },

  {
    id:"web-demo-7",
    title:"Mobile UI Demo",
    description:
      "Mobile-first interface.",
    image:IMAGES.mobile,
    demo:LINKS.portfolio
  },

  {
    id:"web-demo-8",
    title:"JavaScript Lab",
    description:
      "JavaScript experiment.",
    image:IMAGES.coding,
    demo:LINKS.portfolio
  },

  {
    id:"web-demo-9",
    title:"App Store UI",
    description:
      "App-store style web interface.",
    image:IMAGES.mobile,
    demo:LINKS.portfolio
  },

  {
    id:"web-demo-10",
    title:"Experimental Project",
    description:
      "Experimental web project.",
    image:IMAGES.ai,
    demo:LINKS.portfolio
  }

];


/* =========================================
   APP DATA
========================================= */

const appData = [

  {
    id:"gamehub",
    title:"Ultra Pro Game Hub",
    description:
      "Gaming hub and game collection.",
    icon:"fa-solid fa-gamepad",
    image:IMAGES.gaming,
    url:LINKS.gamend
  },

  {
    id:"dyfi-app",
    title:"DYFI Tamil Nadu",
    description:
      "Organisation web application.",
    icon:"fa-solid fa-users",
    image:IMAGES.team,
    url:LINKS.dyfi
  },

  {
    id:"rhythm",
    title:"Rhythm Music",
    description:
      "Modern music player concept.",
    icon:"fa-solid fa-music",
    image:IMAGES.music,
    url:LINKS.portfolio
  },

  {
    id:"info-app",
    title:"InfoTalkies",
    description:
      "Technology media application.",
    icon:"fa-solid fa-bolt",
    image:IMAGES.tech,
    url:LINKS.youtube
  },

  {
    id:"note",
    title:"Note Studio",
    description:
      "Advanced notes application.",
    icon:"fa-solid fa-note-sticky",
    image:IMAGES.notes,
    url:LINKS.portfolio
  },

  {
    id:"fitness",
    title:"Fitness Pro",
    description:
      "Workout planner application.",
    icon:"fa-solid fa-dumbbell",
    image:IMAGES.fitness,
    url:LINKS.portfolio
  },

  {
    id:"ai-chat",
    title:"AI Chat Hub",
    description:
      "AI assistant application concept.",
    icon:"fa-solid fa-robot",
    image:IMAGES.ai,
    url:LINKS.portfolio
  },

  {
    id:"game-center",
    title:"Game Center",
    description:
      "Game collection interface.",
    icon:"fa-solid fa-dice",
    image:IMAGES.gaming2,
    url:LINKS.gamend
  },

  {
    id:"project-manager",
    title:"Project Manager",
    description:
      "Developer utility application.",
    icon:"fa-solid fa-code",
    image:IMAGES.coding,
    url:LINKS.portfolio
  },

  {
    id:"media-toolkit",
    title:"Media Toolkit",
    description:
      "Creator utility tools.",
    icon:"fa-solid fa-wand-magic-sparkles",
    image:IMAGES.social,
    url:LINKS.portfolio
  }

];


/* =========================================
   PROJECT DATA
========================================= */

const projectData = [

  {
    id:"arduino",
    title:"Arduino Projects",
    description:
      "Boards, sensors and electronics experiments.",
    icon:"fa-solid fa-microchip",
    image:IMAGES.tech
  },

  {
    id:"automation",
    title:"Automation",
    description:
      "Automation and hardware projects.",
    icon:"fa-solid fa-gears",
    image:IMAGES.android
  },

  {
    id:"fullstack",
    title:"Full Stack Projects",
    description:
      "HTML, CSS, JavaScript and Firebase.",
    icon:"fa-solid fa-code",
    image:IMAGES.coding
  },

  {
    id:"ai",
    title:"AI Experiments",
    description:
      "AI powered application concepts.",
    icon:"fa-solid fa-brain",
    image:IMAGES.ai
  },

  {
    id:"ui",
    title:"Web UI Lab",
    description:
      "Responsive interface experiments.",
    icon:"fa-solid fa-palette",
    image:IMAGES.web
  },

  {
    id:"android",
    title:"Android WebView",
    description:
      "Web-to-app Android projects.",
    icon:"fa-brands fa-android",
    image:IMAGES.android
  },

  {
    id:"firebase",
    title:"Firebase Apps",
    description:
      "Realtime Firebase projects.",
    icon:"fa-solid fa-database",
    image:IMAGES.database
  },

  {
    id:"game-ui",
    title:"Game UI Lab",
    description:
      "Interactive game interfaces.",
    icon:"fa-solid fa-gamepad",
    image:IMAGES.gaming2
  },

  {
    id:"media",
    title:"Media Tools",
    description:
      "Creator utility projects.",
    icon:"fa-solid fa-photo-film",
    image:IMAGES.social
  },

  {
    id:"opensource",
    title:"Open Source",
    description:
      "Reusable GitHub projects.",
    icon:"fa-brands fa-github",
    image:IMAGES.coding
  }

];


/* =========================================
   REACTION BUTTONS
========================================= */

function reactionButtons(
  type,
  id
){

  return `

    <div class="react-row">

      <button
        class="react-btn react-action"
        data-type="${type}"
        data-id="${id}"
        data-reaction="like"
      >

        <i class="fa-regular fa-heart"></i>

        Like

        <b>0</b>

      </button>


      <button
        class="react-btn react-action"
        data-type="${type}"
        data-id="${id}"
        data-reaction="dislike"
      >

        <i class="fa-regular fa-thumbs-down"></i>

        Dislike

        <b>0</b>

      </button>

    </div>

  `;

}


/* =========================================
   RATING
========================================= */

function ratingButtons(
  type,
  id
){

  return `

    <div
      class="rating"
      data-rating="${type}:${id}"
    >

      ${[1,2,3,4,5]
        .map(number => `

          <button
            data-rate="${number}"
            data-type="${type}"
            data-id="${id}"
          >

            <i class="fa-solid fa-star"></i>

          </button>

        `)
        .join("")}

    </div>

  `;

}


/* =========================================
   DISCOVER RENDER
========================================= */

function renderDiscover(){

  const container =
    $("#discoverGrid");

  container.innerHTML =
    discoverData
      .map(item => {

        return `

          <article
            class="social-card searchable-card"
            data-search="
              ${escapeHTML(item.title)}
              ${escapeHTML(item.subtitle)}
              ${escapeHTML(item.description)}
            "
          >

            ${cardImage(
              item.image,
              item.title
            )}

            <div class="card-body">

              <div class="mini-head">

                <div class="platform-icon">
                  <i class="${item.icon}"></i>
                </div>

                <div class="card-title">

                  <b>
                    ${escapeHTML(item.title)}
                  </b>

                  <span>
                    ${escapeHTML(item.subtitle)}
                  </span>

                </div>

              </div>

              <p class="card-desc">
                ${escapeHTML(item.description)}
              </p>

              <div class="card-actions">

                <a
                  class="action-btn primary"
                  href="${item.url}"
                  target="_blank"
                  rel="noopener"
                >
                  <i class="fa-solid fa-link"></i>
                  Open
                </a>

                <button
                  class="action-btn comment-open"
                  data-type="discover"
                  data-id="${item.id}"
                >
                  <i class="fa-regular fa-comment"></i>
                  Comments
                </button>

              </div>

              ${reactionButtons(
                "discover",
                item.id
              )}

              ${ratingButtons(
                "discover",
                item.id
              )}

            </div>

          </article>

        `;

      })
      .join("");

}


/* =========================================
   WEBSITE RENDER
========================================= */

function renderWebsites(){

  const container =
    $("#websitesGrid");

  container.innerHTML =
    websiteData
      .map(item => {

        return `

          <article
            class="website-card searchable-card"
            data-search="
              ${escapeHTML(item.title)}
              ${escapeHTML(item.description)}
            "
          >

            ${cardImage(
              item.image,
              item.title
            )}

            <div class="card-body">

              <div class="mini-head">

                <div class="platform-icon">

                  <i class="fa-solid fa-globe"></i>

                </div>

                <div class="card-title">

                  <b>
                    ${escapeHTML(item.title)}
                  </b>

                  <span>
                    Website
                  </span>

                </div>

              </div>


              <p class="card-desc">

                ${escapeHTML(
                  item.description
                )}

              </p>


              <div class="card-actions">

                <a
                  class="action-btn primary"
                  href="${item.demo}"
                  target="_blank"
                  rel="noopener"
                >

                  <i class="fa-solid fa-eye"></i>

                  Demo

                </a>


                <a
                  class="action-btn"
                  href="${LINKS.github}"
                  target="_blank"
                  rel="noopener"
                >

                  <i class="fa-brands fa-github"></i>

                  Source

                </a>

              </div>


              ${reactionButtons(
                "website",
                item.id
              )}


              ${ratingButtons(
                "website",
                item.id
              )}


              <button
                class="comment-btn comment-open"
                data-type="website"
                data-id="${item.id}"
              >

                <i class="fa-regular fa-comment"></i>

                View / Add Comments

              </button>

            </div>

          </article>

        `;

      })
      .join("");

}


/* =========================================
   APP RENDER
========================================= */

function renderApps(){

  const container =
    $("#appsGrid");

  container.innerHTML =
    appData
      .map(item => {

        return `

          <article
            class="app-card searchable-card"
            data-search="
              ${escapeHTML(item.title)}
              ${escapeHTML(item.description)}
            "
          >

            ${cardImage(
              item.image,
              item.title
            )}

            <div class="card-body">

              <div class="mini-head">

                <div class="app-icon">

                  <i class="${item.icon}"></i>

                </div>

                <div class="card-title">

                  <b>
                    ${escapeHTML(item.title)}
                  </b>

                  <span>
                    App • Mobile Ready
                  </span>

                </div>

              </div>


              <p class="card-desc">

                ${escapeHTML(
                  item.description
                )}

              </p>


              <div class="card-actions">

                <a
                  class="action-btn primary"
                  href="${item.url}"
                  target="_blank"
                  rel="noopener"
                >

                  <i class="fa-solid fa-download"></i>

                  Open / Get

                </a>


                <button
                  class="action-btn comment-open"
                  data-type="app"
                  data-id="${item.id}"
                >

                  <i class="fa-regular fa-comment"></i>

                  Comment

                </button>

              </div>


              ${reactionButtons(
                "app",
                item.id
              )}


              ${ratingButtons(
                "app",
                item.id
              )}

            </div>

          </article>

        `;

      })
      .join("");

}


/* =========================================
   PROJECT RENDER
========================================= */

function renderProjects(){

  const container =
    $("#projectsGrid");

  container.innerHTML =
    projectData
      .map(item => {

        return `

          <article
            class="project-card searchable-card"
            data-search="
              ${escapeHTML(item.title)}
              ${escapeHTML(item.description)}
            "
          >

            ${cardImage(
              item.image,
              item.title
            )}

            <div class="card-body">

              <div class="mini-head">

                <div class="project-icon">

                  <i class="${item.icon}"></i>

                </div>

                <div class="card-title">

                  <b>
                    ${escapeHTML(item.title)}
                  </b>

                  <span>
                    Tech Project
                  </span>

                </div>

              </div>


              <p class="card-desc">

                ${escapeHTML(
                  item.description
                )}

              </p>


              <div class="card-actions">

                <a
                  class="action-btn primary"
                  href="${LINKS.github}"
                  target="_blank"
                  rel="noopener"
                >

                  <i class="fa-brands fa-github"></i>

                  GitHub

                </a>


                <button
                  class="action-btn comment-open"
                  data-type="project"
                  data-id="${item.id}"
                >

                  <i class="fa-regular fa-comment"></i>

                  Discuss

                </button>

              </div>


              ${reactionButtons(
                "project",
                item.id
              )}


              ${ratingButtons(
                "project",
                item.id
              )}

            </div>

          </article>

        `;

      })
      .join("");

}


/* =========================================
   FIREBASE DATA
========================================= */

async function getInteraction(
  type,
  id
){

  try{

    const snapshot =
      await get(
        ref(
          db,
          `interactions/${type}/${id}`
        )
      );

    if(
      snapshot.exists()
    ){

      return snapshot.val();

    }

  }catch(error){

    console.log(
      "Firebase read:",
      error
    );

  }


  return {

    likes:0,

    dislikes:0,

    ratingTotal:0,

    ratingCount:0,

    ratings:{},

    comments:{}

  };

}


/* =========================================
   UPDATE UI
========================================= */

async function updateInteractions(){

  for(
    const button
    of $$(".react-action")
  ){

    const data =
      await getInteraction(
        button.dataset.type,
        button.dataset.id
      );

    const count =
      button.dataset.reaction === "like"
        ? data.likes || 0
        : data.dislikes || 0;

    const number =
      button.querySelector("b");

    if(number){

      number.textContent =
        count;

    }

    const saved =
      localStorage.getItem(
        `react_${button.dataset.type}_${button.dataset.id}`
      );

    button.classList.toggle(
      "active",
      saved === button.dataset.reaction
    );

  }


  for(
    const box
    of $$(".rating")
  ){

    const [
      type,
      id
    ] =
      box.dataset.rating.split(":");


    const data =
      await getInteraction(
        type,
        id
      );


    const myRating =
      Number(
        data.ratings?.[userId] || 0
      );


    box
      .querySelectorAll(
        "[data-rate]"
      )
      .forEach(button => {

        button.classList.toggle(
          "active",
          Number(
            button.dataset.rate
          ) <= myRating
        );

      });

  }

}


/* =========================================
   LIKE / DISLIKE
========================================= */

async function react(
  type,
  id,
  reaction
){

  const databaseRef =
    ref(
      db,
      `interactions/${type}/${id}`
    );


  const data =
    await getInteraction(
      type,
      id
    );


  const previous =
    localStorage.getItem(
      `react_${type}_${id}`
    );


  data.likes =
    data.likes || 0;

  data.dislikes =
    data.dislikes || 0;


  if(
    previous === reaction
  ){

    if(
      reaction === "like"
    ){

      data.likes--;

    }else{

      data.dislikes--;

    }


    localStorage.removeItem(
      `react_${type}_${id}`
    );

  }else{

    if(previous){

      if(
        previous === "like"
      ){

        data.likes--;

      }else{

        data.dislikes--;

      }

    }


    if(
      reaction === "like"
    ){

      data.likes++;

    }else{

      data.dislikes++;

    }


    localStorage.setItem(
      `react_${type}_${id}`,
      reaction
    );

  }


  await update(
    databaseRef,
    data
  );


  showToast(
    reaction === "like"
      ? "Liked ❤️"
      : "Disliked 👎"
  );


  updateInteractions();

}


/* =========================================
   RATING
========================================= */

async function rate(
  type,
  id,
  value
){

  const databaseRef =
    ref(
      db,
      `interactions/${type}/${id}`
    );


  const data =
    await getInteraction(
      type,
      id
    );


  data.ratings =
    data.ratings || {};

  data.ratingTotal =
    data.ratingTotal || 0;

  data.ratingCount =
    data.ratingCount || 0;


  const previous =
    Number(
      data.ratings[userId] || 0
    );


  if(previous){

    data.ratingTotal -=
      previous;

  }else{

    data.ratingCount++;

  }


  data.ratingTotal +=
    value;

  data.ratings[userId] =
    value;


  await update(
    databaseRef,
    data
  );


  showToast(
    `Rated ${value}/5 ⭐`
  );


  updateInteractions();

}


/* =========================================
   COMMENTS
========================================= */

async function openComments(
  type,
  id
){

  const data =
    await getInteraction(
      type,
      id
    );


  const comments =
    Object.values(
      data.comments || {}
    );


  openModal(`

    <h2>
      <i
        class="fa-regular fa-comments"
        style="color:var(--accent)"
      ></i>

      Comments
    </h2>


    <p
      class="modal-sub"
    >
      Share your thoughts about this item.
    </p>


    <div class="comment-box">

      <textarea
        id="commentText"
        placeholder="Write a comment..."
      ></textarea>


      <button
        class="primary-btn"
        id="sendComment"
        style="
          width:100%;
          margin-top:8px;
        "
      >

        Post Comment

      </button>

    </div>


    <div class="comment-list">

      ${
        comments.length

        ?

        comments
          .slice(-30)
          .reverse()
          .map(comment => `

            <div class="comment-item">

              <b>
                ${escapeHTML(
                  comment.user ||
                  "User"
                )}
              </b>

              ${escapeHTML(
                comment.text || ""
              )}

            </div>

          `)
          .join("")

        :

        `<div class="modal-sub">
          No comments yet.
        </div>`

      }

    </div>

  `);


  $("#sendComment").onclick =
    async () => {

      const textarea =
        $("#commentText");


      const text =
        textarea.value.trim();


      if(!text){

        showToast(
          "Write a comment first"
        );

        return;

      }


      await push(
        ref(
          db,
          `interactions/${type}/${id}/comments`
        ),
        {

          user:"InfoTalkies User",

          userId:userId,

          text:text,

          createdAt:
            Date.now()

        }
      );


      showToast(
        "Comment posted 💬"
      );


      openComments(
        type,
        id
      );

    };

}


/* =========================================
   MODAL
========================================= */

function openModal(content){

  $("#modalContent").innerHTML =
    content;

  $("#modalBackdrop")
    .classList
    .add("show");

}


function closeModal(){

  $("#modalBackdrop")
    .classList
    .remove("show");

}


/* =========================================
   MENU
========================================= */

function openMenu(){

  openModal(`

    <h2>
      More
    </h2>

    <p class="modal-sub">
      InfoTalkies controls & connections
    </p>


    <div class="menu-list">

      <button
        data-action="about"
      >

        <i
          class="fa-solid fa-circle-info"
        ></i>

        About Developer

      </button>


      <a
        href="${LINKS.github}"
        target="_blank"
        rel="noopener"
      >

        <i
          class="fa-brands fa-github"
        ></i>

        GitHub

      </a>


      <button
        data-action="settings"
      >

        <i
          class="fa-solid fa-sliders"
        ></i>

        Settings

      </button>


      <button
        data-action="feedback"
      >

        <i
          class="fa-regular fa-message"
        ></i>

        Feedback

      </button>


      <button
        data-action="report"
      >

        <i
          class="fa-solid fa-flag"
        ></i>

        Report Issue

      </button>

    </div>

  `);

}


/* =========================================
   ABOUT
========================================= */

function openAbout(){

  openModal(`

    <h2>
      About InfoTalkies
    </h2>


    <p class="modal-sub">

      InfoTalkies is a technology
      discovery platform for apps,
      websites, projects, AI updates
      and useful tech information.

    </p>


    <div class="menu-list">

      <a
        href="${LINKS.portfolio}"
        target="_blank"
      >

        <i class="fa-solid fa-user"></i>

        T. Kaviarasan | Portfolio

      </a>


      <a
        href="${LINKS.github}"
        target="_blank"
      >

        <i class="fa-brands fa-github"></i>

        GitHub Profile

      </a>


      <a
        href="${LINKS.youtube}"
        target="_blank"
      >

        <i class="fa-brands fa-youtube"></i>

        InfoTalkies YouTube

      </a>


      <a
        href="${LINKS.instagram}"
        target="_blank"
      >

        <i class="fa-brands fa-instagram"></i>

        InfoTalkies Instagram

      </a>

    </div>

  `);

}


/* =========================================
   SETTINGS
========================================= */

function openSettings(){

  openModal(`

    <h2>
      Settings
    </h2>


    <p class="modal-sub">

      Customize your InfoTalkies
      experience.

    </p>


    <div class="settings-group">

      <h4>
        THEME
      </h4>


      <div class="choice-row">

        <button
          class="choice"
          id="darkThemeBtn"
        >

          🌙 Dark

        </button>


        <button
          class="choice"
          id="lightThemeBtn"
        >

          ☀️ Light

        </button>

      </div>

    </div>


    <div class="settings-group">

      <h4>
        ACCENT COLOR
      </h4>


      <div class="choice-row">

        <button
          class="choice"
          data-accent="#22c55e"
        >
          🟢 Green
        </button>


        <button
          class="choice"
          data-accent="#38bdf8"
        >
          🔵 Blue
        </button>


        <button
          class="choice"
          data-accent="#a78bfa"
        >
          🟣 Purple
        </button>


        <button
          class="choice"
          data-accent="#f97316"
        >
          🟠 Orange
        </button>


        <button
          class="choice"
          data-accent="#ef4444"
        >
          🔴 Red
        </button>

      </div>

    </div>

  `);


  $("#darkThemeBtn").onclick =
    () => {

      applyTheme("dark");

      showToast(
        "Dark theme enabled 🌙"
      );

    };


  $("#lightThemeBtn").onclick =
    () => {

      applyTheme("light");

      showToast(
        "Light theme enabled ☀️"
      );

    };


  document
    .querySelectorAll(
      "[data-accent]"
    )
    .forEach(button => {

      button.onclick =
        () => {

          const color =
            button.dataset.accent;


          document.documentElement
            .style
            .setProperty(
              "--accent",
              color
            );


          localStorage.setItem(
            "info_accent",
            color
          );


          showToast(
            "Accent color updated"
          );

        };

    });

}


/* =========================================
   FEEDBACK / REPORT
========================================= */

function openForm(type){

  const title =
    type === "feedback"
      ? "Send Feedback"
      : "Report an Issue";


  openModal(`

    <h2>
      ${title}
    </h2>


    <div class="form-group">

      <label>
        NAME
      </label>

      <input
        id="formName"
        placeholder="Your name"
      >

    </div>


    <div class="form-group">

      <label>
        MESSAGE
      </label>

      <textarea
        id="formMessage"
        placeholder="Write here..."
      ></textarea>

    </div>


    <button
      class="primary-btn"
      id="submitForm"
      style="
        width:100%;
        margin-top:12px;
      "
    >

      Submit

    </button>

  `);


  $("#submitForm").onclick =
    async () => {

      const message =
        $("#formMessage")
          .value
          .trim();


      if(!message){

        showToast(
          "Enter a message"
        );

        return;

      }


      await push(

        ref(
          db,
          type === "feedback"
            ? "feedbacks"
            : "reports"
        ),

        {

          name:
            $("#formName")
              .value
              .trim() ||
            "Anonymous",

          message:

            message,

          userId:

            userId,

          createdAt:

            Date.now()

        }

      );


      closeModal();

      showToast(
        "Submitted successfully"
      );

    };

}


/* =========================================
   THEME
========================================= */

function applyTheme(
  theme
){

  if(
    theme === "light"
  ){

    document.body
      .classList
      .add("light");

  }else{

    document.body
      .classList
      .remove("light");

  }


  localStorage.setItem(
    "info_theme",
    theme
  );


  const meta =
    document.querySelector(
      'meta[name="theme-color"]'
    );


  if(meta){

    meta.setAttribute(
      "content",

      theme === "light"
        ? "#f3f6f8"
        : "#090b0e"

    );

  }

}


/* =========================================
   NAVIGATION
========================================= */

function navigate(
  page
){

  document
    .querySelectorAll(".page")
    .forEach(section => {

      section.classList.toggle(
        "active",
        section.dataset.page === page
      );

    });


  document
    .querySelectorAll(".nav-item")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.nav === page
      );

    });


  $("#mainScroll")
    .scrollTo({
      top:0,
      behavior:"smooth"
    });


  $("#globalSearch")
    .value = "";


  $("#clearSearch")
    .style
    .display = "none";


  $("#noResults")
    .classList
    .add("hidden");

}


/* =========================================
   SEARCH
========================================= */

$("#globalSearch")
  .addEventListener(
    "input",
    () => {

      const query =
        $("#globalSearch")
          .value
          .toLowerCase()
          .trim();


      const activePage =
        document.querySelector(
          ".page.active"
        );


      const cards =
        activePage
          ?.querySelectorAll(
            ".searchable-card"
          ) || [];


      let found = 0;


      cards.forEach(card => {

        const text =
          (
            card.dataset.search ||
            card.textContent
          )
          .toLowerCase();


        const visible =
          !query ||
          text.includes(query);


        card.style.display =
          visible
            ? ""
            : "none";


        if(visible){

          found++;

        }

      });


      $("#clearSearch")
        .style
        .display =
          query
            ? "grid"
            : "none";


      $("#noResults")
        .classList
        .toggle(
          "hidden",
          !query || found > 0
        );

    }
  );


$("#clearSearch")
  .onclick = () => {

    $("#globalSearch")
      .value = "";

    $("#globalSearch")
      .dispatchEvent(
        new Event("input")
      );

  };


/* =========================================
   SCROLL HEADER
========================================= */

let previousScroll = 0;


$("#mainScroll")
  .addEventListener(
    "scroll",
    () => {

      const current =
        $("#mainScroll")
          .scrollTop;


      const header =
        $("#topHeader");


      if(
        current >
        previousScroll + 8
        &&
        current > 40
      ){

        header.style.transform =
          "translateY(-70px)";

      }


      if(
        current <
        previousScroll - 8
      ){

        header.style.transform =
          "translateY(0)";

      }


      previousScroll =
        current;

    }
  );


/* =========================================
   CLICK HANDLER
========================================= */

document.addEventListener(
  "click",
  event => {

    const nav =
      event.target
        .closest("[data-nav]");


    if(nav){

      navigate(
        nav.dataset.nav
      );

      return;

    }


    const reactionButton =
      event.target
        .closest(".react-action");


    if(reactionButton){

      react(
        reactionButton.dataset.type,
        reactionButton.dataset.id,
        reactionButton.dataset.reaction
      );

      return;

    }


    const rateButton =
      event.target
        .closest("[data-rate]");


    if(rateButton){

      rate(
        rateButton.dataset.type,
        rateButton.dataset.id,
        Number(
          rateButton.dataset.rate
        )
      );

      return;

    }


    const commentButton =
      event.target
        .closest(".comment-open");


    if(commentButton){

      openComments(
        commentButton.dataset.type,
        commentButton.dataset.id
      );

      return;

    }


    const action =
      event.target
        .closest("[data-action]")
        ?.dataset
        .action;


    if(action === "settings"){

      openSettings();

      return;

    }


    if(action === "about"){

      openAbout();

      return;

    }


    if(action === "feedback"){

      openForm(
        "feedback"
      );

      return;

    }


    if(action === "report"){

      openForm(
        "report"
      );

      return;

    }


  }
);


/* =========================================
   MENU
========================================= */

$("#menuBtn")
  .onclick =
    openMenu;


/* =========================================
   MODAL CLOSE
========================================= */

$("#modalClose")
  .onclick =
    closeModal;


$("#modalBackdrop")
  .onclick =
    event => {

      if(
        event.target.id ===
        "modalBackdrop"
      ){

        closeModal();

      }

    };


/* =========================================
   GITHUB
========================================= */

async function loadGitHub(){

  const container =
    $("#githubHomeGrid");


  container.innerHTML = `

    <div class="loading">
      Loading GitHub...
    </div>

  `;


  try{

    const response =
      await fetch(
        "https://api.github.com/users/kaviyarasan-1997/repos?sort=updated&direction=desc&per_page=8"
      );


    if(!response.ok){

      throw new Error(
        "GitHub error"
      );

    }


    const repositories =
      await response.json();


    const repos =
      repositories
        .filter(repo => !repo.fork)
        .slice(0,6);


    if(!repos.length){

      throw new Error(
        "No repositories"
      );

    }


    container.innerHTML =
      repos
        .map(repo => {

          return `

            <article
              class="repo-card searchable-card"
              data-search="
                ${escapeHTML(
                  repo.name
                )}

                ${escapeHTML(
                  repo.description || ""
                )}
              "
            >

              ${cardImage(
                IMAGES.coding,
                repo.name
              )}


              <div class="card-body">

                <div class="mini-head">

                  <div class="platform-icon">

                    <i
                      class="fa-brands fa-github"
                    ></i>

                  </div>


                  <div class="card-title">

                    <b>
                      ${escapeHTML(
                        repo.name
                      )}
                    </b>

                    <span>
                      ${escapeHTML(
                        repo.language ||
                        "Code"
                      )}
                    </span>

                  </div>

                </div>


                <p class="card-desc">

                  ${escapeHTML(
                    repo.description ||
                    "Open-source project."
                  )}

                </p>


                <div class="card-actions">

                  <a
                    class="action-btn primary"
                    href="${repo.html_url}"
                    target="_blank"
                    rel="noopener"
                  >

                    <i
                      class="fa-brands fa-github"
                    ></i>

                    Open

                  </a>

                </div>

              </div>

            </article>

          `;

        })
        .join("");


  }catch(error){

    console.log(
      "GitHub error:",
      error
    );


    container.innerHTML = `

      <div class="loading">

        GitHub could not be loaded.

        <br><br>

        <a
          class="primary-btn"
          href="${LINKS.github}"
          target="_blank"
        >

          Open GitHub

        </a>

      </div>

    `;

  }

}


/* =========================================
   START
========================================= */

renderDiscover();

renderWebsites();

renderApps();

renderProjects();

loadGitHub();

updateInteractions();


/* SAVED THEME */

const savedTheme =
  localStorage.getItem(
    "info_theme"
  ) || "dark";

applyTheme(
  savedTheme
);


/* SAVED ACCENT */

const savedAccent =
  localStorage.getItem(
    "info_accent"
  );


if(savedAccent){

  document.documentElement
    .style
    .setProperty(
      "--accent",
      savedAccent
    );

}