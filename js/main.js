// start scroll
var scrollTop = document.querySelector(".scroll-top") ; 
window.onscroll = function (){
    if(window.scrollY >= 600){
        scrollTop.style = "opacity: 1;" ;
    }else {
        scrollTop.style = "opacity: 0;" ;
    }
    scrollTop.onclick = function (){
        window.scrollTo({
            top:0 ,
            behavior:"smooth"})
    }
}
// end scroll 
