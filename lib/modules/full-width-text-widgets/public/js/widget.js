apos.on('enhance', resizeAllFullWidthText);

function resizeAllFullWidthText () {
  document.querySelectorAll(".fittext").forEach((el) => {
    fitty(el, {
      maxSize: 100
    });
  });
}

(async function () {
  await document.fonts.ready
  fitty.fitAll({
    maxSize: 100
  })
  setTimeout(resizeAllFullWidthText,500);
})();

resizeAllFullWidthText();