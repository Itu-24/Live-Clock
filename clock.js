function put() {
    document.getElementById('pp').innerHTML = "Hello Akash";
}
function time() {
    let mytime = new Date();

    document.getElementById('hrs').innerHTML = mytime.getHours() + '  Hr  ';
    document.getElementById('min').innerHTML = mytime.getMinutes() + '  Min ';
    document.getElementById('sec').innerHTML = mytime.getSeconds() + '  Sec';
}

let box = document.getElementById('box');
box.style.display='none';

function showtime() {
    
    box.style.display='flex';
    btn.style.display='none';
    setInterval(time, 1000);

}