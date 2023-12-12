// Fungsi untuk menampilkan pesan sederhana di konsol
const sliderItems = document.querySelectorAll('.slider-item');

let sliderActive = 1;

if (sliderItems) {
    sliderItems.forEach((slider, index) => {
        if (index === 0) {
            slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
    })

    setInterval(() => {
       sliderItems.forEach((slider, index) => {
        if(sliderActive === index){
            slider.setAttribute("data-show", "show");
        } else {
            slider.setAttribute("data-show", "hidden");
        }
       });

       if(sliderActive === sliderItems.length - 1 ) {
        sliderActive = 0;
       } else {
        sliderActive++;
       }

    }, 3000)
} 

// Fungsi Navbar Transparent to Solid
const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        headerEl.classList.add('active');
    } else if (window.scrollY <= 350) {
        headerEl.classList.remove('active');
    }
});


