var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var teclas = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 };
var fondo = { url: "tile.png", cargaOK: false };
var vaca = { url: "vaca.png", cargaOK: false };
var pollo = { url: "pollo.png", cargaOK: false };
var cerdo = { url: "cerdo.png", cargaOK: false };
var cerdoCorredor = { url: "cerdo.png", cargaOK: false, coordX: 0, coordY: 0 };

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

cerdoCorredor.imagen = new Image();
cerdoCorredor.imagen.src = cerdoCorredor.url;
cerdoCorredor.imagen.addEventListener("load", cargarCerdoCorredor);

document.addEventListener("keydown", moverCerdoCorredor);

function dibujar() {
  if (fondo.cargaOK) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (cerdoCorredor.cargaOK) {
    papel.drawImage(
      cerdoCorredor.imagen,
      cerdoCorredor.coordX,
      cerdoCorredor.coordY
    );
  }

  dibujoAleatorio(vaca, aleatorio(0, 6));
  dibujoAleatorio(pollo, aleatorio(0, 6));
  dibujoAleatorio(cerdo, aleatorio(0, 6));
}

function dibujoAleatorio(animal, cantidad) {
  if (animal.cargaOK) {
    var x;
    var y;
    for (i = 0; i < cantidad; i++) {
      x = aleatorio(0, 5) * 80;
      y = aleatorio(0, 5) * 80;
      papel.drawImage(animal.imagen, x, y);
    }
  }
}

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarCerdoCorredor() {
  cerdoCorredor.cargaOK = true;
  dibujar();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moverCerdoCorredor(evento) {
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      if (cerdoCorredor.coordY - movimiento >= 0) {
        cerdoCorredor.coordY -= movimiento;
        dibujar();
      }
      break;
    case teclas.DOWN:
      if (cerdoCorredor.coordY + movimiento <= 420) {
        cerdoCorredor.coordY += movimiento;
        dibujar();
      }
      break;
    case teclas.LEFT:
      if (cerdoCorredor.coordX - movimiento >= 0) {
        cerdoCorredor.coordX -= movimiento;
        dibujar();
      }
      break;
    case teclas.RIGHT:
      if (cerdoCorredor.coordX + movimiento <= 420) {
        cerdoCorredor.coordX += movimiento;
        dibujar();
      }
      break;
    default:
      console.log("Otra tecla");
  }

  //console.log("x=" + x + ", y=" + y);
}
