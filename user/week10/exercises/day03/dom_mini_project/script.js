/*
The year color is changing every 1 second
The date and time background color is changing every on? seconds
‘Done’ challenges has background green
‘Ongoing’ challenges has background yellow
‘Coming’ challenges have background red
*/

const colors = [
  "#198754", // green
  "#ffc107", // yellow
  "#dc3545", // red
  "#0d6efd",
  "#6610f2",
  "#20c997",
  "#fd7e14",
  "#0dcaf0",
  "#0d6efd",
  "#6f42c1",
  "#495057",
  "#212529",
  "#6f42c1",
  "#20c997",
  "#fd7e14",
];

let wrapper = document.querySelector(".wrapper");
let h1 = document.querySelector(".wrapper > h1");
let h2 = document.querySelector(".wrapper > h2");
let dt = document.getElementById("datetime");

h1.innerHTML = h1.innerHTML.replace("2020", " ");

let ny = document.createElement("div");
ny.id = "year";
ny.style.display = "inline-block";
ny.style.height = "100px";
ny.textContent = "2020";

wrapper.insertBefore(ny, h2);
year = document.getElementById("year");

this.setInterval(() => {
  year.style.color = colors[Math.floor(Math.random() * 8)];
  dt.style.backgroundColor = colors[Math.floor(Math.random() * 8)];
}, 1000);

var items = [...document.getElementsByTagName("li")];
for (let item of items) {
  if (item.textContent.endsWith("Done")) item.style.backgroundColor = colors[0];
  else if (item.textContent.endsWith("Ongoing"))
    item.style.backgroundColor = colors[1];
  else if (item.textContent.endsWith("Coming"))
    item.style.backgroundColor = colors[2];
}

wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";

let ul = document.querySelector("ul");
ul.style.display = "flex";
ul.style.flexDirection = "column";
ul.style.gap = "3px";
ul.style.width = "40%";

items.forEach((item) => {
  item.style.padding = "10px";
  item.style.listStyle = "none";
});

let tmp = document.createElement("div");
tmp.style.display = "flex";
tmp.style.alignItems = "flex-end";
tmp.style.justifyContent = "flex-end";
tmp.appendChild(h1);
tmp.appendChild(year);

h1.style.fontSize = "1.8rem";
h1.style.paddingBottom = "1.2rem";
h1.style.paddingRight = "0.2rem";

year.style.fontSize = "3.8rem";

h2.style.fontSize = "1rem";
h2.style.fontWeight = "normal";
h2.style.textDecoration = "underline";
h2.style.letterSpacing = "2px";
h2.style.marginTop = "0px";

wrapper.insertBefore(tmp, h2);

dt.style.marginTop = "0px";
dt.style.marginBottom = "0px";
