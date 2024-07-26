const li = document.querySelector("li")
const knowMore = document.querySelector(".know-more")

function displayInformation () {
    knowMore.style.visibility = "visible";
    knowMore.style.transitionDelay = "0.5s";
}

addEventListener("click", displayInformation)