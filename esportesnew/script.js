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

  function addBannerCta() {
    var bannerLink = document.querySelector('[data-mj="widget-banner-link"]');
    var existingCta = document.querySelector('[data-mj-js-banner-cta="esportesnew"]');

    if (existingCta) {
      existingCta.remove();
    }

    if (!bannerLink || !bannerLink.parentNode) {
      return;
    }

    var cta = document.createElement("div");
    cta.setAttribute("data-mj-js-banner-cta", "esportesnew");
    cta.style.display = "flex";
    cta.style.alignItems = "center";
    cta.style.gap = "12px";
    cta.style.marginBottom = "12px";
    cta.style.fontFamily = "Arial, sans-serif";

    var text = document.createElement("span");
    text.textContent = "Click here";
    text.style.color = "red";
    text.style.fontSize = "16px";
    text.style.fontWeight = "700";

    var button = document.createElement("button");
    button.type = "button";
    button.textContent = "Click here";
    button.style.border = "0";
    button.style.borderRadius = "10px";
    button.style.padding = "10px 16px";
    button.style.background = "red";
    button.style.color = "#fff";
    button.style.fontSize = "14px";
    button.style.fontWeight = "700";
    button.style.cursor = "pointer";

    button.addEventListener("click", function () {
      var href = bannerLink.getAttribute("href");

      if (href) {
        window.location.href = href;
      }
    });

    cta.appendChild(text);
    cta.appendChild(button);
    bannerLink.parentNode.insertBefore(cta, bannerLink);
  }

  function init() {
    addTestBadge();
    addBannerCta();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
