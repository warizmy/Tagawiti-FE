import 'lazysizes';
import 'quill/dist/quill.snow.css';
import '../styles/main.css';
import Main from './app';
import LoadingCircle from './utils/loading';
import NavbarVisibility from './utils/navbarVisibility ';

const app = new Main({
  content: document.querySelector('#mainContent'),
  loadingContainer: document.getElementById('loading-circle-container'),
  mainContentWrapper: document.querySelector('.main-content-wrapper'),
});

const loadingBar = new LoadingCircle();

window.addEventListener('hashchange', () => {
  document.querySelectorAll('.nav-links').forEach(link => {
    const pathName = window.location.hash.slice(1);
    if (link.getAttribute('href').slice(1) === pathName) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current', 'page');
    }
  });
  app.renderPage();
  window.scrollTo(0, 0);
});

window.addEventListener('load', async () => {
  document.querySelectorAll('.nav-links').forEach(link => {
    const pathName = window.location.hash.slice(1);
    if (link.getAttribute('href').slice(1) === pathName) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current', 'page');
    }
  });
  loadingBar.show();
  app.renderPage();
  loadingBar.hide();
});

// eslint-disable-next-line no-new
new NavbarVisibility('.navbar');
