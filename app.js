// Animating the logo on navigation bar
document.addEventListener('DOMContentLoaded', function () {
    let logo = document.getElementById('logo');

    logo.addEventListener('mouseenter', function (event) {
        event.target.src = 'SmoothieHutLogoSuper.png';
    })

    logo.addEventListener('mouseout', function (event) {
        event.target.src = 'SmoothieHutLogoNav.png';
    });

    // Reactive contact form
    let button = document.getElementsByClassName('btn')[0];
    let form = document.getElementsByTagName('form')[0];
    let parent = form.parentElement;
    let name = document.getElementsByName('question')[0];
    let email = document.getElementsByName('question1')[0];
    let message = document.getElementsByName('question2')[0];



    function myFunction() {
        if (name.value == "" || email.value == "" || message.value == "") {
            var emptyField = document.createElement('p')
            emptyField.innerText = 'Please fill in all the fields';
            emptyField.style.fontSize = '25px'
            emptyField.style.fontFamily = 'Playfair Display, serif'
            emptyField.style.alignItems = 'center';
            form.appendChild(emptyField)
        } else {
            var thankYou = document.createElement('p')
            thankYou.innerText = 'Thank you!';
            thankYou.style.fontSize = '25px'
            thankYou.style.fontFamily = 'Playfair Display, serif'
            thankYou.style.textAlign = 'center';
            thankYou.style.alignItems = 'center';
            parent.removeChild(form);
            parent.appendChild(thankYou);
        }
    }

    button.addEventListener('click', myFunction);








})