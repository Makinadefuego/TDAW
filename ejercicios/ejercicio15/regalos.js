class Regalo {
  constructor(contenedorElemento, regaloSrc) {
    this.contenedorElemento = contenedorElemento;
    this.abrirRegalo = this.abrirRegalo.bind(this);
    this.regaloSrc = regaloSrc;
    this.image = document.createElement("img");
    this.image.src = "gift-icon.png";
    this.image.width = "200";
    this.image.addEventListener("click", this.abrirRegalo);
    this.contenedorElemento.append(this.image);
  }
  abrirRegalo(event) {
    this.image.src = this.regaloSrc;
    this.image.removeEventListener("click", this.abrirRegalo);
    document.dispatchEvent(new CustomEvent("regaloAbierto"));
  }
}
