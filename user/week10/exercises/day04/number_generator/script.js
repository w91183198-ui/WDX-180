// INSERT YOUR CODE HERE

/*
Inside the div container with class name wrapper on the HTML document, 
create dynamically 102 div container, each one containing a number from 0 to 101.
Append style to each number as described below:

    Even numbers background is green
    Odd numbers background is yellow
    Prime numbers background is red


*/

const colors = [
  "#198754", // green
  "#ffc107", // yellow
  "#dc3545", // red
];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column"; // stack children vertically
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";

  let wrapper = document.querySelector(".wrapper");
  let h1 = document.querySelector("body > h1");
  let h2 = document.querySelector("body > h2");
  let h3 = document.querySelector("body > h3");

  wrapper.style.display = "grid";
  wrapper.style.gridTemplateColumns = "repeat(6, 1fr)";
  wrapper.style.flex = "3";
  wrapper.style.gridGap = "5px";

  h2.style.fontWeight = "normal";
  h3.style.fontWeight = "normal";
  h2.style.textDecoration = "underline";
  h3.style.textDecoration = "underline";

  h1.style.margin = "0px";
  h2.style.margin = "0px";
  h3.style.marginTop = "0px";
  
  for (let i = 0; i < 102; i++) {
    let tmp = document.createElement("div");
    tmp.textContent = `${i}`;

    tmp.style.width = "120px";
    tmp.style.height = "80px";
    tmp.style.display = "flex";
    tmp.style.justifyContent = "center";
    tmp.style.alignItems = "center";
    tmp.style.fontSize = "1.6rem";
    tmp.style.fontWeight = "bold";

    if (i % 2 === 0) tmp.style.backgroundColor = colors[0];
    else if (i % 2 === 1) tmp.style.backgroundColor = colors[1];

    if (isPrime(i)) tmp.style.backgroundColor = colors[2];

    wrapper.appendChild(tmp);
  }
});
