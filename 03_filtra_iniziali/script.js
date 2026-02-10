/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter ="A"

// Dichiara la funzione qui.
/* function onlyFirstChar (names){
    const newArray =[]
    for (let i = 0; i < names.length; i++) {                  //with normal sintax function
        const char = names[i];
        if (names[i].charAt(0)===letter){
            newArray.push(names[i])
        } 
    }
    return newArray
} */
const onlyFirstChar = (names)=>{
    const newArray =[]
    for (let i = 0; i < names.length; i++) {
        const char = names[i];                                //with sintax arrow function
        if (names[i].charAt(0)===letter){
            newArray.push(names[i])
        } 
    }
    return newArray
}
// Invoca la funzione qui e stampa il risultato in console
console.log(onlyFirstChar(names));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
