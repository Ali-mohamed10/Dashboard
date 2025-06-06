window.addEventListener('load', function() {
    const loader = document.getElementById('loader-container');
    setTimeout(function() {
        loader.classList.add('hidden');
    }, 300);
});

/* Start Search */

let searchInput = document.querySelector("[type='search']");
let sections = document.querySelectorAll('.main-content > div > div, .projects');
let sectionsArray = [];

sections.forEach((se) => {
    sectionsArray.push(se.classList[0]);
});
sectionsArray.pop();
console.log(sectionsArray);


let searchMenu = document.createElement("div");
searchMenu.className = "searchMenu";
document.body.appendChild(searchMenu);
searchInput.after(searchMenu);

for (let i = 0; i < sectionsArray.length; i++) {
    let div = document.createElement("div");
    let text = document.createTextNode(sectionsArray[i]);
    div.appendChild(text);
    searchMenu.appendChild(div);
}


let searchDiv = document.querySelectorAll(".searchMenu div");
searchDiv.forEach((div) => div.style.display = "none");

searchInput.addEventListener("input",function () {
    if (searchInput.value === "") {
        searchDiv.forEach((div) => div.style.display = "none");
    }
    searchDiv.forEach((div) => {
        if (div.innerText[0].toUpperCase() === searchInput.value.charAt(0).toUpperCase()) {
            div.style.display = "block";
            div.addEventListener("click",function (e) {
                searchInput.value = e.currentTarget.innerText;
                searchDiv.forEach((div) => div.style.display = "none");
                searchInput.focus();
            });
        }
    });
});

document.addEventListener("click",function(e) {
    if (e.currentTarget) {
        
    }
})

searchInput.addEventListener("search",function () {
    if (searchInput.value !== "") {
        let targetSection = document.querySelector(`.${searchInput.value.toLowerCase()}`);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
        });
    }
});

/* End Search */

/* Start Animation Writer */

const text = "Dashboard";
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

/* End Animation Writer */

/* Start Animation Sections */

document.addEventListener('DOMContentLoaded', function() {

    const sectionsToAnimate = document.querySelectorAll('.main-content > div > div, .projects');

    sectionsToAnimate.forEach(section => {
        section.classList.add('animate-on-scroll');
        const sectionClasses = Array.from(section.classList);
        if (sectionClasses.includes('welcome') || sectionClasses.includes('yearly-targets') || sectionClasses.includes('latest-uploads')) {
            section.classList.add('fade-in-up');
        } else if (sectionClasses.includes('quick-draft') || sectionClasses.includes('tickets-statistics') || sectionClasses.includes('last-project')) {
            section.classList.add('fade-in-left');
        } else if (sectionClasses.includes('latest-news') || sectionClasses.includes('top-search-items') || sectionClasses.includes('social-media')) {
            section.classList.add('fade-in-right');
        } else if (sectionClasses.includes('reminders') || sectionClasses.includes('latest-post')) {
            section.classList.add('scale-up');
        } else {
            section.classList.add('fade-in-up');
        }
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

/* End Animation Sections */
