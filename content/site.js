$(document).ready(function () {
    var typed = new Typed(".u-text-animation.u-text-animation--typing", { strings: ["INTRODUCTION", "INTRODUCTION", "INTRODUCTION"], typeSpeed: 100, loop: false, backSpeed: 25, backDelay: 1500 });
    $(window).on('scroll', function () { if ($(window).scrollTop() + $(window).height() > $('#skills').offset().top) { $('.skillbar').each(function () { $(this).find('.skillbar-bar').animate({ width: $(this).attr('data-percent') }, 3000); }); } });
});