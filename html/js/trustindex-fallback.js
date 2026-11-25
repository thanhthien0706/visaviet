(function () {
  if (window.tiLoaderFallback) {
    return;
  }
  window.tiLoaderFallback = true;
  function tiLoadLoader() {
    if (window.TrustindexWidget || document.querySelector('script[src*="https://cdn.trustindex.io/loader.js"]')) {
      return;
    }
    let script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.trustindex.io/loader.js";
    script.setAttribute("data-ccm-injected", "1");
    document.head.appendChild(script);
  }
  if ("loading" === document.readyState) {
    document.addEventListener("DOMContentLoaded", tiLoadLoader);
  } else {
    tiLoadLoader();
  }
})();
