const header = document.querySelector("header");
window.addEventListener("scroll" , function(){
header.classList.toggle("sticky" , window.scrollY > 100 );
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav');


menu.onclick = () => {
menu.classList.toggle('bx-x');
navlist.classList.toggle('open');


}


document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});