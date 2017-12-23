$(window).load(function () {
  jQuery('.flexslider').flexslider({
    animation: 'slide'
  })
  // jQuery('.videoslider').flexslider({
  //   animation: "slide"
  // });
})
// Can also be used with $(document).ready()
jQuery(function () {
  jQuery('.slider').slick({
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 3
    arrows: false,
  })
  $('.ar-left').on('click', function () {
    $('.slider').slick('slickNext')
  })
  $('.ar-right').on('click', function () {
    $('.slider').slick('slickPrev')
  })
})
jQuery(function () {
  jQuery('.videoslider').slick({
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 3
    arrows: false
  })

  $('#ar-left.ar-left').on('click', function () {
    $('.videoslider').slick('slickNext')
  })
  $('#ar-right').on('click', function () {
    $('.videoslider').slick('slickPrev')
  })

// jQuery('.slider').slick();
})
/*---------Reed more----------*/
jQuery(document).ready(function (event) {


  $('.pop-up-open').on('click', function (e) {
    e.preventDefault()

  })
  $('.pop-up-open').on('click', function (event) {
    jQuery('.pop-up-show').addClass('show')
    
  })

  jQuery('.pop-up-close').on('click', function () {
    jQuery('.pop-up-show').removeClass('show')
  });

  jQuery('.pop-up-close').on('click', function (e) {
    e.preventDefault()
  })
})
// jQuery(function () {
//   jQuery('.pop-up-open').on('click', function (e) {
//     e.preventDefault()
//
//   })
//
//   jQuery('.pop-up-open').on('click', function () {
//     jQuery('.pop-up-show').show
//   })
//
// })