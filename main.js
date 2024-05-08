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

function emailSend() {
	var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

	var messageBody = "Name: " + userName +
    "<br/> Email: " + email +
	"<br/> Phone: " + phone +
    "<br/> Message: " + message;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "clouddispose1@gmail.com",
    Password : "579FA43D94A6D9695545D237D3B6A9FBFC25",
    To : "clouddispose1@gmail.com",
    From : "clouddispose1@gmail.com",
    Subject : "ECOTag Customer",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Successful", "Email was sent !", "success");
  	}
  	else{
  		swal("Error", "Email wasn't sent !", "error");
  	}
  }
);
}

function validateForm() {
    if (emailSend()) {  // Validates and attempts to send the email
      document.getElementById('contactForm').reset();  // Resets the form only if the email was sent
      return false;  // Prevents the default form submission
    }
    return false;  // Prevents the default form submission if validation fails
  }

  function emailSend() {
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Validation checks
    if (!userName) {
        swal("Error", "Please enter your name!", "error");
        return;
    }
    if (!email) {
        swal("Error", "Please enter your email!", "error");
        return;
    } else if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        swal("Error", "Please enter a valid email address!", "error");
        return;
    }
    if (!phone) {
        swal("Error", "Please enter your phone number!", "error");
        return;
    } else if (!phone.match(/^\d{10}$/)) {
        swal("Error", "Please enter a valid phone number with exactly 10 digits.", "error");
        return;
    }
    if (!message) {
        swal("Error", "Please enter a message!", "error");
        return;
    }

    var messageBody = "Name: " + userName +
        "<br/> Email: " + email +
        "<br/> Phone: " + phone +
        "<br/> Message: " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "clouddispose1@gmail.com",
        Password: "579FA43D94A6D9695545D237D3B6A9FBFC25",
        To: "clouddispose1@gmail.com",
        From: "clouddispose1@gmail.com",
        Subject: "ECOTag Customer",
        Body: messageBody
    }).then(
        message => {
            if (message === 'OK') {
                swal("Successful", "Email was sent!", "success");
            } else {
                swal("Error", "Email wasn't sent!", "error");
            }
        }
    );
}
