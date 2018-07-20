const shadowShape = document.querySelector('.shadow');
const text = shadowShape.querySelector('span');
const move = 100;

function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = shadowShape;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xMove = (x / width * move) - (move / 2);
    const yMove = (y / height * move) - (move /2);

    text.style.textShadow = `${xMove}px ${yMove}px 0 #ff5500`

}

shadowShape.addEventListener('mousemove', shadow);

