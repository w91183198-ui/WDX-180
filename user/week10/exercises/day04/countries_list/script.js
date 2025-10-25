const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// INSERT YOUR CODE HERE

document.body.width = "60%";

let header = document.querySelector("header");
let container = document.querySelector(".countries-container");
let wrapper = document.querySelector(".countries-wrapper");

let hh2 = document.querySelector("header > h2");
let hh31 = document.querySelector("header > h3:nth-of-type(1)");
let hh32 = document.querySelector("header > h3:nth-of-type(2)");
let tc = document.getElementById("total-countries");

wrapper.style.height = "100%";
wrapper.style.display = "grid";
wrapper.style.gridTemplateColumns = "repeat(6, 1fr)";
wrapper.style.placeItems = "center";
wrapper.style.gap = "10px";

header.style.height = "20%";
header.style.display = "flex";
header.style.flexDirection = "column";
header.style.alignItems = "center";
header.style.justifyContent = "center";

hh2.style.letterSpacing = "1rem";
hh2.style.textTransform = "uppercase";
hh2.style.fontWeight = "bold";
hh2.style.fontSize = "1.8rem";
hh2.style.margin = "0px";
hh31.style.margin = "0px";
hh32.style.margin = "0px";

tc.style.fontSize = "1.3rem";
hh31.style.fontWeight = "normal";
hh32.style.fontWeight = "normal";
tc.style.margin = "0px";
tc.textContent = `Total number of countries is ${countries.length}`;

container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.marginTop = "40px";

countries.forEach((v, i) => {
  let tmp = document.createElement("div");
  tmp.style.width = "180px";
  tmp.style.height = "180px";
  tmp.style.border = "1px solid #AAAAAAA0";
  tmp.style.display = "flex";
  tmp.style.alignItems = "center";
  tmp.style.fontWeight = "bold";
  tmp.style.textAlign = "center";
  tmp.style.justifyContent = "center";
  tmp.style.textTransform = "uppercase";
  tmp.style.boxShadow = "1px 1px 2px #AAAAAAA0, -1px -1px 2px #AAAAAAA0";

  tmp.textContent = v;
  wrapper.appendChild(tmp);
});
