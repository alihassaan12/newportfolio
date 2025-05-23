var swiper = new Swiper(".projectSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 50,
    },
  },
});

//////////////////

var swiper = new Swiper(".testimonialsSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
});

//////////////////

$(window).scroll(function () {
  var hT = $("#skill-bar-wrapper").offset().top,
    hH = $("#skill-bar-wrapper").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - 1.4 * wH) {
    jQuery(document).ready(function () {
      jQuery(".skillbar-container").each(function () {
        jQuery(this)
          .find(".skills")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            2000
          );
      });
    });
  }
});

//////////////////

var swiper = new Swiper(".servicesSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.5,
    },
  },
});

//////////////////

let lastScrollTop = 0;
const sections = document.querySelectorAll(".animated-section");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollDown = scrollTop > lastScrollTop;

  sections.forEach((section) => {
    const content = section.querySelector(".content");
    const direction = section.getAttribute("data-direction");
    const moveDistance = 25; // even slower and subtle movement

    if (scrollDown) {
      if (direction === "up") {
        content.style.transform = `translateY(${-moveDistance}px)`;
      } else {
        content.style.transform = `translateY(${moveDistance}px)`;
      }
    } else {
      if (direction === "up") {
        content.style.transform = `translateY(${moveDistance}px)`;
      } else {
        content.style.transform = `translateY(${-moveDistance}px)`;
      }
    }
  });

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
