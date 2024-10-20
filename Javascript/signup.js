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


let repeat_show = document.getElementById('repeat_show');
let repeat_input = document.getElementById('repeat_input');

repeat_show.addEventListener('click', () => {
    if (repeat_input.type === "password") {
        repeat_input.type = "text";
        repeat_input.style.color = 'white';
        repeat_show.classList.add('bi-eye-slash');
        repeat_show.classList.remove('bi-eye');
    } else {
        repeat_input.type = "password";
        repeat_input.style.color = 'white';
        repeat_show.classList.remove('bi-eye-slash');
        repeat_show.classList.add('bi-eye');
    }
});
