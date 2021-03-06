const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

/** Function to animate progress bar */
const animateProgressBar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressBarWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    let value = Math.floor(progressBarWidth);
    progressBar.style.width = value + "%";

    if (value < 0)
        progressBar.style.width = '0%';
}

window.addEventListener("scroll", animateProgressBar);