const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navlinksListItem = document.querySelectorAll('.nav-links li');
const navlinksListItemLink = document.querySelectorAll('.nav-links li a');

function toggleOpen(){
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
}

function toggleNavLinksFade(){
    navlinksListItem.forEach(link=>{
        link.classList.toggle('fade');
    });
}

hamburger.addEventListener('click',()=>{
    toggleOpen();
    toggleNavLinksFade();
});

navlinksListItemLink.forEach(link=>{
    link.addEventListener('click',()=>{
        var fadeLinks = document.querySelectorAll('.fade');
        if (fadeLinks.length>0){
            toggleOpen();
            toggleNavLinksFade();
        }
    });
});

//toggleScroll();
//window.setTimeout(toggleScroll,7000);


