/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/* function firstChar (names){
    const newArray = []
    for (let i=0; i<names.length;i++){               //with normal sintax function
        newArray.push(names[i].charAt(0))
    }
    return newArray
} */

const firstChar = (names) =>{
     const newArray = []
    for (let i=0; i<names.length;i++){             //with sintax arrow function
        newArray.push(names[i].charAt(0))
    }
    return newArray
} 
// Invoca la funzione qui e stampa il risultato in console
console.log(firstChar (names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

