let art_left = document.getElementById('art_left');
let art_right = document.getElementById('art_right');
let art_bx = document.getElementsByClassName('art_bx')[0];

art_right.addEventListener('click', () => {
    art_bx.scrollLeft += 500;
});
art_left.addEventListener('click', () => {
    art_bx.scrollLeft -= 500;
});



