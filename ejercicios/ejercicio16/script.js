function saludar(saludarFuncion) {
  saludarFuncion();
}
const saludoInternacional = function () {
  console.log("Hola mundo");
};
const saludoMexicano = function () {
  console.log("Quihubole!");
};

saludar(saludoInternacional);
saludar(saludoMexicano);
