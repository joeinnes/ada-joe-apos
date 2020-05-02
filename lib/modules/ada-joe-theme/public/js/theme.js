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
  var ieOnlyEls = document.getElementsByClassName('ie-only')
  var hideIeEls = document.getElementsByClassName('hide-ie')
  for (var i = 0; i < ieOnlyEls.length; i++) {
    ieOnlyEls[i].style.display = 'inherit'
  }
  for (var i = 0; i < hideIeEls.length; i++) {
    hideIeEls[i].style.display = 'none'
  }
}