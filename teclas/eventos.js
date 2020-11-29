var teclas = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };

document.addEventListener("keydown", dibujarTeclado);

var cuadrito = document.getElementById("dibujito");
var papel = cuadrito.getContext("2d");
var x = 0;
var y = 0;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarTeclado(evento) {
  var color = "blue";
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      if (y - movimiento >= 0) {
        dibujarLinea(color, x, y, x, y - movimiento, papel);
        y -= movimiento;
      }
      break;
    case teclas.DOWN:
      if (y + movimiento <= cuadrito.height) {
        dibujarLinea(color, x, y, x, y + movimiento, papel);
        y += movimiento;
      }
      break;
    case teclas.LEFT:
      if (x - movimiento >= 0) {
        dibujarLinea(color, x, y, x - movimiento, y, papel);
        x -= movimiento;
      }
      break;
    case teclas.RIGHT:
      if (x + movimiento <= cuadrito.width) {
        dibujarLinea(color, x, y, x + movimiento, y, papel);
        x += movimiento;
      }
      break;
    default:
      console.log("Otra tecla");
  }

  console.log("x=" + x + ", y=" + y);
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
