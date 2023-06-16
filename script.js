let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
    entry.target.classList.add('show');
    }else {
    entry.target.classList.remove('show');
}
    });
});

const hiddenElement = document.querySelectorAll('.hidden');

hiddenElement.forEach((el) => observer. observe(el));