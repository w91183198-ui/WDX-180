/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE

// 1
let p1 = document.querySelector("body :first-child");


// 2
let paragraphs = [
    document.querySelector("#paragraph1"),
    document.querySelector("#paragraph2"),
    document.querySelector("#paragraph3"),
    document.querySelector("#paragraph4"),
].map((p) =>
{
    return {[p.id]: p};
});


// 3
let nodes = document.querySelectorAll("body > p");


// 4
nodes.forEach((p, i) => {
    p.setAttribute("id", `p${i + 1}`);
    p.setAttribute("class", "lighten");

    p.id = `p${i + 1}`;
    p.className = "lighten";
});