const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        headerEl.classList.add('active');
    } else if (window.scrollY <= 350) {
        headerEl.classList.remove('active');
    }
});

// Side Bar
let navbar = document.querySelector('.navbar');


let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function () {
  navbar.classList.toggle('show');
}
