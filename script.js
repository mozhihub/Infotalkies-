/* =========================================================
   INFOTALKIES ULTRA PRO MAX
   Firebase + LocalStorage fallback
========================================================= */

const LINKS = {

  youtube:
    "https://youtube.com/@infotalkies?si=DfXncb06IETSNsQj",

  instagram:
    "https://www.instagram.com/in.fotalkies/",

  facebook:
    "https://www.facebook.com/share/1DtYRy79xB/",

  developerInstagram:
    "https://www.instagram.com/kaviyarasan.1997/",

  developerFacebook:
    "https://www.facebook.com/share/1CrmC7uUqJ/",

  linkedin:
    "https://www.linkedin.com/in/kaviyarasan1997",

  github:
    "https://github.com/kaviyarasan-1997",

  portfolio:
    "https://kaviyarasan-1997.github.io/Portfolio",

  gamend:
    "https://kaviyarasan-1997.github.io/gamendbot/",

  rhythm:
    "https://mozhihub.github.io/MUSIC/",

  downloader:
    "https://mozhihub.github.io/Downloader/",

  signature:
    "https://mozhihub.github.io/signature/",

  vote:
    "https://kaviyarasan-1997.github.io/Vote/"
};


/* =========================================================
   FIREBASE
========================================================= */

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


let db = null;

let firebaseFunctions = {};

let firebaseState = {};

let firebaseReady = false;


/* Dynamic Firebase load */
async function initFirebase(){

  try{

    const appModule = await import(
      "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js"
    );

    const dbModule = await import(
      "https://www.gstatic.com/firebasejs/10.14.1/firebase-database.js"
    );

    const app =
      appModule.initializeApp(FIREBASE_CONFIG);

    db =
      dbModule.getDatabase(app);

    firebaseFunctions = dbModule;

    firebaseReady = true;

    listenFirebaseCards();

    console.log("Firebase connected");

  }catch(error){

    firebaseReady = false;

    console.warn(
      "Firebase unavailable. LocalStorage fallback enabled.",
      error
    );

  }

}


/* Listen to all card data */
function listenFirebaseCards(){

  if(!firebaseReady) return;

  const databaseRef =
    firebaseFunctions.ref(
      db,
      "infotalkies/cards"
    );

  firebaseFunctions.onValue(
    databaseRef,
    snapshot => {

      firebaseState =
        snapshot.val() || {};

      refreshAllCardStats();

    }
  );
}


/* =========================================================
   DATA
========================================================= */

const discoverData = [

  ["AI Revolution","Artificial Intelligence","AI is changing the way people create, search and work.","fa-solid fa-brain"],

  ["AI Agents","Artificial Intelligence","Autonomous AI agents can perform multi-step digital tasks.","fa-solid fa-robot"],

  ["Smart Search","Search Technology","Modern search is becoming more conversational and intelligent.","fa-solid fa-magnifying-glass"],

  ["Future Phones","Mobile Tech","The smartphone experience continues to evolve with AI.","fa-solid fa-mobile-screen"],

  ["Cloud Computing","Cloud","Cloud platforms power modern applications and services.","fa-solid fa-cloud"],

  ["Cyber Security","Security","Digital security is becoming essential for every user.","fa-solid fa-shield-halved"],

  ["Quantum Computing","Future Tech","Quantum computing explores a completely different computing model.","fa-solid fa-atom"],

  ["Robotics","Robotics","Robots are increasingly being integrated into real-world workflows.","fa-solid fa-robot"],

  ["AR & VR","Immersive Tech","Augmented and virtual reality create new digital experiences.","fa-solid fa-vr-cardboard"],

  ["Electric Mobility","Technology","Electric mobility is transforming transportation.","fa-solid fa-car-side"],

  ["5G Technology","Connectivity","High-speed connectivity enables new digital experiences.","fa-solid fa-tower-cell"],

  ["Open Source","Developer","Open-source software powers a huge part of the internet.","fa-brands fa-github"],

  ["Digital Privacy","Privacy","Privacy awareness is becoming more important in the connected world.","fa-solid fa-user-shield"],

  ["Smart Homes","IoT","Connected devices are making homes increasingly automated.","fa-solid fa-house-signal"],

  ["AI Creativity","Generative AI","AI tools can assist with images, video, writing and design.","fa-solid fa-wand-magic-sparkles"],

  ["Developer Tools","Programming","Modern developer tools make software creation faster.","fa-solid fa-code"],

  ["Web 3.0","Web Technology","The web continues to evolve through decentralised technologies.","fa-solid fa-link"],

  ["Digital Payments","FinTech","Digital payment systems are changing everyday transactions.","fa-solid fa-credit-card"],

  ["Data Science","Data","Data analysis helps organisations make informed decisions.","fa-solid fa-chart-line"],

  ["Future Internet","Innovation","The next generation of internet experiences is being built now.","fa-solid fa-globe"]
];


const websitesData = [

  ["InfoTalkies Portfolio", "Portfolio", "Personal developer portfolio and projects.", LINKS.portfolio, "fa-solid fa-id-card"],
  ["GAMEND", "Gaming", "Interactive game hub and gaming projects.", LINKS.gamend, "fa-solid fa-gamepad"],
  ["Rhythm Music", "Music", "Modern web music application.", LINKS.rhythm, "fa-solid fa-music"],
  ["Downloader", "Utility", "Media utility and downloader project.", LINKS.downloader, "fa-solid fa-download"],
  ["Signature", "Utility", "Digital signature web tool.", LINKS.signature, "fa-solid fa-signature"],
  ["Online Voting", "Web App", "Interactive voting web project.", LINKS.vote, "fa-solid fa-square-check"],
  ["GitHub", "Developer", "Explore open-source repositories.", LINKS.github, "fa-brands fa-github"],
  ["DYFI Tamil Nadu", "Organisation", "DYFI Tamil Nadu digital platform.", "https://dyfitamilnadu.org", "fa-solid fa-users"],
  ["Google", "Search", "Search and explore information online.", "https://www.google.com", "fa-brands fa-google"],
  ["YouTube", "Video", "Watch and discover videos.", "https://www.youtube.com", "fa-brands fa-youtube"],
  ["Instagram", "Social", "Photo and video social platform.", "https://www.instagram.com", "fa-brands fa-instagram"],
  ["Facebook", "Social", "Connect and share with people.", "https://www.facebook.com", "fa-brands fa-facebook"],
  ["GitHub Explore", "Developer", "Explore developer projects and repositories.", "https://github.com/explore", "fa-brands fa-github"],
  ["Canva", "Design", "Create designs, posters and social content.", "https://www.canva.com", "fa-solid fa-palette"],
  ["Figma", "Design", "Collaborative interface design platform.", "https://www.figma.com", "fa-brands fa-figma"],
  ["CodePen", "Developer", "Build and share front-end experiments.", "https://codepen.io", "fa-solid fa-code"],
  ["MDN Web Docs", "Learning", "Web development documentation and references.", "https://developer.mozilla.org", "fa-solid fa-book"],
  ["W3Schools", "Learning", "Web development learning resources.", "https://www.w3schools.com", "fa-solid fa-graduation-cap"],
  ["Google Fonts", "Design", "Browse fonts for digital projects.", "https://fonts.google.com", "fa-solid fa-font"],
  ["Font Awesome", "Developer", "Icon library for web projects.", "https://fontawesome.com", "fa-solid fa-icons"]
];


const appsData = [

  {
    title:"GAMEND APK",
    category:"Android App",
    description:"Ultra gaming hub Android application.",
    icon:"fa-solid fa-gamepad",
    link:"https://github.com/mozhihub/Infotalkies-/raw/refs/heads/main/apps/GAMEND.apk",
    action:"Download APK",
    download:true
  },

  {
    title:"Rhythm Music APK",
    category:"Android App",
    description:"Modern music player and online music project.",
    icon:"fa-solid fa-music",
    link:"https://github.com/mozhihub/Infotalkies-/raw/refs/heads/main/apps/Rhythm%20music%20(1).apk",
    action:"Download APK",
    download:true
  },

  ["InfoTalkies","Media App","Tech information and updates.","fa-solid fa-newspaper"],
  ["AI Assistant","AI App","AI powered digital assistant concept.","fa-solid fa-robot"],
  ["Note App","Productivity","Modern local note application.","fa-solid fa-note-sticky"],
  ["Music Player","Music","Local and online music player concept.","fa-solid fa-headphones"],
  ["Game Hub","Gaming","Mobile gaming collection.","fa-solid fa-gamepad"],
  ["QR Scanner","Utility","Fast QR utility concept.","fa-solid fa-qrcode"],
  ["File Manager","Utility","Mobile file management concept.","fa-solid fa-folder"],
  ["Weather App","Utility","Simple weather application concept.","fa-solid fa-cloud-sun"],
  ["News Reader","Media","Mobile news reader concept.","fa-solid fa-rss"],
  ["Calculator","Utility","Clean calculator application.","fa-solid fa-calculator"],
  ["Expense Tracker","Finance","Simple expense tracking concept.","fa-solid fa-wallet"],
  ["Task Manager","Productivity","Task and productivity manager.","fa-solid fa-list-check"],
  ["Gallery","Media","Modern photo gallery concept.","fa-solid fa-images"],
  ["Video Player","Media","Mobile video player concept.","fa-solid fa-circle-play"],
  ["Browser","Internet","Lightweight browser concept.","fa-solid fa-globe"],
  ["AI Image Tool","AI","Creative AI image tool concept.","fa-solid fa-wand-magic-sparkles"],
  ["Developer Toolkit","Developer","Collection of useful coding tools.","fa-solid fa-toolbox"],
  ["Digital Signature","Utility","Digital signing tool concept.","fa-solid fa-signature"]
];


const projectsData = [

  ["GAMEND","Gaming","Gaming hub web project.",LINKS.gamend,"fa-solid fa-gamepad"],
  ["Rhythm Music","Music","Online music web application.",LINKS.rhythm,"fa-solid fa-music"],
  ["InfoTalkies Portfolio","Portfolio","Developer portfolio platform.",LINKS.portfolio,"fa-solid fa-id-card"],
  ["Downloader","Utility","Media downloader web project.",LINKS.downloader,"fa-solid fa-download"],
  ["Signature","Utility","Digital signature application.",LINKS.signature,"fa-solid fa-signature"],
  ["Voting Web App","Web App","Interactive voting application.",LINKS.vote,"fa-solid fa-check-to-slot"],
  ["DYFI Tamil Nadu","Web Platform","Organisation web application.","https://dyfitamilnadu.org","fa-solid fa-users"],
  ["AI Chatbot","AI","AI chatbot and conversational interface.","https://github.com/kaviyarasan-1997","fa-solid fa-robot"],
  ["Game Experiments","Gaming","Experimental browser game projects.","https://github.com/kaviyarasan-1997","fa-solid fa-dice"],
  ["Web UI Lab","Developer","Experimental interface designs.","https://github.com/kaviyarasan-1997","fa-solid fa-display"],
  ["Animation Lab","Developer","CSS and JavaScript animation experiments.","https://github.com/kaviyarasan-1997","fa-solid fa-wand-magic-sparkles"],
  ["Loading Animations","UI","Creative loading animation experiments.","https://github.com/kaviyarasan-1997","fa-solid fa-spinner"],
  ["Telegram Tools","Automation","Telegram related development experiments.","https://github.com/kaviyarasan-1997","fa-brands fa-telegram"],
  ["LocalStorage Apps","Web App","Browser storage based applications.","https://github.com/kaviyarasan-1997","fa-solid fa-database"],
  ["Mobile UI Lab","UI/UX","Phone-first interface experiments.","https://github.com/kaviyarasan-1997","fa-solid fa-mobile-screen"],
  ["PWA Experiments","Web App","Progressive web app experiments.","https://github.com/kaviyarasan-1997","fa-solid fa-globe"],
  ["Android WebView","Android","Web application packaging experiments.","https://github.com/kaviyarasan-1997","fa-brands fa-android"],
  ["Firebase Projects","Backend","Realtime web application experiments.","https://github.com/kaviyarasan-1997","fa-solid fa-fire"],
  ["Developer Toolkit","Tools","Useful utilities for development.","https://github.com/kaviyarasan-1997","fa-solid fa-toolbox"],
  ["Future Projects","Innovation","Upcoming digital experiments and ideas.","https://github.com/kaviyarasan-1997","fa-solid fa-rocket"]
];


/* =========================================================
   IMAGE LIBRARY
========================================================= */

const imageQueries = {

  discover:[
    "artificial intelligence technology",
    "robot AI technology",
    "future technology",
    "cyber security",
    "cloud computing",
    "quantum computer",
    "virtual reality",
    "electric car technology",
    "5G technology",
    "developer coding"
  ],

  websites:[
    "modern website technology",
    "web browser",
    "online tools",
    "developer website",
    "graphic design software"
  ],

  apps:[
    "smartphone apps technology",
    "mobile application interface",
    "Android app technology",
    "music app",
    "gaming smartphone"
  ],

  projects:[
    "software developer workspace",
    "coding project",
    "web development",
    "AI developer",
    "programming technology"
  ]
};


function imageFor(type,index){

  const queryList =
    imageQueries[type] ||
    imageQueries.discover;

  const query =
    queryList[index % queryList.length];

  return `https://source.unsplash.com/800x450/?${encodeURIComponent(query)}`;
}


/* fallback SVG */
function fallbackImage(title){

  const safe =
    String(title)
      .replace(/[<>&"]/g,"")
      .slice(0,24);

  return `data:image/svg+xml;charset=UTF-8,
  <svg xmlns="http://www.w3.org/2000/svg"
       width="800"
       height="450"
       viewBox="0 0 800 450">

    <defs>
      <linearGradient id="g"
        x1="0" y1="0"
        x2="1" y2="1">

        <stop offset="0%" stop-color="#07130b"/>
        <stop offset="100%" stop-color="#123b20"/>

      </linearGradient>
    </defs>

    <rect width="800" height="450" fill="url(#g)"/>

    <circle cx="680" cy="80"
            r="130"
            fill="#22c55e"
            opacity=".12"/>

    <text x="50%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          fill="#4ade80"
          font-family="Arial"
          font-size="34"
          font-weight="bold">
      ${safe}
    </text>

  </svg>`;
}


/* =========================================================
   CARD STORAGE
========================================================= */

const STORAGE_KEYS = {

  reactions:"infotalkies_reactions",

  ratings:"infotalkies_ratings",

  comments:"infotalkies_comments",

  theme:"info_theme"

};


function getJSON(key, fallback={}){

  try{

    return JSON.parse(
      localStorage.getItem(key)
    ) || fallback;

  }catch{

    return fallback;

  }

}


function setJSON(key,value){

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}


/* =========================================================
   CARD GENERATOR
========================================================= */

function cardId(type,index,title){

  return `${type}_${index}_${String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g,"_")
    .slice(0,35)}`;
}


function normalizeArrayData(data,type){

  return data.map((item,index)=>{

    if(!Array.isArray(item)){

      return {
        ...item,
        id:cardId(type,index,item.title),
        index,
        type
      };

    }

    return {

      title:item[0],
      category:item[1],
      description:item[2],
      link:item[3],
      icon:item[4],

      action:"Open",

      download:false,

      id:cardId(type,index,item[0]),

      index,
      type
    };

  });

}


const discoverCards =
  normalizeArrayData(discoverData,"discover");

const websiteCards =
  normalizeArrayData(websitesData,"websites");

const appCards =
  normalizeArrayData(appsData,"apps");

const projectCards =
  normalizeArrayData(projectsData,"projects");


function escapeHTML(value){

  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


function cardHTML(item){

  const localReactions =
    getJSON(STORAGE_KEYS.reactions);

  const localRatings =
    getJSON(STORAGE_KEYS.ratings);

  const myReaction =
    localReactions[item.id] || "";

  const localRating =
    localRatings[item.id]?.value || 0;

  const firebaseCard =
    firebaseState[item.id] || {};

  const likes =
    Number(firebaseCard.reactions?.like || 0);

  const dislikes =
    Number(firebaseCard.reactions?.dislike || 0);

  const ratingTotal =
    Number(firebaseCard.ratings?.total || 0);

  const ratingCount =
    Number(firebaseCard.ratings?.count || 0);

  const avg =
    ratingCount
      ? (ratingTotal / ratingCount).toFixed(1)
      : "0.0";

  const action =
    item.action || "Open";

  const target =
    item.link || LINKS.github;

  const download =
    item.download
      ? `download`
      : "";

  return `

  <article
    class="content-card"
    data-card-id="${escapeHTML(item.id)}"
    data-title="${escapeHTML(item.title)}"
    data-category="${escapeHTML(item.category)}"
    data-description="${escapeHTML(item.description)}"
  >

    <div class="card-cover">

      <img
        src="${imageFor(item.type,item.index)}"
        alt="${escapeHTML(item.title)}"
        loading="lazy"
        onerror="this.onerror=null;this.src='${fallbackImage(item.title)}'"
      >

      <span class="image-badge">
        <i class="fa-solid fa-circle"></i>
        ${escapeHTML(item.category)}
      </span>

    </div>


    <div class="card-body">

      <div class="card-title-row">

        <span class="card-icon">
          <i class="${escapeHTML(item.icon)}"></i>
        </span>

        <span class="card-number">
          #${String(item.index+1).padStart(2,"0")}
        </span>

      </div>


      <h3>${escapeHTML(item.title)}</h3>

      <p>
        ${escapeHTML(item.description)}
      </p>


      <div class="status-dot">
        <i class="fa-solid fa-circle"></i>
        ACTIVE
      </div>


      <div class="card-actions">

        <a
          class="action-btn primary ${item.download ? "download-apk" : ""}"
          href="${escapeHTML(target)}"
          ${download}
          target="${item.download ? "_self" : "_blank"}"
          rel="noopener noreferrer"
        >
          <i class="${
            item.download
              ? "fa-solid fa-download"
              : "fa-solid fa-arrow-up-right-from-square"
          }"></i>

          ${escapeHTML(action)}

        </a>

      </div>


      <div class="reaction-row">

        <button
          class="reaction-btn ${
            myReaction === "like" ? "active" : ""
          }"
          data-reaction="like"
          data-id="${escapeHTML(item.id)}"
        >
          <i class="fa-solid fa-thumbs-up"></i>
          <span class="like-count">${likes}</span>
        </button>


        <button
          class="reaction-btn ${
            myReaction === "dislike" ? "active" : ""
          }"
          data-reaction="dislike"
          data-id="${escapeHTML(item.id)}"
        >
          <i class="fa-solid fa-thumbs-down"></i>
          <span class="dislike-count">${dislikes}</span>
        </button>


        <button
          class="reaction-btn comment-btn"
          data-comment="${escapeHTML(item.id)}"
        >
          <i class="fa-regular fa-comment"></i>
          <span>Comment</span>
        </button>

      </div>


      <div class="rating-row">

        <div
          class="rating-stars"
          data-rating-id="${escapeHTML(item.id)}"
        >

          ${[1,2,3,4,5].map(star => `
            <button
              type="button"
              data-star="${star}"
              class="${star <= localRating ? "active" : ""}"
              aria-label="Rate ${star}"
            >
              <i class="fa-solid fa-star"></i>
            </button>
          `).join("")}

        </div>

        <span class="rating-value">
          ${avg} / 5
        </span>

        <span>
          (${ratingCount})
        </span>

      </div>

    </div>

  </article>

  `;

}


function renderCards(containerId,data){

  const container =
    document.getElementById(containerId);

  if(!container) return;

  container.innerHTML =
    data.map(cardHTML).join("");

}


/* =========================================================
   REFRESH FIREBASE STATE
========================================================= */

function refreshAllCardStats(){

  document
    .querySelectorAll(".content-card")
    .forEach(card => {

      const id =
        card.dataset.cardId;

      const data =
        firebaseState[id] || {};

      const likes =
        Number(data.reactions?.like || 0);

      const dislikes =
        Number(data.reactions?.dislike || 0);

      const total =
        Number(data.ratings?.total || 0);

      const count =
        Number(data.ratings?.count || 0);

      const avg =
        count
          ? (total/count).toFixed(1)
          : "0.0";

      const like =
        card.querySelector(".like-count");

      const dislike =
        card.querySelector(".dislike-count");

      const rating =
        card.querySelector(".rating-value");

      const ratingCount =
        card.querySelector(".rating-row span:last-child");

      if(like)
        like.textContent = likes;

      if(dislike)
        dislike.textContent = dislikes;

      if(rating)
        rating.textContent = `${avg} / 5`;

      if(ratingCount)
        ratingCount.textContent = `(${count})`;

    });

}


/* =========================================================
   REACTIONS
========================================================= */

async function changeReaction(id,reaction){

  const reactions =
    getJSON(STORAGE_KEYS.reactions);

  const previous =
    reactions[id] || "";

  if(previous === reaction){

    delete reactions[id];

  }else{

    reactions[id] = reaction;

  }

  setJSON(
    STORAGE_KEYS.reactions,
    reactions
  );


  /* Firebase */

  if(firebaseReady){

    try{

      const base =
        `infotalkies/cards/${id}/reactions`;

      if(previous){

        await firebaseFunctions.runTransaction(
          firebaseFunctions.ref(
            db,
            `${base}/${previous}`
          ),
          current => Math.max(
            0,
            Number(current || 0)-1
          )
        );

      }

      if(reactions[id]){

        await firebaseFunctions.runTransaction(
          firebaseFunctions.ref(
            db,
            `${base}/${reactions[id]}`
          ),
          current =>
            Number(current || 0)+1
        );

      }

    }catch(error){

      console.warn(
        "Reaction Firebase error",
        error
      );

    }

  }else{

    /* Local fallback */

    const state =
      firebaseState[id] || {};

    state.reactions =
      state.reactions || {};

    if(previous){

      state.reactions[previous] =
        Math.max(
          0,
          Number(
            state.reactions[previous] || 0
          )-1
        );

    }

    if(reactions[id]){

      state.reactions[reactions[id]] =
        Number(
          state.reactions[reactions[id]] || 0
        )+1;

    }

    firebaseState[id] = state;

    refreshAllCardStats();

  }


  refreshCardReactionUI(
    id,
    reactions[id] || ""
  );

}


function refreshCardReactionUI(id,reaction){

  const card =
    document.querySelector(
      `[data-card-id="${CSS.escape(id)}"]`
    );

  if(!card) return;

  card
    .querySelectorAll(".reaction-btn[data-reaction]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.reaction === reaction
      );

    });

}


/* =========================================================
   RATINGS
========================================================= */

async function rateCard(id,value){

  const ratings =
    getJSON(STORAGE_KEYS.ratings);

  const previous =
    Number(
      ratings[id]?.value || 0
    );

  if(previous === value)
    return;


  ratings[id] = {
    value,
    updatedAt:Date.now()
  };

  setJSON(
    STORAGE_KEYS.ratings,
    ratings
  );


  if(firebaseReady){

    try{

      await firebaseFunctions.runTransaction(
        firebaseFunctions.ref(
          db,
          `infotalkies/cards/${id}/ratings`
        ),
        current => {

          const state =
            current || {
              total:0,
              count:0
            };

          const total =
            Number(state.total || 0);

          const count =
            Number(state.count || 0);

          if(previous){

            state.total =
              total - previous + value;

          }else{

            state.total =
              total + value;

            state.count =
              count + 1;

          }

          return state;

        }
      );

    }catch(error){

      console.warn(
        "Rating Firebase error",
        error
      );

    }

  }else{

    const state =
      firebaseState[id] || {};

    state.ratings =
      state.ratings || {
        total:0,
        count:0
      };

    if(previous){

      state.ratings.total =
        Number(state.ratings.total || 0)
        - previous
        + value;

    }else{

      state.ratings.total =
        Number(state.ratings.total || 0)
        + value;

      state.ratings.count =
        Number(state.ratings.count || 0)
        + 1;

    }

    firebaseState[id] = state;

    refreshAllCardStats();

  }

  showToast("Rating saved");

}


/* =========================================================
   COMMENTS
========================================================= */

let activeCommentId = "";


async function openComments(id){

  activeCommentId = id;

  const modal =
    document.getElementById(
      "commentModal"
    );

  const title =
    document.getElementById(
      "commentModalTitle"
    );

  const card =
    document.querySelector(
      `[data-card-id="${CSS.escape(id)}"]`
    );

  title.textContent =
    card?.dataset.title || "Comments";

  modal.classList.add("show");

  await loadComments(id);

}


async function loadComments(id){

  const list =
    document.getElementById(
      "commentsList"
    );

  list.innerHTML = `
    <div class="comment-empty">
      <i class="fa-solid fa-spinner fa-spin"></i>
      Loading comments...
    </div>
  `;


  let comments = [];


  if(firebaseReady){

    try{

      const snapshot =
        await firebaseFunctions.get(
          firebaseFunctions.ref(
            db,
            `infotalkies/cards/${id}/comments`
          )
        );

      const data =
        snapshot.val() || {};

      comments =
        Object.values(data)
          .sort(
            (a,b) =>
              Number(b.createdAt || 0)
              -
              Number(a.createdAt || 0)
          );

    }catch(error){

      console.warn(
        "Comments Firebase error",
        error
      );

    }

  }


  if(!comments.length){

    const local =
      getJSON(
        `${STORAGE_KEYS.comments}_${id}`,
        []
      );

    comments = local;

  }


  if(!comments.length){

    list.innerHTML = `
      <div class="comment-empty">
        No comments yet.<br>
        Be the first to comment!
      </div>
    `;

    return;

  }


  list.innerHTML =
    comments.map(comment => `

      <div class="comment-item">

        <strong>
          ${escapeHTML(comment.name || "User")}
        </strong>

        <p>
          ${escapeHTML(comment.text || "")}
        </p>

      </div>

    `).join("");

}


async function submitComment(event){

  event.preventDefault();

  const name =
    document
      .getElementById("commentName")
      .value.trim();

  const text =
    document
      .getElementById("commentInput")
      .value.trim();

  if(!name || !text)
    return;


  const comment = {

    name,

    text,

    createdAt:Date.now()

  };


  if(firebaseReady){

    try{

      await firebaseFunctions.push(
        firebaseFunctions.ref(
          db,
          `infotalkies/cards/${activeCommentId}/comments`
        ),
        comment
      );

    }catch(error){

      console.warn(
        "Firebase comment failed",
        error
      );

      saveLocalComment(
        activeCommentId,
        comment
      );

    }

  }else{

    saveLocalComment(
      activeCommentId,
      comment
    );

  }


  document
    .getElementById("commentInput")
    .value = "";

  showToast("Comment posted");

  await loadComments(activeCommentId);

}


function saveLocalComment(id,comment){

  const key =
    `${STORAGE_KEYS.comments}_${id}`;

  const comments =
    getJSON(key,[]);

  comments.unshift(comment);

  setJSON(
    key,
    comments
  );

}


/* =========================================================
   NAVIGATION
========================================================= */

function showSection(sectionId){

  document
    .querySelectorAll(".page-section")
    .forEach(section => {

      section.classList.toggle(
        "active",
        section.id === sectionId
      );

    });


  document
    .querySelectorAll(
      ".bottom-item"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.section === sectionId
      );

    });


  closeDrawer();

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

  showBottomNav();

}


function initNavigation(){

  document
    .querySelectorAll(
      "[data-section]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const section =
            button.dataset.section;

          if(section)
            showSection(section);

        }
      );

    });


  document
    .getElementById("brandHome")
    ?.addEventListener(
      "click",
      () => showSection("homeSection")
    );

}


/* =========================================================
   DRAWER
========================================================= */

const drawer =
  document.getElementById(
    "sideDrawer"
  );

const drawerOverlay =
  document.getElementById(
    "drawerOverlay"
  );


function openDrawer(){

  drawer.classList.add("open");

  drawerOverlay.classList.add("show");

  document.body.classList.add(
    "drawer-open"
  );

}


function closeDrawer(){

  drawer.classList.remove("open");

  drawerOverlay.classList.remove("show");

  document.body.classList.remove(
    "drawer-open"
  );

}


function initDrawer(){

  document
    .getElementById("menuBtn")
    ?.addEventListener(
      "click",
      openDrawer
    );

  document
    .getElementById("drawerClose")
    ?.addEventListener(
      "click",
      closeDrawer
    );

  drawerOverlay
    ?.addEventListener(
      "click",
      closeDrawer
    );

}


/* =========================================================
   THEME
========================================================= */

function applyTheme(theme){

  const isLight =
    theme === "light";

  document.body.classList.toggle(
    "light",
    isLight
  );

  const icon =
    document.querySelector(
      "#themeBtn i"
    );

  if(icon){

    icon.className =
      isLight
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

  }

  localStorage.setItem(
    STORAGE_KEYS.theme,
    theme
  );

}


function initTheme(){

  const saved =
    localStorage.getItem(
      STORAGE_KEYS.theme
    ) || "dark";

  applyTheme(saved);

  document
    .getElementById("themeBtn")
    ?.addEventListener(
      "click",
      () => {

        const next =
          document.body.classList.contains(
            "light"
          )
            ? "dark"
            : "light";

        applyTheme(next);

      }
    );

}


/* =========================================================
   SHARE
========================================================= */

async function shareApp(){

  const shareData = {

    title:"InfoTalkies",

    text:
      "Explore technology, AI, apps, websites and developer projects on InfoTalkies.",

    url:
      window.location.href

  };


  try{

    if(
      navigator.share
    ){

      await navigator.share(
        shareData
      );

      return;

    }


    await navigator.clipboard.writeText(
      window.location.href
    );

    showToast(
      "App link copied"
    );

  }catch(error){

    console.log(error);

  }

}


function initShare(){

  document
    .getElementById("heroShare")
    ?.addEventListener(
      "click",
      shareApp
    );

  document
    .getElementById("drawerShare")
    ?.addEventListener(
      "click",
      shareApp
    );

}


/* =========================================================
   SEARCH
========================================================= */

function initSearch(){

  const input =
    document.getElementById(
      "globalSearch"
    );

  const clear =
    document.getElementById(
      "clearSearch"
    );


  input.addEventListener(
    "input",
    () => {

      const query =
        input.value
          .trim()
          .toLowerCase();


      clear.style.display =
        query
          ? "block"
          : "none";


      const cards =
        document.querySelectorAll(
          ".content-card"
        );


      let firstMatch =
        null;


      cards.forEach(card => {

        const content =
          [
            card.dataset.title,
            card.dataset.category,
            card.dataset.description
          ]
          .join(" ")
          .toLowerCase();


        const match =
          !query ||
          content.includes(query);


        card.style.display =
          match
            ? ""
            : "none";


        if(
          match &&
          query &&
          !firstMatch
        ){

          firstMatch = card;

        }

      });


      if(
        query &&
        firstMatch
      ){

        const section =
          firstMatch.closest(
            ".page-section"
          );

        if(section){

          showSection(
            section.id
          );

        }

      }

    }
  );


  clear.addEventListener(
    "click",
    () => {

      input.value = "";

      input.dispatchEvent(
        new Event("input")
      );

      input.focus();

    }
  );

}


/* =========================================================
   FEEDBACK / REPORT
========================================================= */

function openModal(id){

  document
    .getElementById(id)
    ?.classList.add("show");

}


function closeAllModals(){

  document
    .querySelectorAll(".modal")
    .forEach(modal =>
      modal.classList.remove("show")
    );

}


function initForms(){

  document
    .getElementById("feedbackOpen")
    ?.addEventListener(
      "click",
      () => {

        closeDrawer();

        openModal(
          "feedbackModal"
        );

      }
    );


  document
    .getElementById("reportOpen")
    ?.addEventListener(
      "click",
      () => {

        closeDrawer();

        openModal(
          "reportModal"
        );

      }
    );


  document
    .querySelectorAll(".modal-close")
    .forEach(button => {

      button.addEventListener(
        "click",
        closeAllModals
      );

    });


  document
    .querySelectorAll(".modal")
    .forEach(modal => {

      modal.addEventListener(
        "click",
        event => {

          if(
            event.target === modal
          ){

            modal.classList.remove(
              "show"
            );

          }

        }
      );

    });


  document
    .getElementById("commentClose")
    ?.addEventListener(
      "click",
      closeAllModals
    );


  document
    .getElementById("commentForm")
    ?.addEventListener(
      "submit",
      submitComment
    );


  document
    .getElementById("feedbackForm")
    ?.addEventListener(
      "submit",
      submitWeb3Form
    );


  document
    .getElementById("reportForm")
    ?.addEventListener(
      "submit",
      submitWeb3Form
    );

}


async function submitWeb3Form(event){

  event.preventDefault();

  const form =
    event.currentTarget;

  const button =
    form.querySelector(
      "button[type=submit]"
    );

  const original =
    button.innerHTML;

  button.disabled = true;

  button.innerHTML = `
    <i class="fa-solid fa-spinner fa-spin"></i>
    Sending...
  `;


  try{

    const response =
      await fetch(
        "https://api.web3forms.com/submit",
        {
          method:"POST",

          headers:{
            "Content-Type":
              "application/json",
            Accept:"application/json"
          },

          body:
            JSON.stringify(
              Object.fromEntries(
                new FormData(form)
              )
            )
        }
      );


    const result =
      await response.json();


    if(result.success){

      form.reset();

      closeAllModals();

      showToast(
        "Message sent successfully"
      );

    }else{

      throw new Error(
        "Form submission failed"
      );

    }

  }catch(error){

    console.error(error);

    showToast(
      "Unable to send. Try again."
    );

  }finally{

    button.disabled = false;

    button.innerHTML =
      original;

  }

}


/* =========================================================
   CARD EVENTS
========================================================= */

function initCardEvents(){

  document.addEventListener(
    "click",
    event => {

      const reaction =
        event.target.closest(
          ".reaction-btn[data-reaction]"
        );

      if(reaction){

        changeReaction(
          reaction.dataset.id,
          reaction.dataset.reaction
        );

        return;

      }


      const comment =
        event.target.closest(
          ".comment-btn"
        );

      if(comment){

        openComments(
          comment.dataset.comment
        );

        return;

      }


      const star =
        event.target.closest(
          "[data-star]"
        );

      if(star){

        const ratingBox =
          star.closest(
            ".rating-stars"
          );

        if(ratingBox){

          rateCard(
            ratingBox.dataset.ratingId,
            Number(star.dataset.star)
          );

        }

      }

    }
  );


  document.addEventListener(
    "click",
    event => {

      const download =
        event.target.closest(
          ".download-apk"
        );

      if(download){

        download.classList.add(
          "download-started"
        );

        showToast(
          "APK download started"
        );

        setTimeout(
          () =>
            download.classList.remove(
              "download-started"
            ),
          500
        );

      }

    }
  );

}


/* =========================================================
   BOTTOM NAV HIDE ON SCROLL
========================================================= */

let lastScroll =
  window.scrollY;

let scrollTimer;


function showBottomNav(){

  document
    .querySelector(".bottom-nav")
    ?.classList.remove(
      "nav-hidden"
    );

}


function initScrollNav(){

  window.addEventListener(
    "scroll",
    () => {

      const current =
        window.scrollY;

      clearTimeout(
        scrollTimer
      );


      if(
        current > lastScroll &&
        current > 100
      ){

        document
          .querySelector(
            ".bottom-nav"
          )
          ?.classList.add(
            "nav-hidden"
          );

      }else{

        showBottomNav();

      }


      lastScroll =
        Math.max(
          current,
          0
        );


      scrollTimer =
        setTimeout(
          showBottomNav,
          700
        );

    },
    {passive:true}
  );

}


/* =========================================================
   GITHUB
========================================================= */

async function loadGitHub(){

  const container =
    document.getElementById(
      "githubLatest"
    );

  if(!container) return;


  try{

    const response =
      await fetch(
        "https://api.github.com/users/kaviyarasan-1997/repos?sort=updated&per_page=6"
      );


    if(!response.ok)
      throw new Error(
        "GitHub API error"
      );


    const repos =
      await response.json();


    if(!repos.length)
      throw new Error(
        "No repositories"
      );


    container.innerHTML =
      repos.map(repo => `

        <a
          class="github-card"
          href="${escapeHTML(repo.html_url)}"
          target="_blank"
          rel="noopener noreferrer"
        >

          <span class="github-icon">
            <i class="fa-brands fa-github"></i>
          </span>

          <div class="github-content">

            <h3>
              ${escapeHTML(repo.name)}
            </h3>

            <p>
              ${escapeHTML(
                repo.description ||
                "GitHub developer project"
              )}
            </p>

            <div class="github-meta">

              <span>
                <i class="fa-solid fa-star"></i>
                ${repo.stargazers_count}
              </span>

              <span>
                <i class="fa-solid fa-code-branch"></i>
                ${repo.forks_count}
              </span>

            </div>

          </div>

          <span class="github-open">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </span>

        </a>

      `).join("");


  }catch(error){

    console.warn(error);

    container.innerHTML = `

      <div class="github-error">

        <i class="fa-brands fa-github"></i>

        <strong>
          GitHub repositories unavailable
        </strong>

        <span>
          Check the GitHub profile directly.
        </span>

        <a
          class="action-btn primary"
          href="${LINKS.github}"
          target="_blank"
        >
          Open GitHub
        </a>

      </div>

    `;

  }

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message){

  const toast =
    document.getElementById(
      "infoToast"
    );

  if(!toast) return;

  toast.querySelector(
    "span"
  ).textContent = message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    toastTimer
  );

  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}


/* =========================================================
   KEYBOARD
========================================================= */

function initKeyboard(){

  document.addEventListener(
    "keydown",
    event => {

      if(
        event.key === "Escape"
      ){

        closeDrawer();

        closeAllModals();

      }


      if(
        event.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
      ){

        event.preventDefault();

        document
          .getElementById(
            "globalSearch"
          )
          ?.focus();

      }

    }
  );

}


/* =========================================================
   PARALLAX HOME OBJECTS
========================================================= */

function initHeroParallax(){

  const hero =
    document.querySelector(
      ".hero-ultra"
    );

  if(!hero) return;


  const objects =
    hero.querySelectorAll(
      ".floating-object"
    );


  function move(x,y){

    const rect =
      hero.getBoundingClientRect();

    const px =
      (x - rect.left) /
      rect.width -
      .5;

    const py =
      (y - rect.top) /
      rect.height -
      .5;


    objects.forEach(
      (object,index) => {

        const strength =
          8 + index * 2;

        object.style.marginLeft =
          `${px * strength}px`;

        object.style.marginTop =
          `${py * strength}px`;

      }
    );

  }


  hero.addEventListener(
    "pointermove",
    event =>
      move(
        event.clientX,
        event.clientY
      )
  );


  hero.addEventListener(
    "pointerleave",
    () => {

      objects.forEach(
        object => {

          object.style.marginLeft =
            "0px";

          object.style.marginTop =
            "0px";

        }
      );

    }
  );

}


/* =========================================================
   INITIAL RENDER
========================================================= */

function renderAll(){

  renderCards(
    "discoverGrid",
    discoverCards
  );

  renderCards(
    "websitesGrid",
    websiteCards
  );

  renderCards(
    "appsGrid",
    appCards
  );

  renderCards(
    "projectsGrid",
    projectCards
  );

}


/* =========================================================
   INIT
========================================================= */

async function init(){

  renderAll();

  initNavigation();

  initDrawer();

  initTheme();

  initShare();

  initSearch();

  initForms();

  initCardEvents();

  initScrollNav();

  initKeyboard();

  initHeroParallax();

  loadGitHub();

  initFirebase();

}


if(
  document.readyState === "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

}else{

  init();

}