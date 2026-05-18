(function () {
  function addTestBadge() {
    var existingBadge = document.querySelector('[data-mj-js-test="esportesnew"]');
    var headerLeft = document.querySelector('[data-mj="header-left"]');

    if (existingBadge) {
      existingBadge.remove();
    }

    if (!headerLeft) {
      return;
    }

    var badge = document.createElement("div");
    badge.setAttribute("data-mj-js-test", "esportesnew");
    badge.textContent = "CUSTOM JS LOADED";
    badge.style.display = "inline-flex";
    badge.style.alignItems = "center";
    badge.style.justifyContent = "center";
    badge.style.padding = "10px 14px";
    badge.style.borderRadius = "10px";
    badge.style.background = "#ff512f";
    badge.style.color = "#fff";
    badge.style.fontFamily = "Arial, sans-serif";
    badge.style.fontSize = "14px";
    badge.style.fontWeight = "700";
    badge.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.25)";
    headerLeft.appendChild(badge);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addTestBadge);
  } else {
    addTestBadge();
  }
})();
