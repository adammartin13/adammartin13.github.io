/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Get the modal
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn1 = document.getElementById("preview1");
btn1.onclick = ()=>{
    openModal(modal1);
}

// Get the modal close button
var close1 = document.getElementById("close1");
close1.onclick = ()=>{
    closeModal(modal1);
}

var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("preview2");
btn2.onclick = ()=>{
    openModal(modal2);
}
var close2 = document.getElementById("close2");
close2.onclick = ()=>{
    closeModal(modal2);
}

var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("preview3");
btn3.onclick = ()=>{
    openModal(modal3);
}
var close3 = document.getElementById("close3");
close3.onclick = ()=>{
    closeModal(modal3);
}

var modal4 = document.getElementById("modal4");
var btn4 = document.getElementById("preview4");
btn4.onclick = ()=>{
    openModal(modal4);
}
var close4 = document.getElementById("close4");
close4.onclick = ()=>{
    closeModal(modal4);
}

var modal5 = document.getElementById("modal5");
var btn5 = document.getElementById("preview5");
btn5.onclick = ()=>{
    openModal(modal5);
}
var close5 = document.getElementById("close5");
close5.onclick = ()=>{
    closeModal(modal5);
}

var modal6 = document.getElementById("modal6");
var btn6 = document.getElementById("preview6");
btn6.onclick = ()=>{
    openModal(modal6);
}
var close6 = document.getElementById("close6");
close6.onclick = ()=>{
    closeModal(modal6);
}

function openModal(modal){
    modal.style.display = "block";
}

function closeModal(modal){
    let percentage = 100;
    let time = 3;

    function scheduleTimeout() {
        if (time > 0) {
            setTimeout(() => {
                modal.style.opacity = `${percentage}%`;
                percentage -= 1;
                time -= 0.03;  // -1 * (time / percentage)
                scheduleTimeout(); // Schedule the next timeout
            }, time);
            console.log(time);
        }
        else{
            modal.style.display = "none";
            modal.style.opacity = "100%";
        }
    }

    scheduleTimeout(); // Start the iteration
}