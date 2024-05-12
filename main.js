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

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    document.addEventListener('keydown', handleKeyDown);
    fullImgBox.addEventListener('click', checkOutsideClick);
}

function closeFullImg() {
    fullImgBox.style.display = "none";
    document.removeEventListener('keydown', handleKeyDown);
    fullImgBox.removeEventListener('click', checkOutsideClick);
}

function handleKeyDown(e) {
    if (e.key === "Escape") {
        closeFullImg();
    }
}

function checkOutsideClick(e) {
    if (e.target === fullImgBox) {
        closeFullImg();
    }
}



var swiper = new Swiper('.swiper', {
    // Configuration for pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false, // Optional: dynamic pagination bullets
      clickable: true,
    },

    // Configuration for navigation arrows
    navigation: {
      nextEl: '.swiper-button-next', // Right arrow
      prevEl: '.swiper-button-prev', // Left arrow
    },
  });


  function emailSend() {
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (!userName || !email || !phone || !message) {
        swal("Error", "All fields are required!", "error");
        return false;
    }
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        swal("Error", "Please enter a valid email address!", "error");
        return false;
    }
    if (!phone.match(/^\d{10}$/)) {
        swal("Error", "Please enter a valid phone number with exactly 10 digits.", "error");
        return false;
    }

    var messageBody = "Name: " + userName +
        "<br/> Email: " + email +
        "<br/> Phone: " + phone +
        "<br/> Message: " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "clouddispose1@gmail.com",
        Password: "5FD40060BB01C0976D3AA653A796FBF047C9",
        To: "clouddispose1@gmail.com",
        From: "clouddispose1@gmail.com",
        Subject: "ECOTag Customer",
        Body: messageBody
    }).then(
        message => {
            if (message === 'OK') {
                swal("Successful", "Email was sent!", "success");
                document.getElementById('contactForm').reset(); // Reset form here after success
            } else {
                swal("Error", "Email wasn't sent!", "error");
            }
        }
    );

    return false; // Always return false to prevent form submission
}
