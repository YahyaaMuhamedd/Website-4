let toggler = document.querySelector(".toggle");
let nav = document.querySelector(" .nav-bar .container ");
let close = document.querySelector(".close");
let back = document.querySelector("body");
let img = document.querySelector(".header .container .mobile-img");
let button = document.querySelector(".header .info .content .button");
let banner = document.querySelector(".header .banner");




toggler.onclick = function () {
  nav.classList.add("open");
  back.style.background = "rgba(0, 0, 0, 0.5)";
  img.style.opacity = "0.6"
  back.style.transition = ".4s"
  img.style.transition = ".4s"
  button.style.opacity = "0.6"
  banner.style.opacity = "0.6"
}
;

close.onclick = function () {
  this.parentElement.classList.remove("open");
  back.style.background = "";
  img.style.opacity = ""
  img.style.transition = ".4s"
  button.style.opacity = ""
  banner.style.opacity = ""
}
;

document.onkeyup = function (e) {
  // console.log(e);
  if (e.key === "Escape") {
    nav.classList.remove("open");
    back.style.background = "";
    img.style.opacity = ""
    img.style.transition = ".4s"
    button.style.opacity = ""
    banner.style.opacity = ""
  }
};

// let scroller = document.querySelector(".scroller")

// window.addEventListener('scroll', function() {
//   var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
//   if (scrollPosition > 605){
//     scroller.style.display="block";
//     } else{
//       scroller.style.display="none";
//       }
//       });
      
//       scroller.addEventListener('click', function(){
//         window.scrollTo({top: 0, behavior: 'smooth'});
//       })

let scroller = document.querySelector(".scroller");

scroller.onclick = function () { 
      document.body.scrollIntoView({behavior: "smooth"});   
      // This Code or 
      // window.scrollTo({
      //     left: 1,
      //     behavior: 'smooth',
      //     top: 1,
  //     })
  }
window.onscroll = function () {
  if (window.scrollY >= 599) {
    scroller.style.display = "block";
    scroller.style.display = "flex"
  }  else {
      scroller.style.display = "none";
  }
}
document.addEventListener(
  "DOMContentLoaded",
  function() {
    setTimeout(function() {    document.getElementById("loading").className = "slideDown";
    }, 3800);
  },
  false
);

document.addEventListener(
  "DOMContentLoaded",
  function() {
    setTimeout(function() {
      document.getElementById("loading-center").className = "zoomOut";
    }, 3200);
  },
  false
);


document.addEventListener(
  "DOMContentLoaded",
  function() {
    setTimeout(function() {
      document.getElementById("block-1").className = "slideInUp";
    }, 3800);
  },
  false
);










