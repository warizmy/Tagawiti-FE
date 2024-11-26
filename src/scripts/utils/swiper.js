/* eslint-disable no-new */
class SwiperUtility {
  constructor() {
    this.initSwiper();
  }

  initSwiper() {
    new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1650: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
}

export default SwiperUtility;
