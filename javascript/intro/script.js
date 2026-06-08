
//select the paragraph with id output, and put the number in it
let paragraph = document.querySelector("#output");
let pageContent = "";

for (let i = 1; i <= 100; i++) {
    //print a random number to the browser console
    let number = Math.random();
    console.log(number);

    let color = randomColor();
    pageContent += `Number: <span style="color: ${color}">` + number + "</span><br>";
}

paragraph.innerHTML = pageContent;
paragraph.style.color = "lightblue";
// paragraph.style.backgroundColor = "gray";

function randomColor() {
    let red = Math.floor(Math.random() * 256); //0-255
    let green = Math.floor(Math.random() * 256); //0-255
    let blue = Math.floor(Math.random() * 256); //0-255

    console.log(red, green, blue);

    return `rgb(${red}, ${green}, ${blue})`;
}