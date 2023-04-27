//Se crea la función que hace aleatorio el orden de los botones
let grid = document.getElementById("grilla");
let children = grid.children;
let childArray = [];

//Se inicializa el contador de movimientos
let moves = 0;

//Se inicializa el contador de tiempo
let timeElapsed = 0;
let timerId;

//Se crea una función que le da el formato MM:SS al contador de tiempo
function formatTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

//Se crea la función que hace que el contador de tiempo se actualice cada segundo
function startTimer(){
    timeElapsed = 0;
    document.getElementById("Tiempo").innerHTML = 0;
    clearInterval(timerId);
    timerId = setInterval(function(){
      timeElapsed++;
      document.getElementById("Tiempo").innerHTML = formatTime(timeElapsed);
    }, 1000);
}
  

for(let i = 0; i < children.length; i++){
    childArray.push(children[i]);
}
function randomizeGrid(){

    childArray.sort(function(){
        return 0.5 - Math.random();
    });

   
    for(let i = 0; i < childArray.length; i++){
        grid.appendChild(childArray[i]);
    }
    
    startTimer();
    
    updateGame();

}

//Cuando se presione el boton con el id play se ejecutará la función randomizeGrid
document.getElementById("play").onclick = randomizeGrid;


//Función que actualiza el contador de movimientos
function updateMoves(){
    document.getElementById("numMovimientos").innerHTML = moves;
}

//Se crea la función que hace que los botones se muevan
function moveTile(tile){
    let empty = childArray.indexOf(document.getElementById("btn0"));
    //Si el boton tile se encuentra a la izquierda del boton vacio, se intercambian sus posiciones en el grid
    if((tile == empty - 1 && empty % 4 !== 0) || // no está en la primera columna
    (tile == empty + 1 && empty % 4 !== 3) || // no está en la última columna
    tile == empty - 4 || // está en la fila de arriba
    tile == empty + 4){
        //entonces...
        let temp = childArray[tile];
        childArray[tile] = childArray[empty];
        childArray[empty] = temp;
        moves++;
        updateMoves();
    }
    //Se elimina el contenido del div
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    //Se agrega el contenido del div
    for(let i = 0; i < childArray.length; i++){
        grid.appendChild(childArray[i]);
    }
    updateGame();
    if(checkGame()){
        alert("¡Has ganado!");
        
    }
    console.log(childArray.indexOf(document.getElementById("btn0")));
}

//Función actualiza el la función moveTile
function updateGame(){
    for(let i = 0; i < childArray.length; i++){
        childArray[i].onclick = function(){
            moveTile(i);
        }
    }
}


//Se crea la función que verifica si el juego ha terminado
function checkGame(){
    for(let i = 0; i < childArray.length-1; i++){
        if(childArray[i].id !== "btn" + (i+1)){
            return false;
        }
    }
    clearInterval(timerId);
    timeElapsed = 0;
    document.getElementById("Tiempo").innerHTML = "";
    return true;
}
