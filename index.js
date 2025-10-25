var swiper = new Swiper(".projectSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2.4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2.7,
      spaceBetween: 30,
    },
  },
});

//////////////////

var swiper = new Swiper(".testimonialsSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
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

$(document).ready(function () {
  $(".skillbar-container").each(function () {
    $(this)
      .find(".skills")
      .animate(
        {
          width: $(this).attr("data-percent"),
        },
        2000
      );
  });
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

//////////////

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const form = e.target;
  const formData = new FormData(form);

  fetch("https://formsubmit.co/alihassaanamjad@gmail.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        form.reset(); // clear the form
        document.getElementById("formMessage").style.display = "block"; // show success message
      } else {
        alert("❌ There was an error submitting the form. Please try again.");
      }
    })
    .catch((error) => {
      alert("❌ Error: " + error.message);
    });
});
