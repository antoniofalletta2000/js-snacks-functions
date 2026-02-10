/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.
/* function goodGenerator (word){
    let saluto
    const currentTime = new Date().getHours()
    if(currentTime<=13){
        saluto = "Buongiorno"
    }else if (currentTime<=17){                                                 //with normal sintax function
        saluto="Buon pomeriggio"
    }else{
        saluto="Buonasera"
    }
    const goodName = (saluto+ " "+word)
    return goodName
} */
const goodGenerator =(word)=>{
     let saluto
    const currentTime = new Date().getHours()
    if(currentTime<=13){                                                       //with sintax arrow function
        saluto = "Buongiorno"
    }else if (currentTime<=17){
        saluto="Buon pomeriggio"
    }else{
        saluto="Buonasera"
    }
    const goodName = (saluto+ " "+word)
    return goodName
}

// Invoca la funzione qui e stampa il risultato in console

console.log(goodGenerator(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.