const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.video');

speed.addEventListener('mousemove', function (e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight / 2;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;

    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2);

    video.playbackRate = playbackRate;
});