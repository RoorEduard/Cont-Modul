const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const body = document.body;
const pageShell = document.querySelector('.page__shell');

if (body && pageShell) {
  body.classList.add('page-transition-ready');
  pageShell.classList.add('page-transition-shell');

  window.addEventListener('load', () => {
    pageShell.classList.add('is-visible');
  });

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    link.addEventListener('click', (event) => {
      const target = link.getAttribute('target');
      if (target === '_blank') {
        return;
      }

      const samePage = href.startsWith('#');
      if (samePage) {
        return;
      }

      event.preventDefault();
      body.classList.add('page-transition-active');
      setTimeout(() => {
        window.location.href = href;
      }, 220);
    });
  });
}

document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.classList.add('sent');
    const button = form.querySelector('button');
    if (button) button.textContent = 'Сообщение отправлено';
  });
});
