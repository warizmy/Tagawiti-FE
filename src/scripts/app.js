import routes from './routes/routes';
import UrlParser from './routes/url-parser';
import GoToTopButton from './utils/btnGoTop';
import Footer from './view/component/footer';
import Navbar from './view/component/navbar';
import Market from './view/pages/feature/market';
import News from './view/pages/feature/news';
import Product1 from './view/pages/feature/product/product1';
import Product2 from './view/pages/feature/product/product2';
import Product3 from './view/pages/feature/product/product3';
import Product4 from './view/pages/feature/product/product4';
import Profile from './view/pages/feature/profile';
import Home from './view/pages/home';
import DetailBerita from './view/pages/template-creators/detailBerita';

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

    // eslint-disable-next-line no-new
    new GoToTopButton();

    if (this._mainContentWrapper && this._mainContentWrapper.parentNode) {
      this._mainContentWrapper.parentNode.insertBefore(navbar, this._mainContentWrapper);

      if (this._mainContentWrapper.nextSibling) {
        this._mainContentWrapper.parentNode.insertBefore(footer, this._mainContentWrapper.nextSibling);
      } else {
        this._mainContentWrapper.parentNode.appendChild(footer);
      }
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const Page = routes[url];

    if (Page) {
      const page = new Page();
      this._content.innerHTML = '';
      this._content.appendChild(await page._render());

      if (url === '/') {
        const homePage = new Home();
        homePage._initializeEvent();
      }

      if (url === '/profile') {
        const profilePage = new Profile();
        profilePage._initializeEvent();
      }

      if (url === '/market') {
        const marketPage = new Market();
        marketPage._initializeEvent();
      }
      if (url === '/product-jagreenola') {
        const product1Page = new Product1();
        product1Page._initializeEvent();
      }
      if (url === '/product-makau') {
        const product2Page = new Product2();
        product2Page._initializeEvent();
      }
      if (url === '/product-fishfloss') {
        const product3Page = new Product3();
        product3Page._initializeEvent();
      }
      if (url === '/product-greendrink') {
        const product4page = new Product4();
        product4page._initializeEvent();
      }
    }

    if (url.startsWith('/berita/')) {
      const splitedUrl = UrlParser.parseActiveUrlWithoutCombiner();

      if (splitedUrl.id) {
        const detailPage = new DetailBerita(splitedUrl.id);
        this._content.innerHTML = '';

        const pageContent = await detailPage._render();
        this._content.appendChild(pageContent);
      } else {
        const newsPage = new News();
        this._content.innerHTML = '';
        this._content.appendChild(await newsPage._render());
      }
    }
  }
}

export default Main;
