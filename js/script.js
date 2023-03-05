const nav = document.querySelector("#colnav"),
  toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("close");
});




// アンダーライン start-------------------------------------------------------------------------------------------------------------------------------------------------------


$(window).scroll(function (){
  $(".js-markerScrollAnimation").each(function(){
    var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
    var scroll = $(window).scrollTop(); //スクロールの位置を取得
    var windowHeight = $(window).height(); //ウインドウの高さを取得
    if (scroll > position - windowHeight){ //スクロール位置が要素の位置を過ぎたとき
      $(this).addClass('is-active'); //クラス「active」を与える
    }
  });
});
// アンダーライン end-------------------------------------------------------------------------------------------------------------------------------------------------------



//scroll_effect Start--------------------------------------------------------------------------------------------------------------------------------------------------------------
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right , .scroll_left_title , .underEffect');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 150;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});


$(window).scroll(function () {
  if($(window).scrollTop() > 800) {
    $('#header-nav').addClass('none');
    $('.header-logo').addClass('none');
  } else {
    $('#header-nav').removeClass('none');
    $('.header-logo').removeClass('none');
  }
});
$(window).scroll(function () {
  if($(window).scrollTop() > 300) {
    $('.header-title').addClass('none');
  } else {
    $('.header-title').removeClass('none');
  }
});


$(".mv video").on("loadedmetadata",function(){
  $("body").addClass("close")
  $(".loadingBody").fadeOut(1500)
})
//scroll_effect End--------------------------------------------------------------------------------------------------------------------------------------------------------------




// スワイパー start---------------------------------------------------------------------------------------------------------------------------------------------------------




