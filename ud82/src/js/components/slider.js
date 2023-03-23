  // core version + navigation, pagination modules:
  import Swiper, { Navigation } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation],
      // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },  
    slidesPerView: 1,
    spaceBetween: 32,

    breakpoints: {
      // when window width is >= 320px
      720: {
        slidesPerView: 2,
      },
      1140: {
        slidesPerView: 3,
      },
    },

  });

  // 'md': '720px',
  // 'lg': '960px',
  // 'xl': '1140px',