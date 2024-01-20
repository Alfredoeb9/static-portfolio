/******/ ;(() => {
  // webpackBootstrap
  /******/ 'use strict'
  var __webpack_exports__ = {}

  var focusedElementBeforeModal,
    portfolioContainer = document.querySelector('.portfolio_items'),
    trueModal = document.querySelector('.portfolio_modal'),
    page = document.querySelector('html'),
    main = document.querySelector('main')
  function overLay() {
    document
      .querySelector('.navigation_button')
      .addEventListener('click', function () {
        main.classList.toggle('overlay')
      })
  }
  function linkClick() {
    var e = document.querySelectorAll('.navigation_link'),
      t = {
        navigationContainer: document.querySelector('.navigation'),
        navigationButton: document.querySelector('.navigation_button'),
        navigationBackground: document.querySelector('.navigation_background'),
        navigationNav: document.querySelector('.navigation_navigation'),
      }.navigationContainer
    Array.from(e).forEach(function (e) {
      e.addEventListener('click', function (e) {
        main.classList.remove('overlay'),
          t.setAttribute('data-toggle', 'closed'),
          (page.style.overflowY = 'scroll')
      })
    })
  }
  function ready(e) {
    ;(
      document.attachEvent
        ? 'complete' === document.readyState
        : 'loading' !== document.readyState
    )
      ? e()
      : document.addEventListener('DOMContentLoaded', e)
  }
  portfolioContainer.addEventListener('click', function (e) {
    ;(focusedElementBeforeModal = document.activeElement),
      trueModal.addEventListener('keydown', function (e) {
        9 === e.keyCode &&
          (e.shiftKey
            ? document.activeElement === r && (e.preventDefault(), l.focus())
            : document.activeElement === l && (e.preventDefault(), r.focus()))
      }),
      e.preventDefault()
    var t = e.target.closest('.portfolio_link')
    if (t) {
      var n = t.parentNode.nextElementSibling,
        o = n.querySelector('.modal_close'),
        a = function e(t) {
          n.classList.remove('is-open'),
            n.removeEventListener('animationend', e)
        }
      o.addEventListener('click', function (e) {
        ;(n.style.animation = 'modalOut 500ms forwards'),
          n.addEventListener('animationend', a)
      }),
        document.addEventListener('keydown', function (e) {
          27 === e.keyCode &&
            ((n.style.animation = 'modalOut 500ms forwards'),
            n.addEventListener('animationend', a),
            (document.body.style.overflowY = 'scroll'))
        })
      var i = trueModal.querySelectorAll(
          'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
        ),
        r = (i = Array.prototype.slice.call(i))[0],
        l = i[i.length - 1]
      r.focus(),
        n.classList.add('is-open'),
        (n.style.animation = 'modalIn 500ms forwards')
    }
  }),
    linkClick(),
    ready(function () {
      var n = {
        navigationContainer: document.querySelector('.navigation'),
        navigationButton: document.querySelector('.navigation_button'),
        navigationBackground: document.querySelector('.navigation_background'),
        navigationNav: document.querySelector('.navigation_navigation'),
      }
      n.navigationButton.addEventListener('click', function (e) {
        var t = n.navigationContainer
        'closed' === t.getAttribute('data-toggle')
          ? (t.setAttribute('data-toggle', 'open'),
            (page.style.overflowY = 'hidden'))
          : (t.setAttribute('data-toggle', 'closed'),
            (page.style.overflowY = 'scroll'))
      }),
        overLay()
    })
  /******/
})()
