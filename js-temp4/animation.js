window.addEventListener('load', function() {
    const loader = document.getElementById('loader-container');

    setTimeout(function() {
        loader.classList.add('hidden');
    }, 300);
});

let mainSection = document.querySelector(".main-content > div");
let text = "Settings";

if (mainSection.classList.contains("profile")) {
    text = "Profile";
} else if (mainSection.classList.contains("projects")) {
    text = "Projects";
} else if (mainSection.classList.contains("courses")) {
    text = "Courses";
} else if (mainSection.classList.contains("friends")) {
    text = "Friends";
} else if (mainSection.classList.contains("files")) {
    text = "Files";
} else if (mainSection.classList.contains("plans")) {
    text = "Plans";
}

const speed = 150; 
let i = 0;
const animatedTextElement = document.getElementById("animatedText");

function typeWriter() {
    if (i < text.length) {
        animatedTextElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = setTimeout(typeWriter, 1000);

document.addEventListener('DOMContentLoaded', function() {

    const sectionsToAnimate = document.querySelectorAll('.main-content > div > div');

    sectionsToAnimate.forEach(section => {
        section.classList.add('animate-on-scroll');
        section.classList.add('fade-in-up');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToAnimate.forEach(section => {
        intersectionObserver.observe(section);
    });
});