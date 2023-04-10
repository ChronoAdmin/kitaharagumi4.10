




// アンダーライン start-------------------------------------------------------------------------------------------------------------------------------------------------------



// アンダーライン end-------------------------------------------------------------------------------------------------------------------------------------------------------



//scroll_effect Start--------------------------------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener('scroll', function(){
  const headerH1 = document.querySelector(".header-title")
  const headerNav = document.getElementById("header-nav")
  if ( headerH1 === null) {
    if (window.scrollY > 250) {
      headerNav.classList.add("none")
    }
    else if (window.scrollY < 250) {
      headerNav.classList.remove("none")
    }
    console.log("h1が存在しません")
  }
  else{
    console.log("h1が存在します")

    if (window.scrollY > 500) {
      headerH1.classList.add("none")
    }
    else if (window.scrollY < 500) {
      headerH1.classList.remove("none")
    }
    if (window.scrollY > 800) {
      headerNav.classList.add("none")
    }
    else if (window.scrollY < 800) {
      headerNav.classList.remove("none")
    }
  }
});



//scroll_effect End--------------------------------------------------------------------------------------------------------------------------------------------------------------




// スワイパー start---------------------------------------------------------------------------------------------------------------------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       const target = document.querySelector(this.getAttribute('href'));
//       const headerHeight = 10; // ヘッダーの高さ

//       window.scroll({
//         top: target.offsetTop - headerHeight,
//         behavior: 'smooth'
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const marginTop = 1500; // Define the margin-top value here.
      window.scrollTo({
        top: targetElement.offsetTop - marginTop,
        behavior: "smooth",
      });
    }
  }
});