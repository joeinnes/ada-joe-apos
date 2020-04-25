apos.on('enhance', resizeAllFullWidthText);

function resizeAllFullWidthText () {
  document.querySelectorAll(".fittext").forEach((el) => {
    fitty(el);
  });
}

(async function () {
  await document.fonts.ready
  fitty.fitAll()
  setTimeout(resizeAllFullWidthText,500);
})();

resizeAllFullWidthText();