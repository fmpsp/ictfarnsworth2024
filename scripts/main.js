// CAROUSEL NAVIGATION

const slideButtons = document.querySelectorAll(".slider-nav__button");
const videoSlides = document.querySelectorAll(".slide-video");
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

function openVideo(number) {
    localStorage.setItem("videoNumber", number);
    window.open("video.html", "_self");
  }