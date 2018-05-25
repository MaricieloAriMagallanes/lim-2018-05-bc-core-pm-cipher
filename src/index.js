//Declarar las variables
var cifrar=document.getElementById("btn");
var decifrar=document.getElementById("btnde");
//Utilizar los eventos del OnClick 
cifrar.addEventListener("click",cifrado);
decifrar.addEventListener("click",decifrado);


//Realizar las funciones
   //Funcion de Cifrado
function cifrado() {
    //Declaramos las variables de la funcion
    var content=document.getElementById('text1').value;
    var des=parseInt(document.getElementById('offset').value);
    var resultado = '';

    for(var i = 0; i < content.length; i++){
        var palabra = content.charCodeAt(i);
       if (65 <= palabra && palabra <= 90) {
          resultado += String.fromCharCode((palabra - 65 + des)% 26 + 65); 
       }else if (97 <= palabra && palabra <= 122){
          resultado += String.fromCharCode((palabra - 97 + des)% 26 + 97);
       }else{ resultado += content.charAt(i)}
       
    }
    document.getElementById("root").innerHTML =resultado;
    document.getElementById("va").innerHTML = des;
    
}

    //Realizar la funcion de Decifrado
function decifrado() {
        //Declaramos las variables de la funcion
        var content=document.getElementById('text1').value;
        var des=parseInt(document.getElementById('offset').value);
        var resultado = '';

        for(var i = 0; i < content.length; i++){
            var palabra = content.charCodeAt(i);
           if (90 <= palabra && palabra <= 97) {
              resultado += String.fromCharCode(palabra -65 - des)%26; 
           }else if (122 <= palabra && palabra <= 90){
              resultado += String.fromCharCode(palabra - 65 - des)%26;
           }else{ resultado += content.charAt(i)}
           
        }
          document.getElementById("root").innerHTML =resultado; 
    }
       