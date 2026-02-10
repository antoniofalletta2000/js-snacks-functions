/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter ="A"

// Dichiara la funzione qui.
/* function onlyFirstChar (arr){
    const newArray =[]
    for (let i = 0; i < arr.length; i++) {                  //with normal sintax function
        const char = names[i];
        if (arr[i].charAt(0)===letter){
            newArray.push(arr[i])
        } 
    }
    return newArray
} */
const onlyFirstChar = (arr)=>{
    const newArray =[]
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];                                //with sintax arrow function
        if (arr[i].charAt(0)===letter){
            newArray.push(arr[i])
        } 
    }
    return newArray
}
// Invoca la funzione qui e stampa il risultato in console
console.log(onlyFirstChar(names));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
