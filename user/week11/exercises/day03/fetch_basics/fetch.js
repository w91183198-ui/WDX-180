/**
 * 30 Days of JavaScript: Promises and Fetch API exercise
 *
 * Complete the challenges found below!
 *
 * */

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

/**
 * Challenges
 * 1. Read the countries API using fetch & promises and:
 *  - print the name of country, capital, languages, population and area.
 *  - find out the 10 largest countries
 *  - count total number of languages in the world used as officials.
 * 2. Read the cats API using fetch & promises and:
 *  - print out all the cat names in to catNames variable.
 *  - find the average weight of cat in metric unit.
 */

// INSERT YOUR CODE BELOW

// countries api
let queries = "fields=name,languages,capital,population,area";
fetch(`${countriesAPI}?${queries}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} : ${response.statusText}`);
    }
    return response.json(); /*1*/
  })
  .then((data) => {
    console.log(data); /*2*/

    let top10 = data
      .filter((v) => v.area != undefined)
      .sort((a, b) => {
        return b.area - a.area;
      })
      .slice(0, 10);

    console.log(top10); /*3*/

    let languages = new Set();
    Object.entries(data)
      .filter(([k, v]) => {
        return v.languages != undefined;
      })
      .forEach(([k, v]) => {
        v.languages.forEach((lang) => {
          languages.add(lang.name.toLowerCase());
        });
      });
    console.log(languages.size); /*4*/
  })
  .catch((err) => {
    console.log(err);
  });





// cats api
fetch(catsAPI)
  .then((response) => {
    if (!response.ok)
      throw new Error(`HTTP ${response.status}: ${response.statusText}}`);
    return response.json(); /*5*/
  })
  .then((data) => {
    Object.entries(data).forEach(([k, v]) => {
      console.log(v.name); /*6*/

      let weight = v.weight.metric;
      let m = weight.match(/\s*(\d+)\s*-\s*(\d+)\s*/);
      if (m) {
        console.log(
          `Average weight for ${v.name}: ${parseInt(m[0]) + parseInt(m[1]) / 2}`
        ); /*7*/
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
