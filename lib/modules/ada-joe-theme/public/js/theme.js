const langEl = document.querySelector("#language");
const prefLang = navigator.languages
  ? navigator.languages[0]
  : navigator.language || navigator.userLanguage;
langEl.innerText = prefLang;

if (prefLang[0] + prefLang[1] === "HU") {
  // Display Hungarian
}
