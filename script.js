let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};


var typed = new Typed(".multiple-text", { 
    strings: ["of Informatics Engineering", " at Sam Ratulangi University"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});