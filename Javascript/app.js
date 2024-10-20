let art_left = document.getElementById('art_left');
let art_right = document.getElementById('art_right');
let art_bx = document.getElementsByClassName('art_bx')[0];

art_right.addEventListener('click', () => {
    art_bx.scrollLeft += 500;
});
art_left.addEventListener('click', () => {
    art_bx.scrollLeft -= 500;
});


let banner_left = document.getElementById('banner_left');
let banner_right = document.getElementById('banner_right');
let slide = document.getElementsByClassName('slide')[0];

banner_right.addEventListener('click', () => {
    slide.scrollLeft += 500;
});
banner_left.addEventListener('click', () => {
    slide.scrollLeft -= 500;
});