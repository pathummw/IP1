const burgerBtn = document.getElementById("hamburger");
const spanElements = document.querySelectorAll("span");
const navBar = document.querySelector("nav");
const listButtons = document.querySelectorAll("nav a");
const img = document.querySelector("img");
let firstClick = true;  /* Set the boolean value when hanburger button clicked to change the state of the burger button */


window.addEventListener("resize", reSizeFunction);

function reSizeFunction(){

    /* check whether the window is resized and if the windows is resized more than 750px, set nav bar visible */
    if(parseInt(document.documentElement.clientWidth) >= 750){
        if(document.querySelector("nav").style.visibility == "hidden"){
            document.querySelector("nav").style.visibility = "visible"; 
        }
    }
    else if(parseInt(document.documentElement.clientWidth) < 750 && firstClick == true){
        document.querySelector("nav").style.visibility = "hidden";
    }
}


burgerBtn.addEventListener("click",function(event){

    if(firstClick){

        spanElements[0].style.transform = "rotate(45deg) translate(9px, 8px)";
        spanElements[1].style.opacity = "0";
        spanElements[2].style.transform = "rotate(-45deg) translate(7px, -5px)"; 
        document.querySelector("nav").style.zIndex = "";
        burgerBtn.style.zIndex = "1";
        document.querySelector("nav").style.visibility = "visible";
        firstClick = false;
    }
    else if(!firstClick){
        
        spanElements[0].style.transform = "rotate(0deg)";
        spanElements[1].style.opacity = "100";
        spanElements[2].style.transform = "rotate(0deg)";
        document.querySelector("nav").style.zIndex = "1";
        burgerBtn.style.zIndex = "2";
        document.querySelector("nav").style.visibility = "hidden";
        firstClick = true;
    }


}); 


/* https://codepen.io/designcouch/pen/Atyop */
/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js */

  /*   if (mediaQuery.matches) {
        // Then trigger an alert
        alert('Media Query Matched!')
    }
     */