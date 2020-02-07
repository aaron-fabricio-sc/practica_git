var cafecito = require('express');
var aplicacion = cafecito();

aplicacion.get("/", inicio);


aplicacion.get("/cursos", cursos);



function inicio(peticion, resultado) {
    resultado.send("<body style='background: red;'> <h1 style=color='while;'>MI primer servidor</h1>  <img src='vaca.png' /></body>");
}

function cursos(peticion, resultado) {
    resultado.send("este es la clase sadsadsadsa");
}

aplicacion.listen(8989);