"use strict";

// temp active menu item (remove on backend)
$(function () {
  $('.inner-nav a[href^="' + location.pathname.split("/")[1] + '"]').addClass('is-active');
});
//masked inputs
$(function () {
  Inputmask({
    "mask": "+7 (999) 999 - 99 - 99"
  }).mask('.phone-mask');
});
//
// // tabs
// document.addEventListener('DOMContentLoaded', function () {
//   const tabsBtn = document.querySelectorAll('.tabs__btn');
//   tabsBtn.forEach(function (el) {
//     el.addEventListener('click', function (event) {
//       tabsBtn.forEach(tabsBtn => {
//         tabsBtn.classList.remove('is-active');
//       });
//       const path = event.currentTarget.dataset.path;
//       document.querySelectorAll('.tabs__content').forEach(function (tabContent) {
//         tabContent.classList.remove('is-active');
//       });
//       document.querySelector(`[data-target="${path}"]`).classList.add('is-active');
//       el.classList.add('is-active');
//     });
//   });
// });
//
//
// // mobile menu
$(function () {
  var btnMenu = document.querySelectorAll('.js-open-mobile-menu');
  var menu = document.querySelector('.js-mobile-menu');
  var body = document.querySelector('body');
  btnMenu.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('is-open');
      body.classList.toggle('opened-menu');
    });
  });
  var closeBtn = document.querySelector('.js-close-mobile-menu');
  closeBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.remove('is-open');
    body.classList.remove('opened-menu');
  });
});

// mobile sub menu
$('.js-open-mobile-sub').click(function () {
  $(this).toggleClass('is-open');
  $(this).find('.sub-menu').toggleClass('is-open');
});

// open order
$('.js-open-order').click(function () {
  $(this).parent().toggleClass('is-open');
});
$('.orders-item__label').click(function (event) {
  event.stopPropagation();
});