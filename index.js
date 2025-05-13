
var swiper = new Swiper(".projectSlider", {
    slidesPerView: 3.2,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//////////////////

var swiper = new Swiper(".testimonialsSlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//////////////////

$(window).scroll(function () {
    var hT = $('#skill-bar-wrapper').offset().top,
        hH = $('#skill-bar-wrapper').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - 1.4 * wH)) {
        jQuery(document).ready(function () {
            jQuery('.skillbar-container').each(function () {
                jQuery(this).find('.skills').animate({
                    width: jQuery(this).attr('data-percent')
                }, 2000);
            });
        });
    }
});

