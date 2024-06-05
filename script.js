var sidemenu= document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-150px";
}

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener('click', ()=>{
//    //Animate Links
//     navLinks.classList.toggle("open");
//     links.forEach(link => {
//         link.classList.toggle("fade");
//     });

//     //Hamburger Animation
//     hamburger.classList.toggle("toggle");
// });