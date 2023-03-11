const nav = document.querySelector("#colnav"),
  toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("close");
});




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




