function fetchBookByAuthor(author) {
  const URL =
    "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" +
    encodeURIComponent(author);
  // READ MORE ABOUT "encodeURIComponent": https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp

  return fetch(URL).then(function (res) {
    return res.json();
  });
}




// EXERCISE 1: Display the results in the page
// EXERCISE 2: Refactor the fetchBookByAuthor function using async/await
// EXERCISE 3: Create a fetchBookByTitle function using async/await and test it with fetchBookByTitle("Moby Dick");
// EXERCISE 4: Display the Book contents in the page


function buildCard(caption, content) 
{
    let card = document.createElement("div");
      card.style.color = "#0ab2f4ff";
      card.style.backgroundColor = "#333";
      card.style.width = "80%";
      card.style.height = "600px";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.alignItems = "center";
      card.style.justifyContent = "center";
      card.style.margin = "60px 0px 10px";
      card.style.padding = "30px";
      card.style.fontSize = "1.4rem";
      let title = document.createElement("div");
      title.textContent = caption;

      title.style.color = "#ffffffff";
      title.style.backgroundColor = "#f6530dff";
      title.style.width = "100%";
      title.style.padding = "20px";
      title.style.marginBottom = "30px";
      title.style.fontSize = "2rem";
      title.style.fontWeight = "bold";
      title.style.textAlign = "center";

      let extract = document.createElement("div");
      extract.textContent = content;
      extract.style.overflow = "auto";

      card.appendChild(title);
      card.appendChild(extract);
      document.body.appendChild(card);
}

/*1*/
fetchBookByAuthor("Herman Melville")
  .then((data) => {
    // TODO: Display data in the page...

    let js = document.querySelector(".js");
    Object.entries(data.query.pages).forEach(([k, v]) => {
        buildCard(v.title, v.extract);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  /*2*/
  async function fetchBookByAuthorAsync() {
     const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" +
     encodeURIComponent(author);
    let data = await fetch(URL);
    data = await data.json();
    return data;
  }


  /*3*/
    async function fetchBookByTitleAsync(title) {
     const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" +
     encodeURIComponent(title);
    let data = await fetch(URL);
    data = await data.json();
    return data;
  }

  (async () => {
  let result = await fetchBookByTitleAsync("Moby Dick")
  console.log(result);

 Object.entries(result.query.pages).forEach(([k, v]) => {
        buildCard(v.title, v.extract);
    });
    /*4*/
  })();
