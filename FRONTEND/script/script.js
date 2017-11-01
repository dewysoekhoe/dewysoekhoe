var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    var active = document.querySelector(".accordion.active");
    if (active && active != this) {
      active.classList.remove("active");
      active.nextElementSibling.classList.remove("show");
    }
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  }
}


//Variabelen
savebtn = document.getElementById("savebtn"); //linkt button met de image
var image = document.getElementById("savebtn"); // variabele aanmaken image

//Events
image.addEventListener("click", changeImage); //verandert de image door klik

//Functie verander play image
function changeImage() {
    if (image.src.match("play")) { // Als het woord 'play' matched met de string, dan laat hij play zien, anders pause.
        image.src = "style/images/pause.png"; // Verandert de play image naar pause image
    } else {
        image.src = "style/images/play.png";
    }
} 



