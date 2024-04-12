const personaje = 
    {
      "id": 140,
     "name": "Genital Washer",
     "status": "Alive",
     "species": "Human",
     "type": "",
     "gender": "Male",
     "origin": {
         "name": "Post-Apocalyptic Earth",
         "url": "https://rickandmortyapi.com/api/location/8"
     },
     "location": {
         "name": "Post-Apocalyptic Earth",
         "url": "https://rickandmortyapi.com/api/location/8"
     },
     "image": "https://rickandmortyapi.com/api/character/avatar/140.jpeg",
     "episode": [
         "https://rickandmortyapi.com/api/episode/23"
     ],
     "url": "https://rickandmortyapi.com/api/character/140",
     "created": "2017-12-27T18:47:44.566Z"
    } 
/*console.log(Personaje);*/
console.log(personaje.name);
console.log(personaje.location.name);

const jugador ={
    "nombre": "Nahuel",
    "apellido": "barrios",
    "apodo": "perrito",
    "edad": 28,
    "clubes":["San Lorenzo", "U. Catolica"],
    "activo": true,
    "sueldo": 1000000.99
}
console.log(jugador.clubes[0]);
console.log("El Personaje ",personaje.name, " está ", personaje.status)

/*document.getElementById("result").innerHTML= "El Personaje "+personaje.name+ " está "+ personaje.status;*/
/* 11/04/2024:  */

function nombre(){
    var valor = document.getElementById("valor").value;
    console.log("Personaje: "+ valor);
    fetch("https://rickandmortyapi.com/api/character/"+valor)
    .then(response => response.json()
        .then(data => {
            console.log(data.name);
        }));
};

/* 12/04/2024:  */
var genero1=" ", genero2=" ", numPersonaje= Number;

function buscar_genero1(){
    let imagen = document.getElementById("p1");
    numPersonaje = document.getElementById("Numero_Personaje1").value;
    fetch("https://rickandmortyapi.com/api/character/"+numPersonaje)
        .then (response => response.json()
            .then (data => {
                console.log("PERSONAJE 1:  Num: "+numPersonaje + " - Nombre: "+data.name + " - Genero: "+data.gender);
                genero1= data.gender;
                imagen.src= data.image;
                imagen.width="100";
                imagen.height="100";
            }))
}/* BUSCAR cómo hacer que se use una sola función para ambos input */
function buscar_genero2(){
    let imagen = document.getElementById("p2");
    numPersonaje = document.getElementById("Numero_Personaje2").value;
    fetch("https://rickandmortyapi.com/api/character/"+numPersonaje)
        .then (response => response.json()
            .then (data => {
                console.log("PERSONAJE 2:  Num: "+numPersonaje + " - Nombre: "+data.name + " - Genero: "+data.gender);
                genero2= data.gender;
                imagen.src= data.image;
                imagen.width="100";
                imagen.height="100";         
            }))
}

function comparar_generos(){
    let imagen = document.getElementById("resultado");
    console.log("comparando...");
    if (genero1 == genero2){
        imagen.src= "https://segboardshoppen.dk/wp-content/uploads/2019/02/checkmark-for-verification.svg"
        imagen.width="100";
        imagen.height="100";
        imagen.alt="tienen el mismo genero";
        }
        else {
            imagen.src= "https://cdn.pixabay.com/photo/2012/04/13/00/22/red-31226_960_720.png";
            imagen.width="100";
            imagen.height="100";
            imagen.alt="NO tienen el mismo genero";
        }
    
}

