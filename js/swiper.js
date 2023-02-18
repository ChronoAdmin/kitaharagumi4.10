var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    breakpoints: {
      // 768px以上の場合
      300: {
        slidesPerView: 1,
        spaceBetween: 10,

      },
      // 980px以上の場合
      1000: {
        slidesPerView: 2,
      },
      // 1200px以上の場合
      1200: {
        slidesPerView: 3,
      }
    } ,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });