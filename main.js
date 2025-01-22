
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

// carousel navigation

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    btns.forEach((btn) =>  {
        btn.classList.remove("active");
    })

    slides.forEach((slide) =>  {
        slide.classList.remove("active");
    })

    contents.forEach((content) =>  {
        content.classList.remove("active");
    })


    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});