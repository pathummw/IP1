function startTime(){

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();

    document.getElementById('txtHour').innerHTML = h;
    document.getElementById('txtMin').innerHTML = m;

    var t = setTimeout(startTime, 500);
}



