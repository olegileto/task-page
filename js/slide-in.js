const slideIn = document.querySelectorAll('.slide-in');

function checkSlideIn(e) {

    slideIn.forEach(slideIn => {

        const slideInAt = (window.scrollY + window.innerHeight) - slideIn.height / 2;
        const slideBottom = slideIn.offsetTop + slideIn.height;
        const halfShow = slideInAt > slideIn.offsetTop;
        const noScrolled = window.scrollY < slideBottom;

        if (halfShow && noScrolled) {
            slideIn.classList.add('active-slide')
        } else {
            slideIn.classList.remove('active-slide')
        }
    });
}

window.addEventListener('scroll', checkSlideIn);