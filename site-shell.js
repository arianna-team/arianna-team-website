(function () {
  var FORM_DELIVERY_ENDPOINT = "https://formsubmit.co/hello@ariannateam.ai";
  // Nutshell chat widget (client-side token, safe to publish).
  var NUTSHELL_CHAT_INSTANCE = "384033";
  var NUTSHELL_CHAT_AUTH_TOKEN = "Sc-ahUXFJgom3dQWJ3HR5NXWCgwxLu6S6WpS9d2JtHA.2";
  var NUTSHELL_CHAT_SCRIPT = "https://growth.ariannateam.ai/nutsheller-esm.js";
  var NON_BUSINESS_EMAIL_DOMAINS = {
    "aol.com": true,
    "fastmail.com": true,
    "gmail.com": true,
    "googlemail.com": true,
    "gmx.com": true,
    "gmx.de": true,
    "gmx.net": true,
    "hey.com": true,
    "hotmail.com": true,
    "hotmail.co.uk": true,
    "hotmail.fr": true,
    "icloud.com": true,
    "live.com": true,
    "live.co.uk": true,
    "mac.com": true,
    "mail.com": true,
    "me.com": true,
    "msn.com": true,
    "outlook.com": true,
    "outlook.co.uk": true,
    "pm.me": true,
    "proton.me": true,
    "protonmail.com": true,
    "tutanota.com": true,
    "tuta.com": true,
    "yahoo.com": true,
    "yahoo.co.uk": true,
    "yahoo.de": true,
    "yahoo.fr": true,
    "yandex.com": true
  };

  function onReady(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function ensureMontserratFont() {
    if (document.getElementById("site-font-preconnect")) return;

    var preconnect = document.createElement("link");
    preconnect.id = "site-font-preconnect";
    preconnect.rel = "preconnect";
    preconnect.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect);

    var preconnectStatic = document.createElement("link");
    preconnectStatic.rel = "preconnect";
    preconnectStatic.href = "https://fonts.gstatic.com";
    preconnectStatic.crossOrigin = "anonymous";
    document.head.appendChild(preconnectStatic);

    var stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap";
    document.head.appendChild(stylesheet);
  }

  function ensureUppercaseTitles() {
    if (document.getElementById("site-title-case-styles")) return;

    var style = document.createElement("style");
    style.id = "site-title-case-styles";
    style.textContent = [
      "h1,",
      "h2,",
      "h3,",
      ".footer-brand-title {",
      "  text-transform: uppercase;",
      "}",
      "h1 {",
      "  font-weight: 500;",
      "}",
      "h2,",
      "h3,",
      ".footer-brand-title {",
      "  font-weight: 400;",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function ensureBorderlessButtons() {
    if (document.getElementById("site-button-reset-styles")) return;

    var style = document.createElement("style");
    style.id = "site-button-reset-styles";
    style.textContent = [
      ".nav-cta,",
      ".button,",
      ".footer-cta,",
      ".cta a,",
      ".form-card button,",
      ".newsletter-form button,",
      "button {",
      "  border: none !important;",
      "  border-color: transparent !important;",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function ensureWebsiteFormStyles() {
    if (document.getElementById("website-form-styles")) return;

    var style = document.createElement("style");
    style.id = "website-form-styles";
    style.textContent = [
      ".arianna-website-form {",
      "  display: grid;",
      "  gap: 14px;",
      "}",
      ".arianna-form-grid {",
      "  display: grid;",
      "  grid-template-columns: repeat(2, minmax(0, 1fr));",
      "  gap: 14px;",
      "}",
      ".arianna-form-field {",
      "  display: grid;",
      "  gap: 7px;",
      "}",
      ".arianna-form-field--full {",
      "  grid-column: 1 / -1;",
      "}",
      ".arianna-form-field label {",
      "  font-size: 13px;",
      "  font-weight: 700;",
      "}",
      ".arianna-website-form input,",
      ".arianna-website-form textarea {",
      "  width: 100%;",
      "  box-sizing: border-box;",
      "  border: 1px solid var(--line, #d6e0e5);",
      "  border-radius: 12px;",
      "  padding: 12px 14px;",
      "  background: #ffffff;",
      "  color: var(--ink, #0f1e2b);",
      "  font: inherit;",
      "}",
      ".arianna-website-form textarea {",
      "  min-height: 130px;",
      "  resize: vertical;",
      "}",
      ".arianna-website-form input:focus,",
      ".arianna-website-form textarea:focus {",
      "  outline: 3px solid rgba(63, 186, 183, 0.25);",
      "  border-color: #3fbab7;",
      "}",
      ".arianna-website-form button {",
      "  min-height: 46px;",
      "  width: fit-content;",
      "  padding: 12px 20px;",
      "  border-radius: 999px;",
      "  background: #f28a1a;",
      "  color: #ffffff;",
      "  font: inherit;",
      "  font-weight: 700;",
      "  cursor: pointer;",
      "}",
      ".arianna-form-note {",
      "  margin: 0;",
      "  font-size: 12px;",
      "  opacity: 0.78;",
      "}",
      ".arianna-form-error {",
      "  margin: 0;",
      "  padding: 10px 12px;",
      "  border-radius: 10px;",
      "  background: #fff0f0;",
      "  color: #9f1d1d;",
      "  font-size: 13px;",
      "  font-weight: 700;",
      "}",
      ".arianna-website-form input[aria-invalid=\"true\"] {",
      "  border-color: #c93636;",
      "}",
      ".form-card .arianna-form-note {",
      "  color: #ffffff;",
      "}",
      "@media (max-width: 640px) {",
      "  .arianna-form-grid { grid-template-columns: 1fr; }",
      "  .arianna-form-field--full { grid-column: auto; }",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function getWebsiteFormDetails(containerId) {
    var path = window.location.pathname;
    var details = {
      kind: "contact",
      subject: "ARIANNA website inquiry",
      button: "Send inquiry",
      messageLabel: "How can we help?"
    };

    if (containerId.indexOf("newsletter") !== -1) {
      details.kind = "newsletter";
      details.subject = "ARIANNA newsletter request";
      details.button = "Subscribe";
    } else if (containerId.indexOf("book-demo") !== -1 || path.indexOf("book-a-demo") !== -1) {
      details.kind = "demo";
      details.subject = "Book an ARIANNA demo";
      details.button = "Request a demo";
      details.messageLabel = "What would you like to see in the demo?";
    } else if (containerId.indexOf("trial") !== -1 || path.indexOf("free-trial") !== -1) {
      details.kind = "trial";
      details.subject = "Start an ARIANNA trial";
      details.button = "Request a trial";
      details.messageLabel = "Tell us about your product or trial goals";
    } else if (containerId.indexOf("partner") !== -1 || path.indexOf("partners") !== -1) {
      details.kind = "partner";
      details.subject = "ARIANNA partnership inquiry";
      details.button = "Send partnership inquiry";
      details.messageLabel = "Tell us about the partnership opportunity";
    } else if (containerId.indexOf("support") !== -1 || path.indexOf("support") !== -1) {
      details.kind = "support";
      details.subject = "ARIANNA support request";
      details.button = "Send support request";
      details.messageLabel = "Describe the issue";
    }

    return details;
  }

  function appendHiddenField(form, name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  function isValidEmailAddress(value) {
    if (!value || value.length > 254) return false;

    var parts = value.split("@");
    if (parts.length !== 2) return false;

    var localPart = parts[0];
    var domain = parts[1];
    if (!localPart || localPart.length > 64 || !domain || domain.length > 253) return false;
    if (localPart.charAt(0) === "." || localPart.charAt(localPart.length - 1) === "." || localPart.indexOf("..") !== -1) return false;
    if (!/^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(localPart)) return false;
    if (domain.indexOf(".") === -1) return false;

    return domain.split(".").every(function (label) {
      return label.length > 0 && label.length <= 63 && /^[A-Z0-9](?:[A-Z0-9-]*[A-Z0-9])?$/i.test(label);
    });
  }

  function isBusinessEmailAddress(value) {
    var domain = value.slice(value.lastIndexOf("@") + 1).toLowerCase();
    return !Object.prototype.hasOwnProperty.call(NON_BUSINESS_EMAIL_DOMAINS, domain);
  }

  function createField(name, labelText, type, required, fullWidth) {
    var wrapper = document.createElement("div");
    var label = document.createElement("label");
    var field = type === "textarea" ? document.createElement("textarea") : document.createElement("input");
    var fieldId = "arianna-" + name + "-" + Math.random().toString(36).slice(2, 8);

    wrapper.className = "arianna-form-field" + (fullWidth ? " arianna-form-field--full" : "");
    label.htmlFor = fieldId;
    label.textContent = labelText;
    field.id = fieldId;
    field.name = name;
    if (type !== "textarea") field.type = type;
    field.required = required;
    if (type === "email") {
      field.autocomplete = "email";
      field.inputMode = "email";
      field.spellcheck = false;
    }
    if (name === "name") field.autocomplete = "name";
    if (name === "company") field.autocomplete = "organization";
    wrapper.appendChild(label);
    wrapper.appendChild(field);
    return wrapper;
  }

  function renderWebsiteForm(container) {
    if (!container || container.dataset.formReady === "true") return;

    var details = getWebsiteFormDetails(container.id || "");
    var form = document.createElement("form");
    var grid = document.createElement("div");
    var honeypot = document.createElement("input");
    var button = document.createElement("button");
    var emailError = document.createElement("p");
    var note = document.createElement("p");

    form.className = "arianna-website-form";
    form.action = FORM_DELIVERY_ENDPOINT;
    form.method = "POST";
    grid.className = "arianna-form-grid";

    appendHiddenField(form, "_subject", details.subject);
    appendHiddenField(form, "_template", "table");
    appendHiddenField(form, "_captcha", "true");
    appendHiddenField(form, "_next", "https://www.ariannateam.ai/");
    appendHiddenField(form, "_url", window.location.href);
    appendHiddenField(form, "form_type", details.kind);
    appendHiddenField(form, "source_page", window.location.href);

    honeypot.type = "hidden";
    honeypot.name = "_honey";
    form.appendChild(honeypot);

    if (details.kind === "newsletter") {
      grid.appendChild(createField("email", "Email address", "email", true, true));
    } else {
      grid.appendChild(createField("name", "Name", "text", true, false));
      grid.appendChild(createField("email", "Work email", "email", true, false));
      grid.appendChild(createField("company", "Company", "text", false, true));
      grid.appendChild(createField("message", details.messageLabel, "textarea", true, true));
    }

    var emailField = grid.querySelector('input[name="email"]');
    emailError.id = emailField.id + "-error";
    emailError.className = "arianna-form-error";
    emailError.setAttribute("role", "alert");
    emailError.hidden = true;
    emailField.setAttribute("aria-describedby", emailError.id);

    function clearEmailError() {
      emailField.setCustomValidity("");
      emailField.removeAttribute("aria-invalid");
      emailError.textContent = "";
      emailError.hidden = true;
    }

    function showEmailError(message) {
      emailField.setCustomValidity(message);
      emailField.setAttribute("aria-invalid", "true");
      emailError.textContent = message;
      emailError.hidden = false;
    }

    function validateEmailField() {
      emailField.value = emailField.value.trim();

      if (!isValidEmailAddress(emailField.value)) {
        showEmailError("Enter a valid email address, including a complete domain name.");
        return false;
      }

      if (!isBusinessEmailAddress(emailField.value)) {
        showEmailError("Please use your business email address. Personal email providers such as Gmail are not accepted.");
        return false;
      }

      clearEmailError();
      return true;
    }

    emailField.addEventListener("input", function () {
      clearEmailError();
    });

    emailField.addEventListener("blur", function () {
      if (emailField.value.trim() !== "") validateEmailField();
    });

    form.addEventListener("submit", function (event) {
      if (honeypot.value.trim() !== "") {
        event.preventDefault();
        form.reset();
        return;
      }

      if (validateEmailField()) return;

      event.preventDefault();
      emailField.reportValidity();
    });

    button.type = "submit";
    button.textContent = details.button;
    note.className = "arianna-form-note";
    note.textContent = "Business email required. FormSubmit reCAPTCHA may run invisibly or request verification after submission.";
    form.appendChild(grid);
    form.appendChild(emailError);
    form.appendChild(button);
    form.appendChild(note);

    container.dataset.formReady = "true";
    container.replaceChildren(form);
  }

  function initWebsiteForms() {
    ensureWebsiteFormStyles();

    document.querySelectorAll('[id^="arianna-form-"]').forEach(renderWebsiteForm);
  }

  function ensureSharedNavStyles() {
    if (document.getElementById("site-nav-styles")) return;

    var style = document.createElement("style");
    style.id = "site-nav-styles";
    style.textContent = [
      ".nav {",
      "  display: flex;",
      "  align-items: center;",
      "  justify-content: space-between;",
      "  padding: 22px 8vw;",
      "  position: sticky;",
      "  top: 0;",
      "  background: rgba(244, 247, 248, 0.9);",
      "  backdrop-filter: blur(8px);",
      "  z-index: 10;",
      "  border-bottom: 1px solid rgba(226, 232, 236, 0.6);",
      "}",
      ".nav-cta {",
      "  padding: 10px 18px;",
      "  background: #f28a1a;",
      "  color: #ffffff;",
      "  border-radius: 999px;",
      "  font-size: 13px;",
      "  font-weight: 600;",
      "  min-height: 44px;",
      "  display: inline-flex;",
      "  align-items: center;",
      "  justify-content: center;",
      "  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;",
      "}",
      ".nav-cta:hover {",
      "  background: #3fbab7;",
      "  box-shadow: 0 12px 24px rgba(15, 30, 43, 0.18);",
      "  transform: translateY(-1px);",
      "}",
      ".nav .logo img,",
      ".nav .logo svg {",
      "  height: 88px;",
      "  width: auto;",
      "  display: block;",
      "}",
      ".nav-links {",
      "  display: flex;",
      "  gap: 26px;",
      "  font-size: 14px;",
      "  letter-spacing: 0.02em;",
      "  color: var(--muted, #5b6b7a);",
      "}",
      ".nav-links a {",
      "  transition: color 0.2s ease;",
      "}",
      ".nav-links a:hover,",
      ".nav-links a:focus-visible,",
      ".nav-links a:active {",
      "  color: #3fbab7;",
      "}",
      ".nav-dropdown {",
      "  position: relative;",
      "  padding-bottom: 8px;",
      "}",
      ".nav-dropdown-toggle {",
      "  display: inline-flex;",
      "  align-items: center;",
      "  gap: 6px;",
      "}",
      ".nav-dropdown-caret {",
      "  font-size: 10px;",
      "  line-height: 1;",
      "}",
      ".nav-dropdown-menu {",
      "  position: absolute;",
      "  top: 100%;",
      "  left: 0;",
      "  min-width: 160px;",
      "  padding: 8px 0;",
      "  border-radius: 12px;",
      "  border: 1px solid rgba(226, 232, 236, 0.9);",
      "  background: #ffffff;",
      "  box-shadow: 0 12px 24px rgba(15, 30, 43, 0.12);",
      "  display: none;",
      "  flex-direction: column;",
      "  gap: 0;",
      "  z-index: 20;",
      "}",
      ".nav-dropdown-menu a {",
      "  display: block;",
      "  padding: 8px 14px;",
      "  white-space: nowrap;",
      "}",
      ".nav-dropdown:hover .nav-dropdown-menu,",
      ".nav-dropdown:focus-within .nav-dropdown-menu,",
      ".nav-dropdown.is-open .nav-dropdown-menu {",
      "  display: flex;",
      "}",
      "section[id],",
      "[id].section,",
      "article[id],",
      "div[id] {",
      "  scroll-margin-top: 132px;",
      "}",
      "@media (max-width: 720px) {",
      "  .nav {",
      "    flex-wrap: wrap;",
      "    row-gap: 10px;",
      "  }",
      "  .nav-links {",
      "    width: 100%;",
      "    flex-wrap: wrap;",
      "    gap: 14px;",
      "    order: 3;",
      "  }",
      "  .nav-dropdown {",
      "    width: 100%;",
      "    padding-bottom: 0;",
      "  }",
      "  .nav-dropdown-menu {",
      "    position: static;",
      "    margin-top: 6px;",
      "    box-shadow: none;",
      "    min-width: 0;",
      "  }",
      "  .nav-cta {",
      "    margin-left: auto;",
      "  }",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function getSharedNavMarkup() {
    var isHomePage = /(?:^|\/)index\.html$/.test(window.location.pathname) || /\/$/.test(window.location.pathname);
    var platformHref = "index.html";

    return [
      '<a class="logo" aria-label="ARIANNA" href="index.html">',
      '  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.8 67.1" role="img" aria-label="ARIANNA logo">',
      '    <defs>',
      '      <style>',
      '        .cls-1 { fill: #3fbab7; }',
      '      </style>',
      '    </defs>',
      '    <g>',
      '      <g id="Laag_1">',
      '        <polygon points="162.1 20.4 159.4 20.4 159.4 31.2 147.7 20.5 147.7 37 150.4 37 150.4 26.3 162.1 36.9 162.1 20.4"/>',
      '        <path d="M197.8,25.8l2.9,6.3h-5.9l3-6.3ZM189.3,37h2.9l1.3-2.7h8.5l1.3,2.7h2.9l-8.4-16.5-8.4,16.5Z"/>',
      '        <path d="M136.5,32h-5.9l3-6.3,3,6.3ZM125.1,37h2.9l1.3-2.7h8.5l1.3,2.7h2.9l-8.4-16.5-8.5,16.5Z"/>',
      '        <polygon points="183.6 20.4 181 20.4 181 31.2 169.3 20.5 169.3 37 172 37 172 26.3 183.6 36.9 183.6 20.4"/>',
      '        <path d="M98.7,22.7h4.8c.6,0,1.2.1,1.6.4.4.2.7.6.9.9.2.3.3.7.4,1.1,0,.4,0,.7,0,1,0,.5,0,1-.3,1.4-.2.4-.4.7-.7,1-.3.3-.6.5-1,.6-.4.1-.7.2-1,.2h-4.8v-6.5ZM102.6,31.6c.7.9,1.3,1.9,2,2.8.6.9,1.3,1.7,1.9,2.6h3.1c-1.3-1.8-2.6-3.5-3.9-5.3l-.3-.3.4-.2c1-.4,1.8-1.1,2.5-2,.6-.9.9-2,.9-3.2s-.1-1.6-.4-2.3c-.3-.7-.7-1.3-1.1-1.8-.5-.5-1.1-.9-1.8-1.2-.7-.3-1.5-.4-2.3-.4h-7.5v16.6h2.7v-5.5h3.8Z"/>',
      '        <rect x="116.3" y="20.4" width="2.7" height="16.6"/>',
      '        <path d="M85.8,32h-5.9l3-6.3,3,6.3ZM74.4,37h2.9l1.3-2.7h8.5l1.3,2.7h2.9l-8.5-16.5-8.4,16.5Z"/>',
      '        <path class="cls-1" d="M56.8,56.5V.8H1v55.7h20.5v-3.1H4.1V3.9h49.6v49.5h-14.3v-5.6h8.7V9.5H9.7v38.3h13.2c2.4,0,3.9.5,4.7,1.5,1,1.5.8,4.3-.7,8.3-1,2.8-.5,5.7,1.2,7.4,1,.9,2.3,1.4,3.8,1.4s2.8-.4,3.7-.8l-1.2-2.9c-1.9.7-3.4.7-4.3,0-.9-.8-1-2.5-.4-4.1,1.9-5.2,2-8.8.3-11.2-1.3-1.9-3.7-2.8-7.2-2.8h-10.1V12.6h32.2v32.2h-8.7v11.8h20.5Z"/>',
      '        <polygon class="cls-1" points="36.3 21.3 36.3 36.1 21.5 36.1 21.5 30 30.7 30 30.7 26.9 18.4 26.9 18.4 39.2 39.4 39.2 39.4 18.2 18.4 18.2 18.4 21.3 36.3 21.3"/>',
      '      </g>',
      '    </g>',
      '  </svg>',
      '</a>',
      '<div class="nav-links">',
      '  <div class="nav-dropdown">',
      '    <a class="nav-dropdown-toggle" href="' + platformHref + '">Platform <span class="nav-dropdown-caret" aria-hidden="true">v</span></a>',
      '    <div class="nav-dropdown-menu">',
      '      <a href="' + (isHomePage ? "#platform" : "index.html#platform") + '">Devices</a>',
      '      <a href="' + (isHomePage ? "#features" : "index.html#features") + '">Features</a>',
      '      <a href="' + (isHomePage ? "#coverage" : "index.html#coverage") + '">SBOM support</a>',
      '      <a href="vulnerability-management-use-cases.html">Vulnerability use cases</a>',
      '    </div>',
      '  </div>',
      '  <div class="nav-dropdown">',
      '    <a class="nav-dropdown-toggle" href="industries.html">Industries <span class="nav-dropdown-caret" aria-hidden="true">v</span></a>',
      '    <div class="nav-dropdown-menu">',
      '      <a href="industries.html#automotive">Automotive</a>',
      '      <a href="industries.html#industrial">Industrial Automation</a>',
      '      <a href="industries.html#medical">Medical Devices</a>',
      '      <a href="industries.html#consumer">Consumer Electronics &amp; IoT</a>',
      '      <a href="industries.html#defense-aerospace">Defense &amp; Aerospace</a>',
      '      <a href="industries.html#energy-utilities">Energy &amp; Utilities</a>',
      '      <a href="industries.html#transportation-logistics">Transportation &amp; Logistics</a>',
      '    </div>',
      '  </div>',
      '  <div class="nav-dropdown">',
      '    <a class="nav-dropdown-toggle" href="resources.html">Resources <span class="nav-dropdown-caret" aria-hidden="true">v</span></a>',
      '    <div class="nav-dropdown-menu">',
      '      <a href="resources.html#blog-posts">Blog Posts</a>',
      '      <a href="resources.html#news">News</a>',
      '      <a href="resources.html#newsletters">Newsletters</a>',
      '      <a href="resources.html#articles">Articles</a>',
      '      <a href="resources.html#faq">FAQ</a>',
      '      <a href="support.html">Support</a>',
      '    </div>',
      '  </div>',
      '  <div class="nav-dropdown">',
      '    <a class="nav-dropdown-toggle" href="compliance.html">Compliance <span class="nav-dropdown-caret" aria-hidden="true">v</span></a>',
      '    <div class="nav-dropdown-menu">',
      '      <a href="compliance.html">Overview</a>',
      '      <a href="compliance.html#capabilities">Capabilities</a>',
      '      <a href="compliance.html#standards">Standards</a>',
      '      <a href="compliance.html#cra">CRA</a>',
      '      <a href="compliance.html#red">RED</a>',
      '    </div>',
      '  </div>',
      '  <div class="nav-dropdown">',
      '    <a class="nav-dropdown-toggle" href="partners.html">Partners <span class="nav-dropdown-caret" aria-hidden="true">v</span></a>',
      '    <div class="nav-dropdown-menu">',
      '      <a href="partners.html#partners">Overview</a>',
      '      <a href="partners.html#implementation-partners">Implementation Partners</a>',
      '      <a href="partners.html#reseller-partners">Reseller Partners</a>',
      '      <a href="partners.html#contact">Become a Partner</a>',
      '    </div>',
      '  </div>',
      '</div>',
      '<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">',
      '  <a class="nav-cta" href="book-a-demo.html">Book a free Demo</a>',
      '  <a class="nav-cta" href="free-trial.html">Start a free Trial</a>',
      '</div>'
    ].join("\n");
  }

  function initSharedNav() {
    ensureSharedNavStyles();

    var nav = document.querySelector(".nav");
    if (!nav) {
      nav = document.createElement("nav");
      nav.className = "nav";

      var insertBeforeNode = document.body.firstElementChild;
      if (insertBeforeNode) {
        document.body.insertBefore(nav, insertBeforeNode);
      } else {
        document.body.appendChild(nav);
      }
    }

    nav.innerHTML = getSharedNavMarkup();
  }

  function ensureSharedCtaStyles() {
    if (document.getElementById("site-cta-styles")) return;

    var style = document.createElement("style");
    style.id = "site-cta-styles";
    style.textContent = [
      ".cta.site-cta {",
      "  background: transparent;",
      "  color: var(--ink, #0f1e2b);",
      "  padding: 48px 8vw 36px;",
      "  display: flex;",
      "  flex-direction: column;",
      "  gap: 20px;",
      "  align-items: center;",
      "  text-align: center;",
      "  border-top: 1px solid var(--line, #e2e8ec);",
      "}",
      ".cta.site-cta p {",
      "  margin: 0;",
      "  color: var(--muted, #5b6b7a);",
      "}",
      ".cta.site-cta .cta-copy {",
      "  display: grid;",
      "  gap: 12px;",
      "  max-width: 720px;",
      "  justify-items: center;",
      "  text-align: center;",
      "}",
      ".cta.site-cta .footer-brand-title {",
      "  margin: 0;",
      "  color: var(--ink, #0f1e2b);",
      "}",
      ".cta.site-cta .cta-actions {",
      "  display: flex;",
      "  gap: 12px;",
      "  flex-wrap: wrap;",
      "  justify-content: center;",
      "  width: 100%;",
      "  margin-top: 30px;",
      "}",
      ".cta.site-cta a {",
      "  display: inline-flex;",
      "  align-items: center;",
      "  justify-content: center;",
      "  min-height: 44px;",
      "  padding: 12px 20px;",
      "  border-radius: 999px;",
      "  background: #f28a1a;",
      "  color: #ffffff;",
      "  font-weight: 600;",
      "  font-size: 14px;",
      "  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;",
      "}",
      ".cta.site-cta a:hover {",
      "  background: #1aa5a7;",
      "  color: #ffffff;",
      "  box-shadow: 0 12px 24px rgba(15, 30, 43, 0.18);",
      "  transform: translateY(-1px);",
      "}",
      "@media (max-width: 720px) {",
      "  .cta.site-cta {",
      "    padding: 32px 8vw 24px;",
      "  }",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function ensureShowcaseStyles() {
    if (document.getElementById("site-showcase-styles")) return;

    var style = document.createElement("style");
    style.id = "site-showcase-styles";
    style.textContent = [
      ".site-showcase {",
      "  padding: 24px 8vw 56px;",
      "  background: transparent;",
      "}",
      ".site-showcase-inner {",
      "  padding: 0;",
      "}",
      ".site-showcase-controls {",
      "  display: flex;",
      "  gap: 10px;",
      "  justify-content: center;",
      "  margin-top: 18px;",
      "}",
      ".site-showcase-button {",
      "  width: 42px;",
      "  height: 42px;",
      "  border-radius: 999px;",
      "  background: #f4f7f8;",
      "  color: var(--ink, #0f1e2b);",
      "  display: inline-flex;",
      "  align-items: center;",
      "  justify-content: center;",
      "  cursor: pointer;",
      "  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;",
      "}",
      ".site-showcase-button:hover {",
      "  background: #1aa5a7;",
      "  color: #ffffff;",
      "  transform: translateY(-1px);",
      "}",
      ".site-showcase-viewport {",
      "  overflow: hidden;",
      "}",
      ".site-showcase-track {",
      "  display: flex;",
      "  gap: 16px;",
      "  transition: transform 0.35s ease;",
      "  will-change: transform;",
      "}",
      ".site-showcase-slide {",
      "  min-width: calc((100% - 32px) / 3);",
      "}",
      ".site-showcase-frame {",
      "  border-radius: 22px;",
      "  overflow: hidden;",
      "  border: 1px solid rgba(15, 30, 43, 0.08);",
      "  background: linear-gradient(180deg, #f8fbfc 0%, #edf2f3 100%);",
      "}",
      ".site-showcase-frame img {",
      "  display: block;",
      "  width: 100%;",
      "  height: auto;",
      "}",
      ".site-showcase-dots {",
      "  display: flex;",
      "  justify-content: center;",
      "  gap: 8px;",
      "  margin-top: 16px;",
      "}",
      ".site-showcase-dot {",
      "  width: 10px;",
      "  height: 10px;",
      "  border-radius: 999px;",
      "  background: rgba(15, 30, 43, 0.18);",
      "  cursor: pointer;",
      "  transition: background 0.2s ease, transform 0.2s ease;",
      "}",
      ".site-showcase-dot.is-active {",
      "  background: #f28a1a;",
      "  transform: scale(1.1);",
      "}",
      "@media (max-width: 720px) {",
      "  .site-showcase {",
      "    padding: 16px 8vw 40px;",
      "  }",
      "  .site-showcase-slide {",
      "    min-width: 100%;",
      "  }",
      "}",
      "@media (max-width: 1024px) and (min-width: 721px) {",
      "  .site-showcase-slide {",
      "    min-width: calc((100% - 16px) / 2);",
      "  }",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function safeGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Ignore storage failures and keep the UI usable.
    }
  }

  var CONSENT_STORAGE_KEY = "arianna_cookie_consent_v1";
  var GA_MEASUREMENT_ID = "G-2SSM196X45";

  function safeParseJson(value) {
    if (!value) return null;
    try {
      return JSON.parse(value);
    } catch (error) {
      return null;
    }
  }

  function loadConsentRecord() {
    return safeParseJson(safeGet(CONSENT_STORAGE_KEY));
  }

  function saveConsentRecord(record) {
    safeSet(CONSENT_STORAGE_KEY, JSON.stringify(record));
  }

  function createConsentRecord(status) {
    return {
      status: status,
      version: 1,
      updated_at: new Date().toISOString()
    };
  }

  function consentStatus() {
    var record = loadConsentRecord();
    var status = record && typeof record.status === "string" ? record.status : "";
    return status === "accepted" || status === "necessary" ? status : "";
  }

  function allowsConsentCategory(category) {
    if (category === "necessary") return true;
    if (category === "measurement") return consentStatus() === "accepted";
    return false;
  }

  window.AriannaConsent = {
    getStatus: consentStatus,
    allows: allowsConsentCategory,
    openPreferences: function () {
      document.dispatchEvent(new CustomEvent("arianna:open-cookie-settings"));
    }
  };

  function syncGoogleAnalyticsConsent() {
    var granted = allowsConsentCategory("measurement");
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
  }

  function initGoogleAnalytics() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    if (!document.getElementById("site-google-gtag")) {
      var script = document.createElement("script");
      script.id = "site-google-gtag";
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
      document.head.appendChild(script);
    }

    if (window.__ariannaGtagConfigured === true) return;

    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500
    });
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true
    });
    window.__ariannaGtagConfigured = true;
    syncGoogleAnalyticsConsent();
  }

  function ensureCookieBannerStyles() {
    if (document.getElementById("site-cookie-banner-styles")) return;

    var style = document.createElement("style");
    style.id = "site-cookie-banner-styles";
    style.textContent = [
      ".cookie-banner {",
      "  position: fixed;",
      "  right: 24px;",
      "  bottom: 24px;",
      "  width: min(420px, calc(100vw - 32px));",
      "  padding: 22px;",
      "  border-radius: 24px;",
      "  background: rgba(11, 24, 35, 0.96);",
      "  color: rgba(255, 255, 255, 0.86);",
      "  box-shadow: 0 24px 60px rgba(15, 30, 43, 0.28);",
      "  z-index: 40;",
      "  display: none;",
      "}",
      ".cookie-banner.is-visible {",
      "  display: block;",
      "}",
      ".cookie-banner h3 {",
      "  margin: 0 0 10px;",
      "  color: #ffffff;",
      "  font-size: 18px;",
      "}",
      ".cookie-banner p {",
      "  margin: 0;",
      "  font-size: 14px;",
      "  line-height: 1.65;",
      "}",
      ".cookie-banner a {",
      "  color: #8fd7d9;",
      "  text-decoration: none;",
      "}",
      ".cookie-banner a:hover {",
      "  color: #ffffff;",
      "}",
      ".cookie-banner-actions {",
      "  display: flex;",
      "  gap: 10px;",
      "  flex-wrap: wrap;",
      "  margin-top: 18px;",
      "}",
      ".cookie-banner-actions button {",
      "  min-height: 44px;",
      "  padding: 12px 18px;",
      "  border-radius: 999px;",
      "  font-size: 13px;",
      "  font-weight: 600;",
      "  cursor: pointer;",
      "  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;",
      "}",
      ".cookie-banner-actions button:hover {",
      "  transform: translateY(-1px);",
      "}",
      ".cookie-banner-accept {",
      "  background: #f28a1a;",
      "  color: #ffffff;",
      "}",
      ".cookie-banner-accept:hover {",
      "  background: #1aa5a7;",
      "  box-shadow: 0 12px 24px rgba(15, 30, 43, 0.18);",
      "}",
      ".cookie-banner-necessary {",
      "  background: rgba(255, 255, 255, 0.1);",
      "  color: #ffffff;",
      "}",
      ".cookie-banner-necessary:hover {",
      "  background: rgba(255, 255, 255, 0.18);",
      "}",
      ".cookie-banner-status {",
      "  margin-top: 12px;",
      "  color: rgba(255, 255, 255, 0.62);",
      "  font-size: 12px;",
      "}",
      ".cookie-settings-trigger {",
      "  position: fixed;",
      "  left: 24px;",
      "  bottom: 24px;",
      "  min-height: 44px;",
      "  padding: 12px 18px;",
      "  border-radius: 999px;",
      "  background: rgba(11, 24, 35, 0.92);",
      "  color: #ffffff;",
      "  font-size: 13px;",
      "  font-weight: 600;",
      "  box-shadow: 0 18px 42px rgba(15, 30, 43, 0.2);",
      "  cursor: pointer;",
      "  z-index: 39;",
      "  display: none;",
      "}",
      ".cookie-settings-trigger.is-visible {",
      "  display: inline-flex;",
      "  align-items: center;",
      "  justify-content: center;",
      "}",
      ".cookie-settings-trigger:hover {",
      "  background: #1aa5a7;",
      "}",
      "@media (max-width: 720px) {",
      "  .cookie-banner {",
      "    left: 16px;",
      "    right: 16px;",
      "    bottom: 16px;",
      "    width: auto;",
      "    padding: 18px;",
      "    border-radius: 20px;",
      "  }",
      "  .cookie-banner-actions {",
      "    flex-direction: column;",
      "  }",
      "  .cookie-banner-actions button {",
      "    width: 100%;",
      "  }",
      "  .cookie-settings-trigger {",
      "    left: 16px;",
      "    bottom: 16px;",
      "  }",
      "}",
      "body.cookie-banner-open {",
      "  padding-bottom: 220px;",
      "}",
      "@media (max-width: 720px) {",
      "  body.cookie-banner-open {",
      "    padding-bottom: 280px;",
      "  }",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function initCookieBanner() {
    ensureCookieBannerStyles();

    var banner = document.getElementById("cookieBanner");
    if (!banner) {
      banner = document.createElement("aside");
      banner.id = "cookieBanner";
      banner.className = "cookie-banner";
      banner.setAttribute("role", "dialog");
      banner.setAttribute("aria-live", "polite");
      banner.setAttribute("aria-label", "Cookie preferences");
      banner.innerHTML = [
        '<h3>Cookie preferences</h3>',
        '<p>We use necessary browser storage to keep the site working. With your approval, we also store attribution details so we can understand which campaigns lead to demo, trial, or contact requests. See our <a href="privacy.html#storage">privacy notice</a>.</p>',
        '<div class="cookie-banner-actions">',
        '  <button class="cookie-banner-accept" type="button" data-consent-action="accepted">Accept all</button>',
        '  <button class="cookie-banner-necessary" type="button" data-consent-action="necessary">Only necessary</button>',
        "</div>",
        '<p class="cookie-banner-status" id="cookieBannerStatus"></p>'
      ].join("\n");
      document.body.appendChild(banner);
    }

    var statusNode = banner.querySelector("#cookieBannerStatus");
    var floatingTrigger = document.getElementById("cookieSettingsTrigger");

    if (!floatingTrigger) {
      floatingTrigger = document.createElement("button");
      floatingTrigger.id = "cookieSettingsTrigger";
      floatingTrigger.type = "button";
      floatingTrigger.className = "cookie-settings-trigger";
      floatingTrigger.textContent = "Cookie preferences";
      document.body.appendChild(floatingTrigger);
    }

    function statusText(status) {
      if (status === "accepted") return "Optional attribution storage is enabled.";
      if (status === "necessary") return "Only necessary storage is enabled.";
      return "";
    }

    function syncFloatingTrigger() {
      if (!floatingTrigger) return;
      var shouldShow = !!consentStatus() && !banner.classList.contains("is-visible");
      floatingTrigger.classList.toggle("is-visible", shouldShow);
    }

    function syncBannerMessage() {
      if (statusNode) statusNode.textContent = statusText(consentStatus());
      syncFloatingTrigger();
    }

    function openBanner(force) {
      var status = consentStatus();
      if (!force && status) return;
      syncBannerMessage();
      banner.classList.add("is-visible");
      document.body.classList.add("cookie-banner-open");
      syncFloatingTrigger();
    }

    function closeBanner() {
      banner.classList.remove("is-visible");
      document.body.classList.remove("cookie-banner-open");
      syncFloatingTrigger();
    }

    function setConsent(status) {
      saveConsentRecord(createConsentRecord(status));
      syncGoogleAnalyticsConsent();
      syncBannerMessage();
      closeBanner();
      document.dispatchEvent(new CustomEvent("arianna:consent-changed", {
        detail: { status: status }
      }));
    }

    banner.addEventListener("click", function (event) {
      var action = event.target && event.target.getAttribute("data-consent-action");
      if (!action) return;
      setConsent(action);
    });

    floatingTrigger.addEventListener("click", function () {
      openBanner(true);
    });

    document.addEventListener("arianna:open-cookie-settings", function () {
      openBanner(true);
    });

    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-cookie-settings-trigger]");
      if (!trigger) return;
      event.preventDefault();
      openBanner(true);
    });

    syncBannerMessage();
    openBanner(false);
  }

  function initSharedFooter() {
    var footer = document.querySelector("footer");
    if (!footer) return;

    if (!document.getElementById("site-footer-styles")) {
      var style = document.createElement("style");
      style.id = "site-footer-styles";
      style.textContent = [
        "footer.site-footer {",
        "  padding: 28px 8vw 60px;",
        "  margin-top: 0;",
        "  background: #0b1823;",
        "  color: rgba(255, 255, 255, 0.7);",
        "  display: grid;",
        "  grid-template-columns: minmax(180px, 238px) minmax(0, 1fr);",
        "  column-gap: 32px;",
        "  justify-content: start;",
        "  align-items: flex-start;",
        "}",
        "footer.site-footer .footer-brand {",
        "  margin-right: 0;",
        "  padding-top: 10px;",
        "}",
        "footer.site-footer .footer-right {",
        "  display: grid;",
        "  grid-template-columns: auto auto;",
        "  gap: 28px;",
        "  justify-content: end;",
        "  justify-items: start;",
        "  align-items: start;",
        "}",
        "footer.site-footer .footer-brand-link {",
        "  display: inline-flex;",
        "  align-items: center;",
        "}",
        "footer.site-footer .footer-brand-link svg {",
        "  display: block;",
        "  width: min(100%, 238px);",
        "  height: auto;",
        "}",
        "footer.site-footer .footer-brand-link svg path,",
        "footer.site-footer .footer-brand-link svg polygon,",
        "footer.site-footer .footer-brand-link svg rect {",
        "  fill: #ffffff;",
        "}",
        "footer.site-footer .footer-brand-link svg .cls-1 {",
        "  fill: #3fbab7;",
        "}",
        "footer.site-footer h4 {",
        "  color: white;",
        "  margin: 0 0 10px;",
        "}",
        "footer.site-footer > div:not(.footer-brand) {",
        "  padding-top: 10px;",
        "}",
        "footer.site-footer p {",
        "  margin: 0 0 8px;",
        "  color: rgba(255, 255, 255, 0.7);",
        "  font-size: 14px;",
        "  line-height: 1.5;",
        "}",
        "footer.site-footer a {",
        "  color: inherit;",
        "  text-decoration: none;",
        "  transition: color 0.2s ease;",
        "}",
        "footer.site-footer a:hover {",
        "  color: #1aa5a7;",
        "}",
        "footer.site-footer .footer-contact {",
        "  justify-self: end;",
        "  align-self: start;",
        "}",
        "@media (max-width: 720px) {",
        "  footer.site-footer {",
        "    display: grid;",
        "    grid-template-columns: 1fr;",
        "    justify-content: start;",
        "    gap: 16px;",
        "    padding: 32px 8vw 40px;",
        "  }",
        "  footer.site-footer .footer-brand {",
        "    margin-right: 0;",
        "    padding-top: 0;",
        "  }",
        "  footer.site-footer .footer-right {",
        "    grid-template-columns: 1fr;",
        "    gap: 14px;",
        "  }",
        "  footer.site-footer .footer-company,",
        "  footer.site-footer .footer-contact {",
        "    grid-column: auto;",
        "    justify-self: start;",
        "    align-self: start;",
        "  }",
        "}"
      ].join("\n");
      document.head.appendChild(style);
    }

    footer.classList.add("site-footer");

    var ctaLinks = [
      { href: "book-a-demo.html", text: "Book a free Demo" },
      { href: "free-trial.html", text: "Start a free Trial" }
    ];
    var ctaSection = footer.previousElementSibling && footer.previousElementSibling.classList.contains("cta")
      ? footer.previousElementSibling
      : null;
    if (ctaSection) {
      var links = ctaSection.querySelectorAll("a[href]");
      if (links.length) {
        ctaLinks = Array.prototype.map.call(links, function (link) {
          return {
            href: link.getAttribute("href") || "#",
            text: (link.textContent || "").trim() || "Learn more"
          };
        });
      }
    }

    footer.innerHTML = [
      '<div class="footer-brand">',
      '  <a class="footer-brand-link" aria-label="ARIANNA" href="index.html">',
      '    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.8 67.1" role="img" aria-label="ARIANNA logo">',
      '      <defs>',
      '        <style>',
      '          .cls-1 { fill: #3fbab7; }',
      '        </style>',
      '      </defs>',
      '      <g>',
      '        <g id="Laag_1">',
      '          <polygon points="162.1 20.4 159.4 20.4 159.4 31.2 147.7 20.5 147.7 37 150.4 37 150.4 26.3 162.1 36.9 162.1 20.4"/>',
      '          <path d="M197.8,25.8l2.9,6.3h-5.9l3-6.3ZM189.3,37h2.9l1.3-2.7h8.5l1.3,2.7h2.9l-8.4-16.5-8.4,16.5Z"/>',
      '          <path d="M136.5,32h-5.9l3-6.3,3,6.3ZM125.1,37h2.9l1.3-2.7h8.5l1.3,2.7h2.9l-8.4-16.5-8.5,16.5Z"/>',
      '          <polygon points="183.6 20.4 181 20.4 181 31.2 169.3 20.5 169.3 37 172 37 172 26.3 183.6 36.9 183.6 20.4"/>',
      '          <path d="M98.7,22.7h4.8c.6,0,1.2.1,1.6.4.4.2.7.6.9.9.2.3.3.7.4,1.1,0,.4,0,.7,0,1,0,.5,0,1-.3,1.4-.2.4-.4.7-.7,1-.3.3-.6.5-1,.6-.4.1-.7.2-1,.2h-4.8v-6.5ZM102.6,31.6c.7.9,1.3,1.9,2,2.8.6.9,1.3,1.7,1.9,2.6h3.1c-1.3-1.8-2.6-3.5-3.9-5.3l-.3-.3.4-.2c1-.4,1.8-1.1,2.5-2,.6-.9.9-2,.9-3.2s-.1-1.6-.4-2.3c-.3-.7-.7-1.3-1.1-1.8-.5-.5-1.1-.9-1.8-1.2-.7-.3-1.5-.4-2.3-.4h-7.5v16.6h2.7v-5.5h3.8Z"/>',
      '          <rect x="116.3" y="20.4" width="2.7" height="16.6"/>',
      '          <path d="M85.8,32h-5.9l3-6.3,3,6.3ZM74.4,37h2.9l1.3-2.7h8.5l1.3,2.7h2.9l-8.5-16.5-8.4,16.5Z"/>',
      '          <path class="cls-1" d="M56.8,56.5V.8H1v55.7h20.5v-3.1H4.1V3.9h49.6v49.5h-14.3v-5.6h8.7V9.5H9.7v38.3h13.2c2.4,0,3.9.5,4.7,1.5,1,1.5.8,4.3-.7,8.3-1,2.8-.5,5.7,1.2,7.4,1,.9,2.3,1.4,3.8,1.4s2.8-.4,3.7-.8l-1.2-2.9c-1.9.7-3.4.7-4.3,0-.9-.8-1-2.5-.4-4.1,1.9-5.2,2-8.8.3-11.2-1.3-1.9-3.7-2.8-7.2-2.8h-10.1V12.6h32.2v32.2h-8.7v11.8h20.5Z"/>',
      '          <polygon class="cls-1" points="36.3 21.3 36.3 36.1 21.5 36.1 21.5 30 30.7 30 30.7 26.9 18.4 26.9 18.4 39.2 39.4 39.2 39.4 18.2 18.4 18.2 18.4 21.3 36.3 21.3"/>',
      '        </g>',
      '      </g>',
      '    </svg>',
      '  </a>',
      '</div>',
      '<div class="footer-right">',
      '  <div class="footer-company">',
      '    <h4><a href="company.html">Company</a></h4>',
      '    <p><a href="company.html#about">About ARIANNA</a></p>',
      '    <p><a href="company.html#careers">Careers</a></p>',
      '    <p><a href="resources.html">Resources</a></p>',
      '    <p><a href="privacy.html">Privacy &amp; GDPR</a></p>',
      '    <p><a href="privacy.html#storage" data-cookie-settings-trigger="true">Cookie Settings</a></p>',
      '  </div>',
      '  <div class="footer-contact">',
      '    <h4><a href="contact.html">Contact</a></h4>',
      '    <p><a href="support.html">Support</a></p>',
      '    <p><a href="https://www.linkedin.com/company/arianna-vulnerability-management/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>',
      '    <p><a href="mailto:hello@ariannateam.ai">hello@ariannateam.ai</a></p>',
      '    <p><a href="tel:+393313482583">+39 331 3482583</a></p>',
      '  </div>',
      '</div>'
    ].join("\n");

    ensureSharedCtaStyles();

    if (!ctaSection) {
      ctaSection = document.createElement("section");
      ctaSection.className = "cta";
      footer.parentNode.insertBefore(ctaSection, footer);
    }

    ctaSection.classList.add("site-cta");
    ctaSection.innerHTML = [
      '<div class="cta-copy">',
      '  <h2 class="footer-brand-title">See ARIANNA in action</h2>',
      '  <p class="cta-body">Book a demo or Trial to explore vulnerability management workflows for your industry.</p>',
      '</div>',
      '<div class="cta-actions">',
      ctaLinks.map(function (link) {
        return '  <a href="' + link.href + '">' + link.text + "</a>";
      }).join("\n"),
      '</div>'
    ].join("\n");
  }

  function initShowcaseCarousel() {
    var footer = document.querySelector("footer");
    if (!footer) return;

    ensureShowcaseStyles();

    var imagePaths = [
      "images/ARIANNA_mockup-1_showcase.webp",
      "images/ARIANNA_mockup-2_showcase.webp",
      "images/ARIANNA_mockup-3_showcase.webp",
      "images/ARIANNA_mockup-4_showcase.webp"
    ];

    var showcase = document.querySelector(".site-showcase");
    if (!showcase) {
      showcase = document.createElement("section");
      showcase.className = "site-showcase";
      footer.parentNode.insertBefore(showcase, footer);
    }

    showcase.innerHTML = [
      '<div class="site-showcase-inner">',
      '  <div class="site-showcase-viewport">',
      '    <div class="site-showcase-track">',
      imagePaths.map(function (path, index) {
        return [
          '      <div class="site-showcase-slide" data-slide-index="' + index + '">',
          '        <div class="site-showcase-frame">',
          '          <img src="' + path + '" alt="ARIANNA platform screenshot ' + (index + 1) + '" width="1200" height="900" loading="lazy" decoding="async" />',
          "        </div>",
          "      </div>"
        ].join("\n");
      }).join("\n"),
      "    </div>",
      "  </div>",
      '  <div class="site-showcase-controls">',
      '    <button class="site-showcase-button" type="button" aria-label="Previous slide">&#8592;</button>',
      '    <button class="site-showcase-button" type="button" aria-label="Next slide">&#8594;</button>',
      '  </div>',
      '  <div class="site-showcase-dots">',
      imagePaths.map(function (_, index) {
        return '    <button class="site-showcase-dot' + (index === 0 ? " is-active" : "") + '" type="button" aria-label="Go to slide ' + (index + 1) + '" data-dot-index="' + index + '"></button>';
      }).join("\n"),
      "  </div>",
      "</div>"
    ].join("\n");

    var track = showcase.querySelector(".site-showcase-track");
    var prevButton = showcase.querySelector('.site-showcase-button[aria-label="Previous slide"]');
    var nextButton = showcase.querySelector('.site-showcase-button[aria-label="Next slide"]');
    var dots = Array.prototype.slice.call(showcase.querySelectorAll(".site-showcase-dot"));
    var currentIndex = 0;
    var timerId = null;

    function getVisibleSlides() {
      if (window.matchMedia("(max-width: 720px)").matches) return 1;
      if (window.matchMedia("(max-width: 1024px)").matches) return 2;
      return 3;
    }

    function getMaxIndex() {
      return Math.max(0, imagePaths.length - getVisibleSlides());
    }

    function render(index) {
      var maxIndex = getMaxIndex();
      if (index < 0) {
        currentIndex = maxIndex;
      } else if (index > maxIndex) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      var slide = showcase.querySelector(".site-showcase-slide");
      var step = slide ? slide.getBoundingClientRect().width + 16 : 0;
      track.style.transform = "translateX(" + (currentIndex * -step) + "px)";
      dots.forEach(function (dot, dotIndex) {
        dot.style.display = dotIndex <= maxIndex ? "block" : "none";
        dot.classList.toggle("is-active", dotIndex === currentIndex);
      });
    }

    function restartTimer() {
      if (timerId) window.clearInterval(timerId);
      timerId = window.setInterval(function () {
        render(currentIndex + 1);
      }, 4500);
    }

    prevButton.addEventListener("click", function () {
      render(currentIndex - 1);
      restartTimer();
    });

    nextButton.addEventListener("click", function () {
      render(currentIndex + 1);
      restartTimer();
    });

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        render(Math.min(Number(dot.getAttribute("data-dot-index") || 0), getMaxIndex()));
        restartTimer();
      });
    });

    showcase.addEventListener("mouseenter", function () {
      if (timerId) window.clearInterval(timerId);
    });

    showcase.addEventListener("mouseleave", function () {
      restartTimer();
    });

    window.addEventListener("resize", function () {
      render(Math.min(currentIndex, getMaxIndex()));
    });

    render(0);
    restartTimer();
  }

  function initNewsletterOverlay() {
    var overlay = document.getElementById("newsletterOverlay");
    if (!overlay) return;

    var closeButton = overlay.querySelector(".newsletter-close");
    var highIntent = document.body.getAttribute("data-newsletter-high-intent") === "true";

    function openOverlay() {
      overlay.classList.add("is-visible");
      overlay.setAttribute("aria-hidden", "false");
    }

    function closeOverlay() {
      overlay.classList.remove("is-visible");
      overlay.setAttribute("aria-hidden", "true");
    }

    var subscribed = safeGet("arianna_newsletter_subscribed") === "true";
    var dismissed = safeGet("arianna_newsletter_dismissed") === "true";
    var lastShown = Number(safeGet("arianna_newsletter_shown_at") || 0);
    var now = Date.now();

    if (!highIntent && !subscribed && !dismissed && (!lastShown || now - lastShown >= 60000)) {
      window.setTimeout(function () {
        openOverlay();
        safeSet("arianna_newsletter_shown_at", String(Date.now()));
      }, 30000);
    }

    overlay.addEventListener("submit", function (event) {
      if (!event.target.closest(".newsletter-form")) return;
      safeSet("arianna_newsletter_subscribed", "true");
      closeOverlay();
    }, true);

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        safeSet("arianna_newsletter_dismissed", "true");
        closeOverlay();
      });
    }

    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        safeSet("arianna_newsletter_dismissed", "true");
        closeOverlay();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && overlay.classList.contains("is-visible")) {
        closeOverlay();
      }
    });
  }

  function initMobileNav() {
    var dropdowns = document.querySelectorAll(".nav-dropdown");
    if (!dropdowns.length) return;

    function isMobileNav() {
      return window.matchMedia("(max-width: 720px)").matches;
    }

    function syncAria() {
      dropdowns.forEach(function (dropdown) {
        var toggle = dropdown.querySelector(".nav-dropdown-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", dropdown.classList.contains("is-open") ? "true" : "false");
      });
    }

    function closeAll(exceptNode) {
      dropdowns.forEach(function (dropdown) {
        if (dropdown !== exceptNode) dropdown.classList.remove("is-open");
      });
      syncAria();
    }

    dropdowns.forEach(function (dropdown) {
      var toggle = dropdown.querySelector(".nav-dropdown-toggle");
      if (!toggle) return;

      toggle.setAttribute("aria-expanded", "false");

      toggle.addEventListener("click", function (event) {
        if (!isMobileNav()) return;

        if (!dropdown.classList.contains("is-open")) {
          event.preventDefault();
          closeAll(dropdown);
          dropdown.classList.add("is-open");
        } else {
          dropdown.classList.remove("is-open");
        }

        syncAria();
      });
    });

    document.addEventListener("click", function (event) {
      if (!isMobileNav()) return;
      dropdowns.forEach(function (dropdown) {
        if (!dropdown.contains(event.target)) dropdown.classList.remove("is-open");
      });
      syncAria();
    });

    window.addEventListener("resize", function () {
      if (!isMobileNav()) closeAll();
    });
  }

  function initChatbot() {
    var targetId = "nutshell-boot-" + NUTSHELL_CHAT_INSTANCE;
    if (document.getElementById(targetId)) return;

    var target = document.createElement("div");
    target.id = targetId;
    document.body.appendChild(target);

    (function (n, u) {
      n[u] = n[u] || function () {
        (n[u].q = n[u].q || []).push(arguments);
      };
    }(window, "Nutsheller"));
    window.Nutsheller("boot", {
      instance: NUTSHELL_CHAT_INSTANCE,
      authToken: NUTSHELL_CHAT_AUTH_TOKEN,
      target: targetId
    });

    var script = document.createElement("script");
    script.type = "module";
    script.src = NUTSHELL_CHAT_SCRIPT;
    document.body.appendChild(script);
  }


  onReady(function () {
    ensureMontserratFont();
    ensureUppercaseTitles();
    ensureBorderlessButtons();
    initWebsiteForms();
    initGoogleAnalytics();
    initSharedNav();
    initCookieBanner();
    initSharedFooter();
    initShowcaseCarousel();
    initNewsletterOverlay();
    initMobileNav();
    initChatbot();
  });
})();
