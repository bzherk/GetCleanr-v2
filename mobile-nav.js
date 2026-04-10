(function () {
  'use strict';
  var nav = document.querySelector('nav');
  if (!nav) return;

  var toggle = nav.querySelector('.nav-toggle');
  var mobile = document.getElementById('site-nav-mobile');
  var backdrop = mobile && mobile.querySelector('.nav-mobile__backdrop');

  if (!toggle || !mobile) return;

  function openMenu() {
    mobile.removeAttribute('hidden');
    mobile.classList.add('is-open');
    document.body.classList.add('nav-menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
  }

  function closeMenu() {
    mobile.classList.remove('is-open');
    mobile.setAttribute('hidden', '');
    document.body.classList.remove('nav-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  }

  function isOpen() {
    return mobile.classList.contains('is-open');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    if (isOpen()) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  mobile.querySelectorAll('.nav-mobile__list a, .nav-mobile__cta').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) {
      closeMenu();
    }
  });
})();
