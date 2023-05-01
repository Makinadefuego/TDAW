class Aplicacion {
  constructor(contenedorRegalos, contenedorTitulo) {
    this.contenedorRegalos = contenedorRegalos;
    this.contenedorTitulo = contenedorTitulo;
    this.regaloAbierto = this.regaloAbierto.bind(this);
    this.regalos = [];
    this.contador = 0;
    this.cargarContenedorRegalo();
  }
  cargarContenedorRegalo() {
    for (const enlace of REGALOS_ENLACES) {
      const regalo = new Regalo(
        this.contenedorRegalos,
        enlace,
        this.regaloAbierto
      );
      this.regalos.push(regalo);
    }
  }
  regaloAbierto() {
    this.contador++;
    if (this.contador == this.regalos.length) {
      this.contenedorTitulo.textContent = "Abriste todos los regalos :)";
    }
  }
}

const contenedorRegalos = document.querySelector("#regalo");
const contenedorTitulo = document.querySelector("h1");
const app = new Aplicacion(contenedorRegalos, contenedorTitulo);
