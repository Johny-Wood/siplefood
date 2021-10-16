$(function () {
  var _menu = $('.menu');
  var _overlay = $('.overlay');


  $('.burger').on('click', function () {
    _overlay.addClass('overlay--open');
    _menu.addClass('menu--open');
  });


  $('.burger-cross').on('click', function () {
    if (_overlay.hasClass('overlay--open')) {
      _overlay.removeClass('overlay--open');
    }

    if (_menu.hasClass('menu--open')) {
      _menu.removeClass('menu--open');
    }
  });

  _overlay.on('click', function () {
    if (_overlay.hasClass('overlay--open')) {
      _overlay.removeClass('overlay--open');
    }

    if (_menu.hasClass('menu--open')) {
      _menu.removeClass('menu--open');
    }
  });



  $('.categories-navigation__box').slick({
    arrows: false,
    slidesToShow: 3,
    variableWidth: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1229,
      settings: "unslick",
    }]
  });


  $('.best-restaurants__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    variableWidth: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 991,
      settings: "unslick",
    }]
  });

  $('.reviews__inner').slick({
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow" type="button"><svg class="slick-arrow--svg slick-prev--svg"><use xlink:href="images/sprite.svg#sliderArrow-icon"></use></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" type="button"><svg class="slick-next--svg slick-arrow--svg slick-next--svg"><use xlink:href="images/sprite.svg#sliderArrow-icon"></use></svg></button>',
    responsive: [{
      breakpoint: 993,
      settings: {
        dots: false,
      }
    }]
  });

  var mixer = mixitup('.categories__inner');

});
