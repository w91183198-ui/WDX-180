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


/*

Loop through the nodeList and get the text content of each paragraph
Set a text content to paragraph the fourth paragraph,Fourth Paragraph
Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
Select all paragraphs and loop through each element and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
Set text content, id and class to each paragraph

*/

nodes.forEach((p, i) =>
{
    let text = p.textContent;
    if(i === 3)
    {
        p.textContent = "Fourth Paragraph";
    }

    if(i === 0)
        p.style.color = "#ff0000";
    else if (i === 1)
        p.backgroundColor = "#fafAfa";
    else if(i === 2)
        p.style.border = "3px solid #333;"
    else
    {
        p.style.fontSize = "1.6rem";
        p.fontFamily = "mono";
    }


    if(i === 0 || i === 2)
        p.style.color = "green";
    if(i === 1 || i === 3)
        p.style.color = "red";


    p.textContent = p.textContent.toUpperCase();
    p.id = `${p.id}-ni`;
    p.className = `${p.className}-ncn`;
});
