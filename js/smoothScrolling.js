'use strict'
$('.btnScroll').click(function () {
  var t = $(this.hash)
  $('html,body').animate(
    { scrollTop: $('.focus').offset().top },
    1e3,
    function () {
      var o = $(t)
      if ((o.focus(), o.is(':focus'))) return !1
      o.attr('tabindex', '-1'), o.focus()
    }
  )
}),
  $('.welcome_aboutBtn').click(function () {
    var t = $(this.hash)
    $('html,body').animate(
      { scrollTop: $('.about').offset().top },
      1e3,
      function () {
        var o = $(t)
        if ((o.focus(), o.is(':focus'))) return !1
        o.attr('tabindex', '-1'), o.focus()
      }
    )
  }),
  $('.welcome_portfolioBtn').click(function () {
    var t = $(this.hash)
    $('html,body').animate(
      { scrollTop: $('.portfolio').offset().top },
      1e3,
      function () {
        var o = $(t)
        if ((o.focus(), o.is(':focus'))) return !1
        o.attr('tabindex', '-1'), o.focus()
      }
    )
  })
