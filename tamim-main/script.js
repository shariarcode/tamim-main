let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.oneclick = () => {
  menuIcon.classList.toggle( 'box-icon');
  navbar.classList.toggle('active');
};






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top => offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
      })
    }
  } )

}




