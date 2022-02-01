//alert('Hola mundo');

var nombre = "victor balladares";
var altura = 190;
/*
var concatenacion = nombre + " "+ altura;

var datos = document.getElementById("datos");

datos.innerHTML = `
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${altura} cm</h3>
`;

//Estructuras de control 

if(altura >= 190){
    //al colocar += sumamos todo lo que tenemos y le añadi,os el resto del código
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`;
}

for(var i =0; i<= 20; i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: </h2> "+i;
}
*/

function MuestraMiNombre(nombre, altura){
    var datos = document.getElementById("datos");

    datos.innerHTML = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;
}

MuestraMiNombre("Manuel", 170);