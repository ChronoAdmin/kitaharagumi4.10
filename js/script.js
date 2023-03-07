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
  const headerNav = document.querySelector("#header-nav")
  console.log(this.window.scrollY)
  if (window.scrollY > 500) {
    headerH1.classList.add("none")
  }
  else if (window.scrollY < 500) {
    headerH1.classList.remove("none")
  }
  if (window.scrollY > 900) {
    headerNav.classList.add("none")
  }
  else if (window.scrollY < 900) {
    headerNav.classList.remove("none")
  }
});



//scroll_effect End--------------------------------------------------------------------------------------------------------------------------------------------------------------




// スワイパー start---------------------------------------------------------------------------------------------------------------------------------------------------------




