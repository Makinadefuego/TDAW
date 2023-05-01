class Regalo {
    constructor(contenedorElemento) {
      this.contenedorElemento = contenedorElemento;
      this.abrirRegalo = this.abrirRegalo.bind(this);
      this.image = document.createElement("img");
      this.image.src = "gift-icon.png";
      this.image.addEventListener("click", this.abrirRegalo);
      this.contenedorElemento.append(this.image);
    }
    abrirRegalo(event) {
      this.image.src = "giphy.gif";
      this.image.removeEventListener("click", this.abrirRegalo);
    }
  }
  
  const contenedorElemento = document.querySelector("#regalo");
  const regalo = new Regalo(contenedorElemento);