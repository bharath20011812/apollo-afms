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



/*** Timeline Carousel ***/
$('.desktop-owl.timeline').owlCarousel({
  loop: false,
  pagination: true,
  paginationNumbers: false,
  nav:true,
  center:false,
  dots:false,
  margin:10,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
],
  responsive:{
    0:{
      items:1
    },
    600: {
      items:2
    },
    1200:{
      items:3
    }
  }
});


$('.slider-1').owlCarousel({
  loop: true,
  margin: 10,
  items:1,
  nav: false,
  autoplay: false,
  dots: true,
  navText:false,
  
})

});



$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read less") {
    $(this).text("Read more")
  } else {
    $(this).text("Read less")
  }
});
