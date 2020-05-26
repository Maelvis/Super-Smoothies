// Animating the logo on navigation bar
document.addEventListener('DOMContentLoaded', function() {
let logo = document.getElementById('logo');

logo.addEventListener('mouseenter', function(event) {
    event.target.src = 'SmoothieHutLogoSuper.png';
})

logo.addEventListener('mouseout', function(event) {
    event.target.src = 'SmoothieHutLogoNav.png';
});

})