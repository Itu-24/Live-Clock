
let box = document.getElementById('box');
box.style.display='none';

function time() {
    let mytime = new Date();

    document.getElementById('long').innerHTML = mytime.getHours() + '  Hr  ';
    document.getElementById('medium').innerHTML = mytime.getMinutes() + '  Min ';
    document.getElementById('small').innerHTML = mytime.getSeconds() + '  Sec';
    
}

function date(){

    let mydate=new Date();
    document.getElementById('long').innerHTML=mydate.getFullYear();
    document.getElementById('medium').innerHTML=mydate.getMonth()+1;
    document.getElementById('small').innerHTML=mydate.getDate();
    
}

function showtime() {
    
    box.style.display='flex';
    container.style.display='none';

    setInterval(time, 1000);

}

function showdate(){
    box.style.display='flex';
    container.style.display='none';

    setInterval(date, 1000);
}

