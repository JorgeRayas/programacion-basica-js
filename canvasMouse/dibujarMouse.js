// Variables para obtener el canvas y el lienzo
var pagina = document.getElementById("dibujito");
var lienzo = pagina.getContext("2d");
// Boton para limpiar canvas
var btnLimpiar = document.getElementById("btnLimpiar");
// Bandera para saber cuando empezar o parar de dibujar
var quiereDibujar = false;
// Variables para saber las coordenadas
var x;
var y;

dibujarMarco();

// Agregamos eventos
pagina.addEventListener("mousemove", dibujar);
pagina.addEventListener("mousedown", detectarClick);
pagina.addEventListener("mouseup", detectarDejarClick);
btnLimpiar.addEventListener("click", limpiar);

function dibujar(evento) {
  if (quiereDibujar) {
    var xMouse = evento.x;
    var yMouse = evento.y;
    var color = document.getElementById("colores").value;
    dibujarLinea(color, x, y, xMouse, yMouse, lienzo);
    x = xMouse;
    y = yMouse;
  }
}

function detectarClick(evento) {
  quiereDibujar = true;
  x = evento.x;
  y = evento.y;
}

function detectarDejarClick(evento) {
  quiereDibujar = false;
  x = evento.x;
  y = evento.y;
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath;
}

function dibujarMarco() {
  // Marco del canvas
  dibujarLinea("black", 0, 0, pagina.width, 0, lienzo);
  dibujarLinea("black", 0, pagina.height, pagina.width, pagina.height, lienzo);
  dibujarLinea("black", 0, 0, 0, pagina.height, lienzo);
  dibujarLinea("black", pagina.width, 0, pagina.width, pagina.height, lienzo);
}

function limpiar() {
  lienzo.clearRect(0, 0, pagina.width, pagina.height);
  dibujarMarco();
}
