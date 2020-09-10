const isScrollOn = true;

function toggleScroll(){
    isScrollOn == false ? isScrollOn = true : isScrollOn = false;    
    isScrollOn == false ? window.onscroll = ()=>window.scrollTo(0,0) :window.onscroll = ()=>"";
    console.log("scroll:"+isScrollOn)
}

const navbarToggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

navbarToggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
});
//toggleScroll();
//window.setTimeout(toggleScroll,7000);


