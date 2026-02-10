/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/* function firstChar (arr){
    const newArray = []
    for (let i=0; i<arr.length;i++){               //with normal sintax function
        newArray.push(arr[i].charAt(0))
    }
    return newArray
} */

const firstChar = (arr) =>{
     const newArray = []
    for (let i=0; i<arr.length;i++){             //with sintax arrow function
        newArray.push(arr[i].charAt(0))
    }
    return newArray
} 
// Invoca la funzione qui e stampa il risultato in console
console.log(firstChar (names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

