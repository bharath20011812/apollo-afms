
let currentSlide = 1;
showSlide(currentSlide);

function showSlide(n) {
    let slides = document.getElementsByClassName("slide-1");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = slides.length;
    } else {
        currentSlide = n;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and set the active dot
    slides[currentSlide - 1].style.display = "block";
    dots[currentSlide - 1].className += " active";
}



document.querySelector('.subscribe-button').addEventListener('click', function () {
    alert('Subscribed successfully!');
});


// counter section start
function animateCounter(element, target) {
    let count = 0;
    // Adjust speed based on screen size (faster on smaller screens)
    const screenSize = window.innerWidth;
    const speed = screenSize < 768 ? 100 : 200; // Faster on mobile

    const increment = target / speed;  // Adjust this value for smoother or faster counting

    const updateCounter = () => {
        count += increment;
        if (count >= target) {
            element.textContent = target;
        } else {
            element.textContent = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
}

// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.number');

    numbers.forEach(number => {
        const target = +number.getAttribute('data-target');
        animateCounter(number, target);
    });
});


$(document).ready(function () {
    if ($(".customer-logos").length) {
        $(".customer-logos").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    }
});

// JavaScript for tab switching
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Add active class to clicked button and corresponding panel
            button.classList.add('active');
            const targetPanel = document.getElementById(button.getAttribute('data-tab'));
            targetPanel.classList.add('active');
        });
    });
});

const slider = document.querySelector('.slider-case');
const slides = document.querySelectorAll('.slide-case');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const paginationNumber = document.getElementById('pagination-number');

let currentIndex = 0;
const slideCount = slides.length;
const slidesToShow = 2; // Number of slides to show at once

// Function to update pagination display
function updatePagination() {
    const currentPage = Math.floor(currentIndex / slidesToShow) + 1; // 1-based index
    const totalPages = Math.ceil(slideCount / slidesToShow); // Total pages
    paginationNumber.textContent = `${currentPage}/${totalPages}`;
}

// Function to show the slides based on the current index
function showSlides(index) {
    currentIndex = index;
    slider.style.transform = `translateX(${-Math.floor(currentIndex / slidesToShow) * 100}%)`; // Move slider based on index
    updatePagination(); // Update pagination when slide changes
}

// Event listeners for manual controls
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        showSlides(currentIndex - slidesToShow);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < slideCount - slidesToShow) {
        showSlides(currentIndex + slidesToShow);
    }
});

// Initial pagination setup
updatePagination();


$(function() {
    $('.slider-casestudy').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: false,
      dots: true,
      navText: [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>'
    ],
      responsive: {
        0: {
          items: 1
        },
        1200: {
          items: 2
        }
      }
    })


    $('.slider-blog').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: false,
        dots: true,
        navText: [
          '<i class="fa-solid fa-angle-left"></i>',
          '<i class="fa-solid fa-angle-right"></i>'
      ],
        responsive: {
          0: {
            items: 1
          },
          1200: {
            items: 2
          }
        }
      })
});