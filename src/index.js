//Declarar las variables
let cifrar=document.getElementById("btn");
let decifrar=document.getElementById("btnde");
//Utilizar los eventos del OnClick 
cifrar.addEventListener("click",encode);
decifrar.addEventListener("click",decode);


//Realizar las funciones
   
//Funcion de Cifrado
function encode() {
    
    //Declaramos las variables de la funcion
    let content=document.getElementById('text1').value;
    let des=parseInt(document.getElementById('offset').value);
    let resultado = cipher.encode (des,content);
    
    //Ponemos los bucles y los tips que dieron en el proyecto

    
    document.getElementById("re").innerHTML ="El mensaje cifrado es: " + resultado;
    document.getElementById("va").innerHTML = "El numero de desplazamientos escogido es:" + des;
    
}

    //Realizar la funcion de Decifrado
function decode() {
        //Declaramos las variables de la funcion
        let content=document.getElementById('text1').value;
        let des=parseInt(document.getElementById('offset').value);
        let resultado = cipher.decode(des,content);

        
          document.getElementById("re").innerHTML ="El mensaje descifrado es: " + resultado; 
    }