// global.js — scripts globais do portfólio

(function () {
  const CONSENT_KEY = 'portfolio-clarity-consent';
  const CLARITY_ID = 'v7q4kni5pg';

  const cookieBanner = document.querySelector('.cookie-banner');
  const privacyPanel = document.querySelector('.privacy-panel');
  const openPrivacyButtons = document.querySelectorAll('[data-open-privacy]');
  const closePrivacyButtons = document.querySelectorAll('[data-close-privacy]');
  const consentButtons = document.querySelectorAll('[data-consent]');

  let clarityLoaded = false;

  function loadClarity() {
    if (clarityLoaded) return;

    clarityLoaded = true;

    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };

      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;

      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);

    window.clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: 'granted'
    });
  }

  function openPrivacy() {
    if (privacyPanel) privacyPanel.hidden = false;
  }

  function closePrivacy() {
    if (privacyPanel) privacyPanel.hidden = true;
  }

  function saveConsent(choice) {
    localStorage.setItem(CONSENT_KEY, choice);

    if (choice === 'accepted') {
      loadClarity();
    } else if (typeof window.clarity === 'function') {
      window.clarity('consentv2', {
        ad_Storage: 'denied',
        analytics_Storage: 'denied'
      });
    }

    if (cookieBanner) cookieBanner.hidden = true;
    closePrivacy();
  }

  openPrivacyButtons.forEach((button) => {
    button.addEventListener('click', openPrivacy);
  });

  closePrivacyButtons.forEach((button) => {
    button.addEventListener('click', closePrivacy);
  });

  consentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      saveConsent(button.dataset.consent);
    });
  });

  if (privacyPanel) {
    privacyPanel.addEventListener('click', (event) => {
      if (event.target === privacyPanel) closePrivacy();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePrivacy();
  });

  const savedConsent = localStorage.getItem(CONSENT_KEY);

  if (savedConsent === 'accepted') {
    loadClarity();
  } else if (savedConsent !== 'rejected' && cookieBanner) {
    cookieBanner.hidden = false;
  }
})();
