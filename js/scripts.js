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

var mobileMenu = document.getElementById("dropdown-link");
var dropdownMenu = document.getElementById("dropdown-menu");
mobileMenu.onclick = ()=>{
    dropdownMenu.style.display = "block";
}
// Close dropdown on scroll
window.addEventListener('scroll', () => {
    dropdownMenu.style.display = "none";
});
// Close dropdown on outside click
document.addEventListener('click', (event) => {
    dropdownMeny.style.display = "none";
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

var modal7 = document.getElementById("modal7");
var btn7 = document.getElementById("preview7");
btn7.onclick = ()=>{
    openModal(modal7);
}
var close7 = document.getElementById("close7");
close7.onclick = ()=>{
    closeModal(modal7);
}

var modal8 = document.getElementById("modal8");
var btn8 = document.getElementById("preview8");
btn8.onclick = ()=>{
    openModal(modal8);
}
var close8 = document.getElementById("close8");
close8.onclick = ()=>{
    closeModal(modal8);
}

var modal9 = document.getElementById("modal9");
var btn9 = document.getElementById("preview9");
btn9.onclick = ()=>{
    openModal(modal9);
}
var close9 = document.getElementById("close9");
close9.onclick = ()=>{
    closeModal(modal9);
}

var modal10 = document.getElementById("modal10");
var btn10 = document.getElementById("preview10");
btn10.onclick = ()=>{
    openModal(modal10);
}
var close10 = document.getElementById("close10");
close10.onclick = ()=>{
    closeModal(modal10);
}

var modal11 = document.getElementById("modal11");
var btn11 = document.getElementById("preview11");
btn11.onclick = ()=>{
    openModal(modal11);
}
var close11 = document.getElementById("close11");
close11.onclick = ()=>{
    closeModal(modal11);
}

var modal12 = document.getElementById("modal12");
var btn12 = document.getElementById("preview12");
btn12.onclick = ()=>{
    openModal(modal12);
}
var close12 = document.getElementById("close12");
close12.onclick = ()=>{
    closeModal(modal12);
}

var modal13 = document.getElementById("modal13");
var btn13 = document.getElementById("preview13");
btn13.onclick = ()=>{
    openModal(modal13);
}
var close13 = document.getElementById("close13");
close13.onclick = ()=>{
    closeModal(modal13);
}

var modal14 = document.getElementById("modal14");
var btn14 = document.getElementById("preview14");
btn14.onclick = ()=>{
    openModal(modal14);
}
var close14 = document.getElementById("close14");
close14.onclick = ()=>{
    closeModal(modal14);
}

var modal15 = document.getElementById("modal15");
var btn15 = document.getElementById("preview15");
btn15.onclick = ()=>{
    openModal(modal15);
}
var close15 = document.getElementById("close15");
close15.onclick = ()=>{
    closeModal(modal15);
}

var modal16 = document.getElementById("modal16");
var btn16 = document.getElementById("preview16");
btn16.onclick = ()=>{
    openModal(modal16);
}
var close16 = document.getElementById("close16");
close16.onclick = ()=>{
    closeModal(modal16);
}

var modal17 = document.getElementById("modal17");
var btn17 = document.getElementById("preview17");
btn17.onclick = ()=>{
    openModal(modal17);
}
var close17 = document.getElementById("close17");
close17.onclick = ()=>{
    closeModal(modal17);
}

var modal18 = document.getElementById("modal18");
var btn18 = document.getElementById("preview18");
btn18.onclick = ()=>{
    openModal(modal18);
}
var close18 = document.getElementById("close18");
close18.onclick = ()=>{
    closeModal(modal18);
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