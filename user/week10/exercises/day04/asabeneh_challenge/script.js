// onst { createElement } = require("react");

const asabenehChallenges2020 = {
  description: "Asabeneh Yetayeh challenges",
  challengeTitle: "Asabeneh Yetayeh challenges",
  challengeSubtitle: "30DaysOfJavaScript Challenge",
  challengeYear: 2020,
  keywords: [
    "HTML",
    "HTML5",
    "CSS",
    "CSS3",
    "JS",
    "JavaScript",
    "ES6",
    "Promise",
    "async await",
    "Database",
    "React",
    "React Hooks",
    "Context API",
    "React Router",
    "Web Storage",
    "localStorage",
    "sessionStorage",
    "Redux",
    "Node",
    "MongoDB",
    "SQL",
    "API",
    "DOM",
    "data science",
    "MERN",
    "Python",
    "Flask",
    "Statistics",
    "Linear Algebra",
    "Numpy",
    "Pandas",
    "Scipy",
    "Scikit-learn",
    "Visualization",
    "D3.js",
  ],
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    titles: [
      ["🌱", "Educator"],
      ["💻", "Programmer"],
      ["🌐", "Developer"],
      ["🔥", "Motivator"],
      ["📔", "Content Creator"],
    ],
    qualifications: [
      "MSc. Computer Science Ongoing",
      "BSc. Information and Communication Eng.",
      "MSc. Food Technology",
      "BSc.Food Technology",
    ],
    socialLinks: [
      {
        social: "LinkedIn",
        url: "https://www.linkedin.com/in/asabeneh/",
        fontawesomeIcon: '<i class="fab fa-linkedin">',
      },
      {
        social: "Twitter",
        url: "https://twitter.com/Asabeneh",
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
      },
      {
        social: "Github",
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: "https://github.com/Asabeneh",
      },
      {
        social: "DEV.to",
        fontawesomeIcon: "",
        url: "https://dev.to/asabeneh",
      },
    ],
    skills: [
      "Web Development",
      "Data Analysis",
      "Data Visualization",
      "Programming",
      "Databases",
      "Developing API",
    ],
    bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
  },
  challenges: [
    {
      name: "30 Days Of Python",
      topics: [
        "Python",
        "Flask",
        "Numpy",
        "Pandas",
        "Statistics",
        "API",
        "MongoDB",
      ],
      days: 30,
      status: "Done",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
    },
    {
      name: "30 Days Of JavaScript",
      topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
      days: 30,
      status: "Ongoing",
      questions: "Above 500",
      projects: "About 30",
      interviewQns: "",
      githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
    },
    {
      name: "30 Days Of HTML & CSS",
      topics: ["CSS", "Flex", "Grid", "CSS Animation"],
      days: 30,
      status: "Coming",
      questions: "Above 500",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of React",
      topics: [
        "React",
        "React Router",
        "Redux",
        "Context API",
        "React Hooks",
        "MERN",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of ReactNative",
      topics: ["ReactNative", "Redux"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "Two",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Fullstack",
      topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Data Analysis",
      topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
    {
      name: "30 Days Of Machine Learning",
      topics: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn",
        "Scipy",
        "Linear Algebra",
        "Statistics",
        "Visualization",
      ],
      days: 30,
      status: "Coming",
      questions: "",
      projects: "",
      interviewQns: "",
      githubUrl: "",
    },
  ],
};

// INSERT YOUR CODE HERE

const colors = [
  "#198754", // emerald green
  "#ffc107", // sunflower yellow
  "#dc3545", // crimson red
  "#0d6efd", // bright blue
  "#6610f2", // violet
  "#20c997", // teal
  "#fd7e14", // orange
  "#0dcaf0", // sky blue
  "#6f42c1", // purple
  "#ff69b4", // hot pink
  "#17a2b8", // cyan
  "#f54291", // magenta
  "#845ef7", // amethyst
  "#28a745", // fresh green
  "#ff5733", // coral red
  "#f9a825", // goldenrod
  "#e83e8c", // pinkish violet
  "#009688", // sea green
  "#673ab7", // indigo
  "#795548", // cocoa brown
];

const emojiSkills = {
  checkmark: "\u2705",
};

const emojiQualifications = {
  book: "\u1F4D6",
  scientist: "\u1F468\u200D\u1F52C",
};

function CreateElementWithContent(tag, content) {
  let e = document.createElement(tag);
  e.textContent = content;
  return e;
}

function CreateElementWithStyle(tag, style, content = null) {
  var e = document.createElement(tag);
  e.style = style;
  e.textContent = content;
  return e;
}

function GetRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function AsCenteredFlexContainer(element) {
  element.style.display = "flex";
  element.style.justifyContent = "center";
  element.style.alignItems = "center";
}

let ay = asabenehChallenges2020;
let wrapper = document.querySelector(".wrapper");

document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.fontFamily = "mono";

wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";
wrapper.style.width = "60%";

let tmp = document.createElement("div");
tmp.innerHTML = `<div id='title'>${ay.challengeTitle} </div><div id='year'>${ay.challengeYear}</div>`;
wrapper.appendChild(tmp);
tmp = document.createElement("div");
tmp.innerHTML = `<div id='subtitle' style="text-decoration: underline; font-size: 1.2rem;">${ay.challengeSubtitle} </div>`;
wrapper.appendChild(tmp);

tmp = document.getElementById("title");
tmp.style.display = "inline-block";
tmp.style.fontSize = "1.8rem";
tmp.style.fontWeight = "bold";
tmp.style.marginBottom = "30px";

tmp = document.getElementById("year");
tmp.style.display = "inline-block";
tmp.style.fontSize = "4rem";
tmp.style.fontWeight = "bolder";

tmp = document.createElement("div");
tmp.id = "datetime";
tmp.style.padding = "5px";
tmp.style.margin = "10px 0px";
wrapper.appendChild(tmp);

let section = document.createElement("section");
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.gap = "5px";
section.style.width = "100%";

ay.challenges.forEach((entry, i) => {
  let tmp = document.createElement("div");
  tmp.style.display = "flex";
  tmp.style.justifyContent = "space-between";
  tmp.style.padding = "25px";

  let color = colors[2];
  if (entry.status !== "Coming") {
    color = entry.status === "Done" ? colors[0] : colors[1];
  }

  tmp.style.backgroundColor = color;

  var hd = document.querySelector("head");
  let style = document.createElement("style");
  style.textContent = ".topic_vis {display: none;}";
  hd.appendChild(style);

  let topics = entry.topics.map(
    (v) => `<li style="list-style: none;">${v}</li>`
  );

  let x = document.createElement("div");

  let y = document.createElement("div");
  y.innerHTML = `<span style='margin-right: 3px;'>\u{1F782}</span>${entry.topics[0]}`;
  y.style.cursor = "pointer";
  y.style.fontWeight = "bold";
  y.style.marginBottom = "5px";
  y.addEventListener("click", () => {
    document.getElementById(`topic-${i}`).classList.toggle("topic_vis");
  });
  x.appendChild(y);
  let ul = document.createElement("ul");
  ul.innerHTML = `${topics.join("")}`;
  ul.id = `topic-${i}`;
  ul.classList.add("topic_vis");
  ul.style.margin = "0px";
  ul.style.padding = "0px";
  x.appendChild(ul);

  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("title", `${entry.name}`);
  link.style.cursor = "default";
  link.textContent = `${entry.name}`;

  if (entry.status === "Coming") {
    link = CreateElementWithContent("div", `${entry.name}`);
  }
  tmp.appendChild(link);
  tmp.appendChild(x);
  tmp.appendChild(CreateElementWithContent("div", `${entry.status}`));

  section.appendChild(tmp);
});

wrapper.appendChild(section);

tmp = document.createElement("div");
AsCenteredFlexContainer(tmp);
tmp.style.fontWeight = "bold";
tmp.style.fontSize = "1.6rem";
tmp.style.margin = "10px 0px";
tmp.textContent = `${ay.author.firstName} ${ay.author.lastName}`;
wrapper.appendChild(tmp);

tmp = document.createElement("div");
tmp.style.display = "flex";
tmp.style.justifyContent = "center";
tmp.style.alignItems = "center";
tmp.style.gap = "5px";
let social = ay.author.socialLinks.slice(0, -1).forEach((v, i) => {
  let tmp2 = document.createElement("div");

  let fontawesomeIcon = v.fontawesomeIcon;
  if (!fontawesomeIcon.includes("</i>")) {
    fontawesomeIcon += "</i>";
  }
  tmp2.innerHTML = `<a href="${v.url}" class="icon-link" title="${v.social}">${fontawesomeIcon}</a>`;
  tmp.appendChild(tmp2);
  console.log(tmp2.innerHTML);
});
wrapper.appendChild(tmp);

var hd = document.querySelector("head");
tmp = document.createElement("link");
tmp.setAttribute("rel", "stylesheet");
tmp.setAttribute(
  "href",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
);
hd.appendChild(tmp);

var charset = document.createElement("meta");
charset.setAttribute("charset", "UTF-8");
hd.appendChild(charset);

tmp = document.createElement("div");
tmp.style.margin = "25px 35px";
tmp.style.width = "80%";
tmp.style.textAlign = "center";
tmp.textContent = ay.author.bio;
wrapper.appendChild(tmp);

function CreateSection(title, entries, multi = false) {
  let tmpx = document.createElement("section");
  tmpx.appendChild(
    CreateElementWithStyle(
      "header",
      "font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;",
      title
    )
  );

  let ul = document.createElement("ul");
  ul.style.padding = "0px";
  ul.style.margin = "0px";
  if (multi) {
    ul.innerHTML = entries
      .map(([emoji, role]) => {
        return `<li style="list-style: none;">\\u{{${emoji}$}}{role}</li>`;
      })
      .join("");
  } else {
    let emoji = "";

    ul.innerHTML = entries
      .map((role) => {
        if (title.toLowerCase() === "skills") {
          emoji = `${emojiSkills.checkmark}`;
        }
        if (title.toLowerCase() === "qualifications") {
          emoji =
            role === "MSc. Computer Science Ongoing"
              ? `${emojiQualifications.book}`
              : emojiQualifications.scientist;
        }

        return `<li style="list-style: none;">${emoji}${role}</li>`;
      })
      .join("");
  }

  tmpx.style.margin = "0px 50px";
  tmpx.appendChild(ul);
  return tmpx;
}

let tmp3 = document.createElement("div");
tmp3.style.display = "flex";
tmp3.style.justifyContent = "space-around";
tmp3.style.alignItems = "space-around";

tmp3.appendChild(CreateSection("Titles", ay.author.titles));
tmp3.appendChild(CreateSection("Skills", ay.author.skills));
tmp3.appendChild(CreateSection("Qualifications", ay.author.qualifications));
wrapper.appendChild(tmp3);

tmp = document.createElement("section");
tmp.style.width = "80%";
tmp.appendChild(
  CreateElementWithStyle(
    "header",
    "font-weight: bold; font-size: 1.1rem; margin-bottom: 5px;",
    "Keywords"
  )
);

let tmp2 = document.createElement("div");
tmp.appendChild(tmp2);

tmp2.style.display = "flex";
tmp2.style.flexWrap = "wrap";
tmp2.style.gap = "5px";
tmp2.style.marginLeft = "25px";

ay.keywords.forEach((v) => {
  let kw = CreateElementWithContent("span", v);
  kw.style.backgroundColor = GetRandomColor();
  kw.style.width = "fit-content";
  kw.style.borderRadius = "30% 30%";
  kw.style.display = "inline-block";
  kw.style.padding = "2px 5px";
  kw.style.margin = "0px 5px";
  kw.style.display = "flex";
  kw.style.placeItems = "center";
  kw.style.justifyContent = "center";

  tmp2.appendChild(kw);
});

wrapper.appendChild(tmp);

setInterval(() => {
  let tmp = document.getElementById("datetime");

  tmp.textContent = new Date()
    .toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .replace("at ", "");

  tmp.style.backgroundColor = GetRandomColor();

  document.getElementById("year").style.color = GetRandomColor();
}, 1000);
