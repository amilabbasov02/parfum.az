$('.home-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 1,
  nav: true,
  navText: ["<img src='../img/left-arrow.svg'>", "<img src='../img/right-arrow.svg'>"]
})
$('.product-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 4,
  nav: true,
  navText: ["<img src='../img/left-arrow.svg'>", "<img src='../img/right-arrow.svg'>"],
  responsive : {
    0 : {
      items: 1
    },
    565 : {
      items: 2
    },
    768 : {
      items: 3
    },
    992 : {
      items: 4
    }
}
})
$('.parfum-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 3,
  nav: true,
  navText: ["<img src='../img/left-arrow.svg'>", "<img src='../img/right-arrow.svg'>"],
  responsive : {
    0 : {
      items: 1
    },
    565 : {
      items: 2
    },
    992 : {
      items: 3
    }
  }
})
$('.comment-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center: true,
  items: 1,
  nav: false,
  navText: ["<img src='../img/left-arrow.svg'>", "<img src='../img/right-arrow.svg'>"]
})
$(".whish").click(function () {
  $(this).toggleClass("active")
})
var mySwiper = new Swiper(".slider-1", {
  spaceBetween: 1,
  slidesPerView: 5,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 3
    },
    1240: {
      slidesPerView: 5
    },
  }
});
var mySwiper = new Swiper(".slider-3", {
  spaceBetween: 1,
  slidesPerView: 3,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 3
    },
  }
});
var mySwiper = new Swiper(".box-slider-1", {
  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
$(".hecm-card").click(function () {
  $(".hecm-card").removeClass("active")
  $(this).addClass("active")
})
$(".flakon a").click(function () {
  $(".flakon a").removeClass("active")
  $(this).addClass("active")
})
$(".add-cart").click(function (e) {
  $(".pop-up-active").addClass("active")
});
$(".img-close").click(function (e) {
  $(".pop-up-active").removeClass("active")
});
$(".cart-icons a:first-child svg").click(function () {
  $(".cart-icons").toggleClass("active")
})
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 260) {
    $("#cart .cart-fixed").addClass("fixed")
  } else {
    $("#cart .cart-fixed").removeClass("fixed")
  }
  if (scroll >= 890) {
    $("#tester-page .cart-fixed").addClass("fixed")
  } else {
    $("#tester-page .cart-fixed").removeClass("fixed")
  }
  if (scroll >= 260) {
    $(".order-end .cart-fixed").addClass("fixed")
  } else {
    $(".order-end .cart-fixed").removeClass("fixed")
  }
})
$(".tester-btn:first-child").click(function () {
  $(this).addClass("active")
  $(this).parent().find(".tester-btn-delete").addClass("active")
})
$(".tester-btn-delete").click(function () {
  $(this).removeClass("active")
  $(this).parent().find(".tester-btn").removeClass("active")
})
$(".select-1 a").click(function (e) {
  $(this).addClass("active"),
    $(".select-2 a").removeClass("active"),
    $(".hecm").css("display", "flex"),
    $(".flakon").css("display", "none")
});
$(".select-2 a").click(function (e) {
  $(this).addClass("active"),
    $(".select-1 a").removeClass("active"),
    $(".hecm").css("display", "none"),
    $(".flakon").css("display", "flex")
})
$('.profile-part-1 ul li').click(function () {
  let child = $(this).data('id');
  $(".profile-part-2 .profile-main").css("display", "none");
  $(`.profile-part-2 .profile-main:nth-child(${child})`).css("display", "flex")
  $(".profile-part-1 ul li").removeClass("active")
  $(this).addClass("active")
});
$(".order-text").click(function () {
  $(this).toggleClass("active")
})
$(".volume-click").click(function () {
  $(this).parent().toggleClass("active")
})
$(".product-single-like").click(function () {
  $(this).toggleClass("active")
})
$(".product-item-1 a").click(function () {
  $(this).parent().addClass("active")
  $(".product-item-2").removeClass("active")
  $(".textbox1").addClass("active")
  $(".textbox2").removeClass("active")
})
$(".product-item-2 a").click(function () {
  $(this).parent().addClass("active")
  $(".product-item-1").removeClass("active")
  $(".textbox2").addClass("active")
  $(".textbox1").removeClass("active")
})
$(".shop-block").click(function(){
  $(".order-shop").removeClass("active")
  $(this).parent().toggleClass("active")
})
$(".method").click(function(){
  $(".method").removeClass("active")
  $(this).toggleClass("active")
})
$(".menu").click(function(){
  $(".menu-opened").toggleClass("active")
  $(".menu").toggleClass("active")
})
$(document).ready(function(){
  $(".gif").addClass("active")
})
let stars = $('.form-star svg');

stars.each(function (index, elem) {
  elem.addEventListener('click', function () {
    stars.removeClass('active')
    for (let i = 0; i < 5; i++) {
      if(i<=index){
        stars[i].classList.add('active')
      }
    }
  });
});
const popup = document.querySelector('.pop-up');
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('active');
    document.body.style.cssText = '';
  }
});
$("select").niceSelect();