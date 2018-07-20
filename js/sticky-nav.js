const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {

    if (window.scrollY > topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight +'px';
        document.body.classList.add('fixed');
    } else {
        document.body.style.paddingTop = 0 + 'px';
        document.body.classList.remove('fixed')
    }

}

window.addEventListener('scroll', fixNav);