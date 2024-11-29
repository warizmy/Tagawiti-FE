import Gallery from '../view/pages/feature/gallery';
import Market from '../view/pages/feature/market';
import News from '../view/pages/feature/news';
import Product1 from '../view/pages/feature/product/product1';
import Product2 from '../view/pages/feature/product/product2';
import Product3 from '../view/pages/feature/product/product3';
import Product4 from '../view/pages/feature/product/product4';
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
  '/product-jagreenola': Product1,
  '/product-makau': Product2,
  '/product-fishfloss': Product3,
  '/product-greendrink': Product4,

};

export default routes;
