function ajax(idPregunta, label) {
    const http = new XMLHttpRequest();
    const url = "../documents/preguntas2.json";

    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //Se obtienen las preguntas del archivo JSON
            let preguntas = JSON.parse(this.responseText);
            let pregunta = preguntas.find((pregunta) => pregunta.id == idPregunta);
            let consejo = pregunta.clave;

            let consejoDiv = document.createElement("div");
            consejoDiv.style.position = "absolute";
            //Se establece la posición del consejo con respecto a la etiqueta de la pregunta
            consejoDiv.style.top = label.offsetTop + label.offsetHeight + "px";
            consejoDiv.style.left = label.offsetLeft + "px";
            consejoDiv.style.width = label.offsetWidth + "px";
            //Estilo del consejo
            consejoDiv.style.height = "auto";
            consejoDiv.style.backgroundColor = "white";
            consejoDiv.style.border = "1px solid black";
            consejoDiv.style.borderRadius = "5px";
            consejoDiv.style.padding = "5px";
            consejoDiv.style.zIndex = "1";
            consejoDiv.style.transition = "all 0.3s ease-in-out";
            consejoDiv.style.textAlign = "center";
            consejoDiv.style.fontSize = "1.5em";
            consejoDiv.style.fontWeight = "bold";
            consejoDiv.style.fontFamily = "Arial";
            consejoDiv.style.color = "black";
     //Se establece la posición del consejo con respecto al puntero del mouse

            consejoDiv.className = "Consejo";
            consejoDiv.textContent = consejo;
            formulario.appendChild(consejoDiv);



        }
    };

    http.open("GET", url, true);
    http.send();
}

//Función que oculta el consejo
function ocultarConsejo() {
    let consejo = document.querySelector(".Consejo");
    consejo.remove();
}





