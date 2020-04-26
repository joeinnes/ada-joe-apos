const langEl = document.querySelector("#language");
const prefLang = navigator.languages
  ? navigator.languages[0]
  : navigator.language || navigator.userLanguage;

// Check current site
if (prefLang[0] + prefLang[1] === "HU") {
  // if current = EN, offer to display Hungarian 
} else {
  // if current = HU, offer to display English
}
