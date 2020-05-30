// Animating the logo on navigation bar
document.addEventListener('DOMContentLoaded', function() {
let logo = document.getElementById('logo');

logo.addEventListener('mouseenter', function(event) {
    event.target.src = 'SmoothieHutLogoSuper.png';
})

logo.addEventListener('mouseout', function(event) {
    event.target.src = 'SmoothieHutLogoNav.png';
});

// Reactive contact form
let button = document.getElementsByClassName('btn')[0];
let form = document.getElementsByTagName('form')[0];
let parent = form.parentElement;



function myFunction () {
    var thankYou =  document.createElement('p')
    thankYou.innerText = 'Thank you for your message!';
    thankYou.style.fontSize = '25px'
    thankYou.style.fontFamily = 'Playfair Display, serif'
    thankYou.style.textAlign = 'center';
    thankYou.style.alignItems = 'center';
    parent.removeChild(form);
    parent.appendChild(thankYou);
};

button.addEventListener('click', myFunction);









})