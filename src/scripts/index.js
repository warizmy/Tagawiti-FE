import AOS from 'aos';
import 'aos/dist/aos.css';
import 'lazysizes';
import 'quill/dist/quill.snow.css';
import '../styles/main.css';
import Main from './app';
import LoadingCircle from './utils/loading';
import NavbarVisibility from './utils/navbarVisibility ';
import updateAria from './utils/updateAria';
import Navbar from './view/component/navbar';

const app = new Main({
  content: document.querySelector('#mainContent'),
  loadingContainer: document.getElementById('loading-circle-container'),
  mainContentWrapper: document.querySelector('.main-content-wrapper'),
});

const loadingBar = new LoadingCircle();

window.addEventListener('load', () => {
  updateAria();
  loadingBar.show();

  setTimeout(() => {
    app.renderPage();
    loadingBar.hide();

    AOS.init({
      duration: 250,
      easing: 'ease-in-out',
      once: false,
    });
  }, 500);
});

window.addEventListener('hashchange', () => {
  updateAria();
  app.renderPage();
  window.scrollTo(0, 0);
});

// eslint-disable-next-line no-new
new NavbarVisibility('.navbar');
const navbarToggle = new Navbar();
navbarToggle.initialize();
