const slide = document.querySelector('.slide'),
    slideImages = document.querySelectorAll('.slide img');

let count = 0;

setInterval(() => {
    if (count >= 4) {
        count = 0
        slide.style.transform = ''
    }
    else if (count <= 3 && count>= 0) {
        slide.style.transform = 'translateX(-' + (250 * count) + 'px)'
        count++
    }
}, 2000);