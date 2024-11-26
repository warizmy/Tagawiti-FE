import Gallery from '../view/pages/feature/gallery';
import Market from '../view/pages/feature/market';
import News from '../view/pages/feature/news';
import Profile from '../view/pages/feature/profile';

const { default: Home } = require('../view/pages/home');

const routes = {
  '/': Home,
  '/galeri': Gallery,
  '/profile': Profile,
  '/berita': News,
  '/market': Market,
};

export default routes;
