'use strict';

const imgs = document.querySelectorAll('.ibg');

for (let img of imgs) {
    const blockBg = img.parentElement;
    
    blockBg.style.backgroundImage = `url(${img.src})`;
}