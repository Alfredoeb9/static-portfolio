'use strict'
var focusedElementBeforeModal,
  portfolioContainer = document.querySelector('.portfolio_items'),
  portfolioSecond = document.querySelector('.second_port'),
  trueModal = document.querySelector('.portfolio_modal'),
  page = document.querySelector('html'),
  main = document.querySelector('main'),
  track = document.querySelector(".carousel_track"),
  slides = Array.from(track.children),
  nextButton = document.querySelector(".carousel_button--right"),
  prevButton = document.querySelector(".carousel_button--left"),
  // dotsNav = document.querySelector(".carousel_nav"),
  // dots = Array.from(dotsNav.children),
  slideWidth = slides[0].getBoundingClientRect().width,
  setSlidePosition = function (e, t) {
    slideWidth += 100
    e.style.left = slideWidth * t + "px";
  };

slides.forEach(setSlidePosition);

var moveToSlide = function (e, t, r) {
  (e.style.transform = "translateX(-" + r.style.left + ")"),
  t.classList.remove("current-slide"),
  r.classList.add("current-slide");
},

updateDocs = function (e, t) {
  e.classList.remove("current-slide"), t.classList.add("current-slide");
},

hideShowArrow = function (e, t, r, s) {
  0 === s
    ? (t.classList.add("is-hidden"), r.classList.remove("is-hidden"))
    : s === e.length - 1
    ? (t.classList.remove("is-hidden"), r.classList.add("is-hidden"))
    : (t.classList.remove("is-hidden"), r.classList.remove("is-hidden"));
};

prevButton.addEventListener("click", function (e) {
  var t = track.querySelector(".current-slide"),
    r = t.previousElementSibling,
    // s = dotsNav.querySelector(".current-slide"),
    // i = s.previousElementSibling,
    n = slides.findIndex(function (e) {
      return e === r;
    });
  moveToSlide(track, t, r),
    // updateDocs(s, i),
    hideShowArrow(slides, prevButton, nextButton, n);
});
nextButton.addEventListener("click", function (e) {
  var t = track.querySelector(".current_slide"),
    r = t.nextElementSibling,
    // s = dotsNav.querySelector(".current-slide"),
    // i = s.nextElementSibling,
    n = slides.findIndex(function (e) {
      return e === r;
    });
  moveToSlide(track, t, r),
    // updateDocs(s, i),
    hideShowArrow(slides, prevButton, nextButton, n);
});
// dotsNav.addEventListener("click", function (e) {
//   var t = e.target.closest("button");
//   if (t) {
//     var r = track.querySelector(".current-slide"),
//       s = dotsNav.querySelector(".current-slide"),
//       i = dots.findIndex(function (e) {
//         return e === t;
//       }),
//       n = slides[i];
//     moveToSlide(track, r, n),
//       updateDocs(s, t),
//       hideShowArrow(slides, prevButton, nextButton, i);
//   }
// });

function overLay() {
  document
    .querySelector('.navigation_button')
    .addEventListener('click', function () {
      main.classList.toggle('overlay')
    })
};

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

portfolioSecond?.addEventListener('click', function (e) {
  // e.preventDefault();
  (focusedElementBeforeModal = document.activeElement),
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
})



portfolioContainer?.addEventListener('click', function (e) {
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

    navigationLinks?.navigationButton?.addEventListener('click', function () {
      var element = navigationLinks.navigationContainer
      'closed' === element.getAttribute('data-toggle')
        ? (element.setAttribute('data-toggle', 'open'),
          (page.style.overflowY = 'hidden'))
        : (element.setAttribute('data-toggle', 'closed'),
          (page.style.overflowY = 'scroll'))
    });

    overLay()
  })
