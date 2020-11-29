var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath;
}

function dibujoPorClick() {
  var lineas = parseInt(texto.value);

  //Si es un valor numerico procedmeos con el algoritmo
  if (!isNaN(lineas)) {
    var ancho = d.width;
    var alto = d.height;
    var distancia = ancho / lineas;

    //Limpiamos el lienzo
    lienzo.clearRect(0, 0, ancho, alto);

    for (l = 0; l < lineas; l++) {
      var c1 = l * distancia;
      var c2 = distancia * (l + 1);
      dibujarLinea("red", 0, c1, c2, ancho); // esquina inf izq
      dibujarLinea("green", ancho, c1, ancho - c2, ancho); // esquina inf der
      dibujarLinea("blue", c1, 0, ancho, c2); // esquina sup der
      dibujarLinea("purple", ancho - c1, 0, 0, c2); // esquina sup izq
    }
  } else {
    alert("Escribe una cantidad numérica para las lineas -_-");
  }
}
