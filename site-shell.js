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
        '<p>We use necessary browser storage to keep the site working. With your approval, we also load our website chat and store attribution details so we can understand which campaigns lead to demo or contact requests. See our <a href="privacy.html#privacy-storage">privacy notice</a>.</p>',
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

  function ensureNutshellLoader() {
    (function (n, u) {
      n[u] = n[u] || function () {
        (n[u].q = n[u].q || []).push(arguments);
      };
    }(window, "Nutsheller"));

    if (document.getElementById("nutshell-loader")) return;
    var script = document.createElement("script");
    script.id = "nutshell-loader";
    script.type = "module";
    script.src = NUTSHELL_CHAT_SCRIPT;
    document.body.appendChild(script);
  }

  // Forms and meeting schedulers are only on pages where the visitor asks for
  // them (contact, demo), so they load straight away.
  function initNutshellEmbeds() {
    var forms = document.querySelectorAll("[data-nutshell-form]");
    var schedulers = document.querySelectorAll("[data-nutshell-scheduler]");
    if (!forms.length && !schedulers.length) return;
    ensureNutshellLoader();

    // CRM forms: <div id="nutshell-form-ID" data-nutshell-form="ID"></div>
    forms.forEach(function (formTarget) {
      window.Nutsheller("initForm", {
        form: formTarget.getAttribute("data-nutshell-form"),
        instance: NUTSHELL_CHAT_INSTANCE,
        authToken: "",
        target: formTarget.id
      });
    });

    // Meeting schedulers: <div id="nutshell-scheduler-ID" data-nutshell-scheduler="ID"></div>
    schedulers.forEach(function (schedulerTarget) {
      window.Nutsheller("initScheduler", {
        meeting: schedulerTarget.getAttribute("data-nutshell-scheduler"),
        instance: NUTSHELL_CHAT_INSTANCE,
        authToken: "",
        target: schedulerTarget.id
      });
    });
  }

  // The chat widget is optional, so it only loads after "Accept all".
  function bootChat() {
    var targetId = "nutshell-boot-" + NUTSHELL_CHAT_INSTANCE;
    if (document.getElementById(targetId)) return;

    var target = document.createElement("div");
    target.id = targetId;
    document.body.appendChild(target);

    ensureNutshellLoader();
    window.Nutsheller("boot", {
      instance: NUTSHELL_CHAT_INSTANCE,
      authToken: NUTSHELL_CHAT_AUTH_TOKEN,
      target: targetId
    });
  }

  function initChatbot() {
    if (consentStatus() === "accepted") bootChat();
    document.addEventListener("arianna:consent-changed", function (event) {
      if (event.detail && event.detail.status === "accepted") bootChat();
    });
  }


  onReady(function () {
    ensureMontserratFont();
    initWebsiteForms();
    initGoogleAnalytics();
    initCookieBanner();
    initNutshellEmbeds();
    initChatbot();
  });
})();
