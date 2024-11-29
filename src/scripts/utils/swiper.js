/* eslint-disable no-new */
class SwiperUtility {
  constructor() {
    this.initSwiper();
  }

  initSwiper() {
    new Swiper('.swiper-1', {
      navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1',
      },
      pagination: {
        el: '.swiper-pagination-1',
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

    new Swiper('.swiper-2', {
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      },
      pagination: {
        el: '.swiper-pagination-2',
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

    new Swiper('.swiper-3', {
      navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
      },
      pagination: {
        el: '.swiper-pagination-3',
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

    new Swiper('.swiper-4', {
      navigation: {
        nextEl: '.swiper-button-next-4',
        prevEl: '.swiper-button-prev-4',
      },
      pagination: {
        el: '.swiper-pagination-4',
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
