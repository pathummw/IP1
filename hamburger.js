const burgerBtn = document.getElementById("hamburger");
let spanElements = document.querySelectorAll("span");
let navBar = document.querySelector("nav");
let listButtons = document.querySelectorAll("nav a");
let img = document.querySelector("img");
let firstClick = true;  /* Set the boolean value when hanburger button clicked to change the state of the burger button */


/* window.addEventListener('resize', setEqualHeight);  */ /* TEST */
/* const mediaQuery = window.matchMedia('(min-width: 800px)') */

function setEqualHeight(e) {
    /* let viewportWidth = parseInt(document.documentElement.clientWidth);
    if(viewportWidth > 750){
        document.querySelector("nav").style.visibility = "visible";
        console.log("NAV VISIBLE");
    } */
}

window.addEventListener("resize", reSizeFunction);

function reSizeFunction(){
    if(parseInt(document.documentElement.clientWidth) >= 810){
        burgerBtn.style.visibility = "hidden";
        document.querySelector("nav").style.visibility = "visible";
    }
    else{
        document.querySelector("nav").style.visibility = "hidden";
        burgerBtn.style.visibility = "visible";
    }
    /* console.log("Resized: "+window.innerWidth+' Client Width: '+document.documentElement.clientWidth); */
}



burgerBtn.addEventListener("click",function(event){
    /* burgerBtn.style.transition = '2s'; */
    console.log("Func call");
    
    /* if(1==1){ */
        /* document.querySelector("span").style.backgroundColor = "red";
        document.querySelector("span").style.transform = "rotate(135deg)"; */
        /* spanElements[0].style.transform = "rotate(45deg)";
        spanElements[0].style.width = "30px"; */
        /* spanElements[1].style.backgroundColor = "red"; */
        /* spanElements[2].style.transform = "rotate(-45deg)";
        spanElements[2].style.width = "30px"; */

        /* transform: rotate(45deg);
        transform: rotate(-45deg); */

        /* navBar.style.visibility = "visible";

        listButtons.forEach(element => element.style.width = "80vw"); */
        /* listButtons[4].style.width = "80vw"; */
        /* console.log(listButtons); */
        /* clicked = true; */
        
    /* } */
    /*if(1==1){  //set hamburger button to normal stage
        /* spanElements[0].style.transform = "rotate(0deg)";
        spanElements[0].style.width = "10px";
        /* spanElements[1].style.backgroundColor = "red"; 
        spanElements[2].style.transform = "rotate(0deg)";
        spanElements[2].style.width = "10px";
        clicked = false; */
        /* console.log("clicked second"); 
    } */

    if(firstClick){
        spanElements[1].style.backgroundColor = "red";

        spanElements[0].style.transform = "rotate(45deg) translate(9px, 8px)";
        spanElements[1].style.opacity = "0";
        spanElements[2].style.transform = "rotate(-45deg) translate(7px, -5px)"; 
        /* navBar.style.visibility = "visible"; */
        document.querySelector("nav").style.zIndex = "";
        burgerBtn.style.zIndex = "1";
        document.querySelector("nav").style.visibility = "visible";

        firstClick = false;
    }
    else if(!firstClick){
        spanElements[1].style.backgroundColor = "green";
        spanElements[0].style.transform = "rotate(0deg)";
        spanElements[1].style.opacity = "100";
        spanElements[2].style.transform = "rotate(0deg)";
        document.querySelector("nav").style.zIndex = "2";
        burgerBtn.style.zIndex = "1";
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