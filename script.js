const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

let sections =document.querySelectorAll('sections');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top =window.screenY;
        let offset = sec.offsetTop;
        let heighht = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('activate');
                document.querySelector('header nav a [href*= '+id +')').classList.add('activate');
            });
        }
    });
};