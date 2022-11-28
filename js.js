const navSlide = () => {
    const burgger = document.querySelector('.burgger');
    const nav = document.querySelector('.nav_links');
    const navlinks = document.querySelectorAll('.nav_links li');
    //Tagging nav
    burgger.addEventListener('click',()=>{
        nav.classList.toggle('nav_active');
    });
    // Animate links тыпа шоб двигаеться 
    navLinks.forEach((link, index) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s';
    });
}

navSlide();