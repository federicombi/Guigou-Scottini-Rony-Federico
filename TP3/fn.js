/*
function obtenerUser(){
    fetch("https://randomuser.me/api/")
        .then((results)=>{
            return results.json();
        })
            .then ((data)=>{
                console.log(data.results);
            });
};
*/
console.log("ready");
let latitud="";
let longitud="";

function probar(){
    console.log("funca")
}

function obtenerUser(){
    const urlRandomUser="https://randomuser.me/api/";
    fetch(urlRandomUser)
        .then(response => response.json())
            .then(data => {
                console.log(data.results[0].location.coordinates.latitude);
                latitud = data.results[0].location.coordinates.latitude;
                longitud = data.results[0].location.coordinates.longitude;
                console.log(data.results[0].location.coordinates.longitude);
            });
}

function createMap(){
    let map= L.map("map").setView([51.505, 51.09], 13);
}