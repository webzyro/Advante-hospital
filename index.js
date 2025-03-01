$(document).ready(function () {
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  // Team Carousel
  $(".result-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonial Carousel
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa-solid fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200;

const startCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      const increment = target / speed;

      if (count < target) {
        count += Math.ceil(increment);
        counter.innerText = count;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

// Start counter animation when section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounters();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector("#stats-section"));

// Show modal after page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const appointmentModal = new bootstrap.Modal(
      document.getElementById("appointmentModal")
    );
    appointmentModal.show();
  }, 5000); // Shows after 2 seconds
});

// Handle form submission
document
  .getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Add your form submission logic here
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("appointmentModal")
    );
    modal.hide();
    // Show success message or handle the form data
  });
