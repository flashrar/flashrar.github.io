// Script to make Navbar shadow appear and disapper
const navEL = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56){
        navEL.classList.add('navbar-scrolled')
    } else if (window.scrollY < 56){
        navEL.classList.remove('navbar-scrolled')
    }
}
);



document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        navigateNext();
    } else if (event.key === 'ArrowLeft') {
        navigatePrevious();
    }
});

function navigateNext() {
    const currentPage = getCurrentPage();
    if (currentPage === 'visit.html') {
        window.location.href = 'arts.html';
    } else if (currentPage === 'arts.html') {
        window.location.href = 'history.html';
    }
    // You can add more logic for handling other cases.
}

function navigatePrevious() {
    const currentPage = getCurrentPage();
    if (currentPage === 'arts.html') {
        window.location.href = 'visit.html';
    } else if (currentPage === 'history.html') {
        window.location.href = 'arts.html';
    }
    // You can add more logic for handling other cases.
}

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}


// Change video by click 
$(document).ready(function () {
    // Variables to store video elements
    var video = document.getElementById('bg-video');
    var sources = [
        'img/1.mp4',
        'img/2.mp4',
        'img/3.mp4',
        'img/4.mp4'
    ];
    var videoIndex = 0; // Index of the current video source
    var isTransitioning = false; // Variable to track if a transition is in progress

    // Function to change video source
    function changeVideo() {
        // Check if a transition is already in progress
        if (isTransitioning) {
            return;
        }

        // Set the transitioning flag to true
        isTransitioning = true;

        // Fade out the video using jQuery
        $(video).fadeOut(300, function () {
            // Increment video index or reset to 0 if it exceeds the number of video sources
            videoIndex = (videoIndex + 1) % sources.length;

            // Change the video source
            video.src = sources[videoIndex];

            // Load and play the new video
            video.load();
            video.play();

            // Fade in the video using jQuery
            $(video).fadeIn(300, function () {
                // Set the transitioning flag to false after the transition is complete
                isTransitioning = false;
            });
        });
    }

    // Add click event listener to the video banner
    $('.main-banner').on('click', function () {
        changeVideo();
    });
});


function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

document.addEventListener("DOMContentLoaded", function () {
    // Targets all elements with the class 'fade-in'
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

