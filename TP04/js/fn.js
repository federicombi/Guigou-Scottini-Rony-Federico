let
group=[0, 0, 0, 0, 0, 0];
groupPhotos=[];
idPersonaje=0; i=0; iA=0; iB=3;
tope= 0; topeA=3; topeB=6; inX="";
inputGroup=""; mensajeError=""; 
urlAPI= "https://rickandmortyapi.com/api/character/";

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
    } else if (groupClass == "groupB"){
        i= iB;
        iB++;
        tope = topeB;
        inputGroup="groupB";
        mensajeError="errorB";
        inX="inB";
    }
}
function cleanField(groupClass){
    document.getElementById(groupClass).value="";
}

function take(groupClass){
    asignGroup(groupClass);
    if (i<tope){
        group[i]= Number(Number(document.getElementById(inputGroup).value).toFixed(0));
        cleanField(groupClass);
        document.getElementById(inputGroup).focus();
        if (group[i] > 826){
            document.getElementById(mensajeError).innerHTML= "El numero debe ser menor que 827";
            correcti(groupClass);
        }   else if (group[i]<1) {
                document.getElementById(mensajeError).innerHTML= "El numero debe ser mayor a 0";
                correcti(groupClass);
            }   else{
                    document.getElementById(mensajeError).innerHTML= "";
                }
        console.log(group[i] + " "+ typeof(group[i]));
    } else {
            document.getElementById(mensajeError).innerHTML="Ya se ingresaron los números"
        };
    console.log(group);

    if(i==tope){
        document.getElementById(inX).style.display = 'block';
    }
}

function getPhotos(){
    for(i=0;i<6;i++){
        fetch(urlAPI+group[i])
            .then (response => response.json)
                .then (data =>{
                    groupPhotos[i]= data.image;
                })
    }
    console.log(groupPhotos);
}