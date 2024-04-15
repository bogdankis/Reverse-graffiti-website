// open hamburger button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const counters = document.querySelectorAll('.counter');
const counts = document.querySelectorAll('.count');
const speed = 97;
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// close hamburger button
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal('.header__content h1', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.header__content p', {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.header__content .header__btn', {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});


counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 20)
        }else{
            counter.innerText = target
        }
    }
    upDate();
})

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(pic){
    fullImgBox.style.display = "none";
}

const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

