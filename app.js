const isScrollOn = true;

function toggleScroll(){
    isScrollOn == false ? isScrollOn = true : isScrollOn = false;    
    isScrollOn == false ? window.onscroll = ()=>window.scrollTo(0,0) :window.onscroll = ()=>"";
    console.log("scroll:"+isScrollOn)
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navlinksListItem = document.querySelectorAll('.nav-links li');
const navlinksListItemLink = document.querySelectorAll('.nav-links li a');


hamburger.addEventListener('click',()=>{
    toggleNavOpen();
    toggleNavLinksFade();
});

navlinksListItemLink.forEach(link=>{
    link.addEventListener('click',()=>{
        var fadeLinks = document.querySelectorAll('.fade');
        if (fadeLinks.length>0){
            toggleNavOpen();
            toggleNavLinksFade();
        }
    });
});


function toggleNavOpen(){
    navLinks.classList.toggle('open');
}

function toggleNavLinksFade(){
    navlinksListItem.forEach(link=>{
        link.classList.toggle('fade');
    });
}


//toggleScroll();
//window.setTimeout(toggleScroll,7000);


