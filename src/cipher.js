window.cipher = {
  // ... 
  encode : (offset,string) => {

    let des = offset;
    let content = string;
    let resultado ="";
    

    for (let i = 0; i < content.length; i++){
      let palabra = content.charCodeAt(i);
      if (65 <= palabra && palabra <= 90) {
        resultado += String.fromCharCode((palabra - 65 + des)% 26 + 65); 
      } else if (97 <= palabra && palabra <= 122){
        resultado += String.fromCharCode((palabra - 97 + des)% 26 + 97);
      } else {
        resultado += content.charAt(i)
      }
     
    }
    return resultado; 
  },
  
  decode : (offset,string) => {
    
    let des = offset;
    let content =string;
    let resultado = "";

    for(let i = 0; i < content.length; i++){
      let palabra = content.charCodeAt(i);
     if (65 <= palabra && palabra <= 90) {
        resultado += String.fromCharCode((palabra + 65 - des)%26 + 65); 
      } else if (palabra >=97 && palabra <= 122){
        resultado += String.fromCharCode((palabra + 97 - des + 14)%26 + 97);
      } else { 
        resultado += content.charAt(i)
      }
     
    }
   return resultado; 
  }
  
};
