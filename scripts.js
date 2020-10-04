/* const btn = document.querySelectorAll('formEmail'); */
const btn = document.getElementById("btnId");

function startTime(){

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    document.getElementById('txtHour').innerHTML = h;
    document.getElementById('txtMin').innerHTML = m;

    var t = setTimeout(startTime, 10000);
}

/* function btnMouseOut(){
    
    btn.style.backgroundColor = "red";
    btn.style.boxShadow = 
    "0 0 5px  #03e9f4",
    "0 0 25px  #03e9f4",
    "0 0 50px  #03e9f4",
    "0 0 500px  #03e9f4" ;
    /* : x offset, y offset, blur size, spread size, color 

    btn.style.transition =  "1s";
    console.log("Mouse Out fired");
}

function mouseHover(){
    console.log("Mouse Hover fired");
    btn.style.backgroundImage = "linear-gradient( 170 deg, rgba(white, 0.3), rgba(white, 0))";
    btn.style.backgroundColor = "#03e9f4";
    btn.style.boxShadow = 
    "0 0 5px  #03e9f4",
    "0 0 25px  #03e9f4",
    "0 0 50px  #03e9f4",
    "0 0 500px  #03e9f4" ;
    

    btn.style.transition =  "1s";
} */

/* let a = document.querySelectorAll("p");
a[0].style.backgroundColor = 'red';
a[1].style.backgroundColor = "blue"; */

