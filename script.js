// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  setTimeout(() => preloader.style.display = 'none', 500);
});

// Typed.js - Typing animation
const typed = new Typed('#typed', {
  strings: ['Sharif Islam', 'Web Developer', 'Designer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Dark Mode Toggle
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    darkToggle.textContent = '☀️';
  } else {
    darkToggle.textContent = '🌙';
  }
});

// Scroll spy for nav active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if(scrollY >= sectionTop){
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('active');
    }
  });

  // Back to top show/hide
  const backToTop = document.getElementById('back-to-top');
  if(window.scrollY > 300){
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Back to top smooth scroll
document.getElementById('back-to-top').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// AOS animation init
AOS.init({
  duration: 1200,
});

// Skill progress bars animation
function animateSkills(){
  const skills = document.querySelectorAll('.progress');
  skills.forEach(skill => {
    skill.style.width = skill.classList.contains('html') ? '90%' :
                        skill.classList.contains('css') ? '85%' :
                        skill.classList.contains('js') ? '80%' : '0';
  });
}
window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  if(window.scrollY + window.innerHeight > skillsSection.offsetTop + 100){
    animateSkills();
  }
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 50;
    const increment = target / speed;
    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 40);
    } else {
      counter.innerText = target;
    }
  };
  const counterSection = document.querySelector('.counter-section');
  let counted = false;
  window.addEventListener('scroll', () => {
    if(!counted && window.scrollY + window.innerHeight > counterSection.offsetTop + 50){
      updateCount();
      counted = true;
    }
  });
});

// Swiper testimonial slider init
const swiper = new Swiper('.swiper-container.testimonial', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// SimpleLightbox gallery
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// EmailJS contact form send
(function(){
  emailjs.init("YOUR_EMAILJS_USER_ID"); // <-- Replace with your EmailJS user ID
})();
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
  .then(() => {
    alert('Message sent successfully!');
    this.reset();
  }, (error) => {
    alert('Failed to send message. Please try again later.');
  });
});
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('open');
});
