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
// ------------------------------------Nev bar functionallity-------------------------------------- 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    for (const link of navLinks) {
      link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
      event.preventDefault();

      const targetId = event.target.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
