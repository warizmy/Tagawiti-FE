import routes from './routes/routes';
import UrlParser from './routes/url-parser';
import Footer from './view/component/footer';
import Navbar from './view/component/navbar';
import Profile from './view/pages/feature/profile';
import Home from './view/pages/home';

class Main {
  constructor({
    content, loadingContainer, mainContentWrapper,
  }) {
    this._content = content;
    this._loadingContainer = loadingContainer;
    this._mainContentWrapper = mainContentWrapper;

    this.InitialAppShell();
  }

  InitialAppShell() {
    const navbar = new Navbar().render();
    const footer = new Footer().render();

    if (this._mainContentWrapper && this._mainContentWrapper.parentNode) {
      this._mainContentWrapper.parentNode.insertBefore(navbar, this._mainContentWrapper);

      if (this._mainContentWrapper.nextSibling) {
        this._mainContentWrapper.parentNode.insertBefore(footer, this._mainContentWrapper.nextSibling);
      } else {
        this._mainContentWrapper.parentNode.appendChild(footer);
      }
    }
  }

  renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const Page = routes[url];

    if (Page) {
      const page = new Page();
      this._content.innerHTML = '';
      this._content.appendChild(page._render());

      if (url === '/') {
        const homePage = new Home();
        homePage._initializeEvent();
      }
      if (url === '/profile') {
        const profilePage = new Profile();
        profilePage._initializeEvent();
      }
      if (url === '/berita') {
        const profilePage = new Profile();
        profilePage._initializeEvent();
      }
      if (url === '/market') {
        const profilePage = new Profile();
        profilePage._initializeEvent();
      }
    }
  }
}

export default Main;
