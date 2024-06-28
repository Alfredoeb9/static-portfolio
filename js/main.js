'use strict'
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
  var navigationLink = document.querySelectorAll('.navigation_link'),
    navigationList = {
      navigationContainer: document.querySelector('.navigation'),
      navigationButton: document.querySelector('.navigation_button'),
      navigationBackground: document.querySelector('.navigation_background'),
      navigationNav: document.querySelector('.navigation_navigation'),
    }.navigationContainer

  Array.from(navigationLink).forEach(function (ele) {
    ele.addEventListener('click', function (e) {
      main.classList.remove('overlay'),
        navigationList.setAttribute('data-toggle', 'closed'),
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
      'Tab' === e.key &&
        (e.shiftKey
          ? document.activeElement === r && (e.preventDefault(), l.focus())
          : document.activeElement === l && (e.preventDefault(), r.focus()))
    }),
    e.preventDefault()

  var portfolioLinkTarget = e.target.closest('.portfolio_link')

  if (portfolioLinkTarget) {
    var portfolioNextSibling =
        portfolioLinkTarget.parentNode.nextElementSibling,
      modalClose = portfolioNextSibling.querySelector('.modal_close'),
      removeClassandEvent = function removeProperties(portfolioLinkTarget) {
        portfolioNextSibling.classList.remove('is-open'),
          portfolioNextSibling.removeEventListener(
            'animationend',
            removeProperties
          )
      }
    modalClose.addEventListener('click', function () {
      ;(portfolioNextSibling.style.animation = 'modalOut 500ms forwards'),
        portfolioNextSibling.addEventListener(
          'animationend',
          removeClassandEvent
        )
    }),
      document.addEventListener('keydown', function (e) {
        console.log('e', e.key)
        'Esc' === e.key ||
          ('Escape' === e.key &&
            ((portfolioNextSibling.style.animation = 'modalOut 500ms forwards'),
            portfolioNextSibling.addEventListener(
              'animationend',
              removeClassandEvent
            ),
            (document.body.style.overflowY = 'scroll')))
      })
    var i = trueModal.querySelectorAll(
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'
      ),
      r = (i = Array.prototype.slice.call(i))[0],
      l = i[i.length - 1]
    r.focus(),
      portfolioNextSibling.classList.add('is-open'),
      (portfolioNextSibling.style.animation = 'modalIn 500ms forwards')
  }
}),
  linkClick(),
  ready(function () {
    var navigationLinks = {
      navigationContainer: document.querySelector('.navigation'),
      navigationButton: document.querySelector('.navigation_button'),
      navigationBackground: document.querySelector('.navigation_background'),
      navigationNav: document.querySelector('.navigation_navigation'),
    }

    navigationLinks.navigationButton.addEventListener('click', function () {
      var element = navigationLinks.navigationContainer
      'closed' === element.getAttribute('data-toggle')
        ? (element.setAttribute('data-toggle', 'open'),
          (page.style.overflowY = 'hidden'))
        : (element.setAttribute('data-toggle', 'closed'),
          (page.style.overflowY = 'scroll'))
    }),
      overLay()
  })
