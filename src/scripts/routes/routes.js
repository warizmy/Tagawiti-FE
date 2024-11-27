import Gallery from '../view/pages/feature/gallery';
import Market from '../view/pages/feature/market';
import News from '../view/pages/feature/news';
import Profile from '../view/pages/feature/profile';
import DetailBerita from '../view/pages/template-creators/detailBerita';

const { default: Home } = require('../view/pages/home');

const routes = {
  '/': Home,
  '/galeri': Gallery,
  '/profile': Profile,
  '/berita': News,
  '/market': Market,
  '/berita/:id-title': DetailBerita,
};

export default routes;
