//Hints
//function setTime() {

let time = document.getElementById('time');
   
function setTime() {
    const clock = new Date();

    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();

    time.innerHTML = hours + "." + minutes + "." + seconds;
}
    
   
//}
//setTime();
setInterval(setTime, 1000);