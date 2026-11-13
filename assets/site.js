// Behaviour for the 2026 site design: mobile menu and the footer
// "Cookie settings" link. Consent, analytics, forms and chat stay in site-shell.js.
(function () {
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  ready(function () {
    var header = document.querySelector(".site-header");
    var toggle = header && header.querySelector(".site-menu-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = header.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      header.querySelectorAll("nav a").forEach(function (link) {
        link.addEventListener("click", function () {
          header.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && header.classList.contains("is-open")) {
          header.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
          toggle.focus();
        }
      });
    }
    document.querySelectorAll("[data-cookie-settings]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        document.dispatchEvent(new CustomEvent("arianna:open-cookie-settings"));
      });
    });

    // Nutshell forms bring their own background colour. Make it transparent so the
    // form sits on the site's panel, also when Nutshell renders inside a shadow root.
    var NUTSHELL_FORM_CSS = [
      ":host, form, form > div, form > fieldset { background: transparent !important; background-color: transparent !important; }",
      "button[type='submit'], input[type='submit'] { color: #ffffff !important; }"
    ].join("\n");
    function styleShadowRoots(container) {
      container.querySelectorAll("*").forEach(function (node) {
        var root = node.shadowRoot;
        if (root && !root.querySelector("style[data-site-nutshell]")) {
          var style = document.createElement("style");
          style.setAttribute("data-site-nutshell", "");
          style.textContent = NUTSHELL_FORM_CSS;
          root.appendChild(style);
        }
      });
    }
    document.querySelectorAll("[data-nutshell-form]").forEach(function (container) {
      styleShadowRoots(container);
      new MutationObserver(function () { styleShadowRoots(container); })
        .observe(container, { childList: true, subtree: true });
    });
  });
})();
