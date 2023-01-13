
function reloj() {
    let d = new Date();
    document.getElementById('tiempo').innerHTML = "<h4>Hora actual:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    "</h4>"
}

setInterval(reloj, 1000);


var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}