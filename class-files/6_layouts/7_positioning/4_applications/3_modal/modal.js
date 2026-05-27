
const showButton = document.querySelector("#show");
const closeButton = document.querySelector("#close");
const modal = document.querySelector("#modal-cover");

showButton.onclick = () => {
    modal.style.display = "block";
}

closeButton.onclick = () => {
    modal.style.display = "none";
}