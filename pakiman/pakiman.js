class Pakiman {
    constructor(nombre, vida, ataque) {
      this.imagen = new Image();
      this.nombre = nombre;
      this.vida = vida;
      this.ataque = ataque;
      this.imagen.src = imagenes[nombre];
    }
  
    hablar() {
      alert(this.nombre);
    }
  
    mostrar() {
      document.body.appendChild(this.imagen);
      document.write("<br><strong>" + this.nombre + "</strong><br>");
      document.write("Vida:" + this.vida);
      document.write("<br>Ataque:" + this.ataque);
      document.write("<hr>");
    }
  }