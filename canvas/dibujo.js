var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;
var l = 0;
var color = "#777";
var distancia = 10;

while (l < lineas) {
  var c1 = l * distancia;
  var c2 = l * distancia + distancia;
  dibujarLinea("red", 0, c1, c2, 300); // esquina inf izq
  dibujarLinea("green", 300, c1, 300 - c2, 300); // esquina inf der
  dibujarLinea("blue", c1, 0, 300, c2); // esquina sup der
  dibujarLinea("purple", 300 - c1, 0, 0, c2); // esquina sup izq
  l++;
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath;
}

function dibujoPorClick() {
  var x = texto.value;
  console.log(texto.value);
  alert("No me toques ahi " + x);

}
