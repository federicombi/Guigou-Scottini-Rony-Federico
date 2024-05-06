let
group=[],
char= 0,
groupPhotos=[],
idPersonaje=0, i=0, iA=0, iB=3,
tope= 0, topeA=3, topeB=6, inX="",
inputGroup="", mensajeError="", 
completed="",
photoN="";

const urlRickMorty= "https://rickandmortyapi.com/api/character/";

function correcti(groupClass){
    if (groupClass == "groupA"){
        iA=i;
    } else if (groupClass == "groupB"){
        iB= i;
    }
}
function asignGroup(groupClass){
    if (groupClass == "groupA"){
        i= iA;
        iA++;
        tope = topeA;
        inputGroup="groupA";
        mensajeError="errorA";
        inX="inA";
        completed="aCompleted"
    } else if (groupClass == "groupB"){
        i= iB;
        iB++;
        tope = topeB;
        inputGroup="groupB";
        mensajeError="errorB";
        inX="inB";
        completed="bCompleted"
    }
}
function cleanField(groupClass){
    document.getElementById(groupClass).value="";
}
function take(groupClass){
    asignGroup(groupClass);
    if (i<tope){
        char= Number(Number(document.getElementById(inputGroup).value).toFixed(0));
        cleanField(groupClass);
        document.getElementById(inputGroup).focus();
        if (char > 826){
            document.getElementById(mensajeError).innerHTML= "El numero debe ser menor que 827";
            correcti(groupClass);
        }   else if (char<1) {
                document.getElementById(mensajeError).innerHTML= "El numero debe ser mayor a 0";
                correcti(groupClass);
            }   else if (alreadyIn(char)){
                    document.getElementById(mensajeError).innerHTML= "Ese número ya se ingresó";
                    correcti(groupClass);
                } else{
                        document.getElementById(mensajeError).innerHTML= "";
                        group[i] = char;
                    }
    } else {
            document.getElementById(mensajeError).innerHTML="Ya se ingresaron los números"
        };
    if(group[tope-1] != undefined){
        document.getElementById(inX).style.display = 'none';
        document.getElementById(completed).style.display = 'block';
    }
    if((group[topeA-1] != undefined) && (group[topeB-1] != undefined)){
        console.log(group);
        console.log("Grupo A y B ingresados");
        getPhotos();
        showPhotos(true);
    }
}
function alreadyIn(char){
    let result= false;
    for(z=0;z<topeB;z++){
        if (char == group[z]){
            result=true;
        } 
    }
    return result;
}
function getPhotos(){ 
    (fetch(urlRickMorty+group)
        .then(response => response.json())
            .then (data =>{
                for(const element of data){
                    for(i=0;i<topeB;i++){
                        if (element.id == group[i]){
                            console.log(element.image);
                            document.getElementById("p"+i).src = element.image;
                            document.getElementById("p"+i).alt = "Imagen: Personaje n° "+element.id;
                        }
                    }
                }    
            })).catch(error => {
                console.log(error);
                document.getElementById("error").innerHTML= 
                "<p>Hubo un error: </p><p>"+error.message+" "+"</p>";
            })
    
}
function showPhotos(bool){
    if (bool){
        for (z=0;z<topeB;z++){
            photoN= "p"+z;
            document.getElementById(photoN).style.display = "block"
        }
        document.getElementById("photosGroupA").style.display="block";
        document.getElementById("photosGroupB").style.display="block";
        //document.getElementById("result").style.display="block";
    }else{
        for (z=0;z<topeB;z++){
            photoN= "p"+z;
            document.getElementById(photoN).style.display = "none"
        }
        document.getElementById("photosGroupA").style.display="none";
        document.getElementById("photosGroupB").style.display="none";
    }
}

function reset(){
    document.getElementById("aCompleted").style.display = 'none';
    document.getElementById("bCompleted").style.display = 'none';
    showPhotos(false);
    group=[];
    groupPhotos = [];
    iA= 0;
    iB= 3;
    i=0;
    document.getElementById("inA").style.display = 'block';
    document.getElementById("inB").style.display = 'block';
}
