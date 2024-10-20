let show = document.getElementById('show');
let input = document.getElementById('input');

show.addEventListener('click', () => {
    if (input.type === "password") {
        input.type = "text";
        input.style.color = 'white';
        show.classList.add('bi-eye-slash');
        show.classList.remove('bi-eye');
    } else {
        input.type = "password";
        input.style.color = 'white';
        show.classList.remove('bi-eye-slash');
        show.classList.add('bi-eye');
    }
});
