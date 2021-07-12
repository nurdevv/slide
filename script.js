const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveCLasses();
        slide.classList.add('active')
    })
}

function clearActiveCLasses() {
        slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}