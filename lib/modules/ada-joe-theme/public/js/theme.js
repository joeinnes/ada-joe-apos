const prefLang = navigator.languages
  ? navigator.languages[0]
  : navigator.language || navigator.userLanguage;

// Check current site
if (prefLang[0] + prefLang[1] === "HU") {
  // if current = EN, offer to display Hungarian 
} else {
  // if current = HU, offer to display English
}

function isIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return true
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    return true
  }
  return false;
}

if (isIE()) {
  document.querySelectorAll('.ie-only').forEach(el => el.style.display = 'inherit')
}