
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", ()=>{
    preloader.classList.add("remove");
})


/**
 * Add Event on multiple Element 
 */

const addEventOnElements = function(elements, eventType, callBack){
    console.log("addEventOnElements 2");
    console.log(elements.length?.toString());
    for(i=0, len=elements.length; i<len; i++){
        console.log(elements[i].className);
        elements[i].addEventListener(eventType, callBack);
    }
}



/**
 * Navbar Toggler For Mobile
 */

const navBar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function(){
    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);

















