/* Changing Members Page Navbar color */
const memberNav=document.querySelector(".memberNav");
const quoteSection=document.querySelector(".quote-section");

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= quoteSection.offsetTop){
        memberNav.classList.add('navbar-scroll')
    }else{
        memberNav.classList.remove('navbar-scroll')
    }
})

const navLinks= Array.from(document.querySelectorAll(".navbar .nav-item .nav-link"));
console.log(navLinks);

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e)=>{
        navLinks.forEach((otherLinks)=>{
            otherLinks.classList.remove('active');
        })
        e.target.classList.add('active');
    })
});
