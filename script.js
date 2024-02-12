// MENU ICON NAVBAR
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SCROLL SECTIONS
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // STICKY NAVBAR
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE NAVBAR ON SCROLL
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// DARK MODE NAVIGATION
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// SCROLL REVEAL
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .extra-wrapper, .contact-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h1, .home-content p, .about-content', { origin: 'right' });

// MODAL
let modal = document.getElementById("myModal");
let closeBtn = document.querySelector(".modal-content .close");
let readMoreButtons = document.querySelectorAll('.services-box .btn');
let skillsModal = document.getElementById("skillsModal");
let skillsModal2 = document.getElementById("skillsModal2");
let skillsModal3 = document.getElementById("skillsModal3");
let skillsModalCloseBtn = document.querySelector("#skillsModal .modal-content .close");

readMoreButtons.forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault(); 

        let parent = button.closest('.services-box');
        let heading = parent.querySelector('h3').textContent;
        let content = parent.querySelector('p').textContent;

        document.getElementById('modal-heading').textContent = heading;
        document.getElementById('modal-content').textContent = content;
        modal.style.display = "block";
    });
});

closeBtn.onclick = function () {
    modal.style.display = "none";
}

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == skillsModal) {
        skillsModal.style.display = "none";
    } else if (event.target == skillsModal2) {
        skillsModal2.style.display = "none";
    } else if (event.target == skillsModal3) {
        skillsModal3.style.display = "none";
    }
});

document.querySelector('.services-box:nth-of-type(1) .btn').addEventListener('click', () => {
    skillsModal.style.display = "block";
});

document.querySelector('.services-box:nth-of-type(2) .btn').addEventListener('click', () => {
    skillsModal2.style.display = "block";
});

document.querySelector('.services-box:nth-of-type(3) .btn').addEventListener('click', () => {
    skillsModal3.style.display = "block";
});

// ABOUT MODAL

document.addEventListener("DOMContentLoaded", function () {
    const aboutReadMoreBtn = document.querySelector('.about .btn');
    const educationPopup = document.getElementById('educationPopup');
    const closeBtn = educationPopup.querySelector('.close');

    aboutReadMoreBtn.addEventListener('click', function () {
        educationPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        educationPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === educationPopup) {
            educationPopup.style.display = 'none';
        }
    });
});


// SMTP

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email address: ${email.value}<br> Mobile Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "varunajithvarun@gmail.com",
        Password : "30C94A1C957868D136073333D31EED667BDC",
        To : "varunajithvarun@gmail.com",
        From : "varunajithvarun@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message Sent successfully",
                icon: "Success"
            });
        }
      }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});


