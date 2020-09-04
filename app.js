
var isScrollOn = true;

function toggleScroll(){
    isScrollOn == false ? isScrollOn = true : isScrollOn = false;    
    isScrollOn == false ? window.onscroll = ()=>window.scrollTo(0,0) :window.onscroll = ()=>"";
    console.log("scroll:"+isScrollOn)
}

//toggleScroll();
//window.setTimeout(toggleScroll,7000);


