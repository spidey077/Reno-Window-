const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header?.classList.add('is-scrolled');
  } else {
    header?.classList.remove('is-scrolled');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const freeQuoteButton = document.querySelector('.quote-form .btn');

if (freeQuoteButton) {
  freeQuoteButton.addEventListener('click', () => {
    freeQuoteButton.textContent = 'Quote request sent';
    freeQuoteButton.disabled = true;
  });
}
