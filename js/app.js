/* Send SEO entry pages to the single PixelCraft application implementation. */
(function () {
  var tool = document.body.dataset.tool || "compress-image";
  var appUrl = "../index.html#" + encodeURIComponent(tool);

  window.setTimeout(function () {
    window.location.replace(appUrl);
  }, 0);
}());
