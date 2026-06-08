
//declaring a function to show the time
function showTime() {
    let now = new Date();
    console.log(now);

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let time = `${hours} : ${minutes} : ${seconds}`;
    document.querySelector("#clock").textContent = time;

    let date = now.toLocaleDateString("en-us");
    document.querySelector("#date").textContent = date;
}

//call the time function
showTime();

//update the clock every 1000ms = 1s
setInterval(showTime, 1000);