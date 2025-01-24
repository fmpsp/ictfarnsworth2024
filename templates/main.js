
// NAVIGATION MENU

const showMenu = (toggleId, navId) => {
    const header = document.getElementById("header");
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId);
    toggle.addEventListener('click', () => {
        // add show-menu class to nav menu
        nav.classList.toggle('show-menu');
        // add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
        // if menu is showing, add scrolled color bg change
        if (nav.classList.contains('show-menu') && toggle.classList.contains('show-icon')) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    })
}

showMenu('nav__toggle','nav-menu');

document.addEventListener('scroll', () => {
    const header = document.getElementById("header");
    const nav = document.getElementById('nav-menu');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } 
    // if menu is shown do not remove nav bar solid color
    else if (nav.classList.contains('show-menu')) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// CAROUSEL NAVIGATION

const slideButtons = document.querySelectorAll(".nav-btn");
const videoSlides = document.querySelectorAll(".video-slide");
const slideContents = document.querySelectorAll(".slide-content"); 

let currentSlide = 0;

function removeAllActiveAttributes(){
    slideButtons.forEach((slideButton) =>  {
        slideButton.classList.remove("active");
    })

    videoSlides.forEach((videoSlide) =>  {
        videoSlide.classList.remove("active");
    })

    slideContents.forEach((slideContent) =>  {
        slideContent.classList.remove("active");
    })
}

var assignActiveSlider = function(manual) {
    removeAllActiveAttributes();

    slideButtons[manual].classList.add("active");
    videoSlides[manual].classList.add("active");
    slideContents[manual].classList.add("active");
}

slideButtons.forEach((slideButton, i) => {
    slideButton.addEventListener("click", () => {
        assignActiveSlider(i);
        currentSlide = i;
    });
});

function nextSlide(){
    if(currentSlide == slideButtons.length - 1){
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    assignActiveSlider(currentSlide);
}

function previousSlide(){
    if(currentSlide == 0){
        currentSlide = slideButtons.length - 1;
    } else {
        currentSlide--;
    }
    assignActiveSlider(currentSlide);
}

// HOME HIGHLIGHT BUTTON

function openInNewTab(url) {
    window.open(url, "_self");
  }