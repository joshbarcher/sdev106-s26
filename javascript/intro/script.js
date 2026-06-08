
//select the paragraph with id output, and put the number in it
let paragraph = document.querySelector("#output");
let pageContent = "";

for (let i = 1; i <= 1000; i++) {
    //print a random number to the browser console
    let number = Math.random();
    console.log(number);

    pageContent += "Number: " + number + "<br>";
}

paragraph.innerHTML = pageContent;