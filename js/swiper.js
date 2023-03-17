var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,

      },
      // 980px以上の場合
      550: {
        slidesPerView: 2,
      },
      // 1200px以上の場合
      1280: {
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
  })


  var swiper2 = new Swiper(".s-mySwiper", {
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
