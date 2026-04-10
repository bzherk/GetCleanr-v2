(function () {
  var nav = document.querySelector('nav');
  if (!nav) return;
  var toggle = nav.querySelector('.nav-toggle');
  var mobile = document.getElementById('site-nav-mobile');
  var backdrop = mobile && mobile.querySelector('.nav-mobile__backdrop');
  if (!toggle || !mobile) return;

  function openMenu() {
    mobile.classList.add('is-open');
    document.body.classList.add('nav-menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    mobile.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    mobile.classList.remove('is-open');
    document.body.classList.remove('nav-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    mobile.setAttribute('aria-hidden', 'true');
  }

  function onToggleClick(e) {
    e.stopPropagation();
    if (mobile.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  toggle.addEventListener('click', onToggleClick);

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  mobile.querySelectorAll('.nav-mobile__list a, .nav-mobile__cta').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobile.classList.contains('is-open')) {
      closeMenu();
    }
  });
})();
