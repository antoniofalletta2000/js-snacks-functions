/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
const hi = "Ciao"

// Dichiara la funzione qui.
/*function concatenation (){
    const hi_name = (hi +" "+userName)       //with normal sintax function
    return hi_name
}*/
const concatenation=()=>{
    const hi_name = (hi +" "+userName)      //with sintax arrow function                       
    return hi_name
}

// Invoca la funzione qui e stampa il risultato in console
/* console.log(concatenation()); */
    console.log(concatenation());

//Risultato atteso se si passa 'Mario': // ciao Mario
/* console.log(concatenation("Mario")); */
    console.log(concatenation("Mario"));