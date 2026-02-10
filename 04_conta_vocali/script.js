/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

// Dichiara la funzione qui.

/* function vowelsString(word) {
    let foundVowels = []
    for (i = 0; i < word.length; i++) {
        const char = word[i]
        for (j = 0; j < vowelsArray.length; j++) {                     ////with normal sintax function and with two for cicle
            const vowels = vowelsArray[j]
            if (char === vowels) {
                foundVowels.push(char)
            }
        }
    }
    if (foundVowels.length===0){
        console.log("there aren't vowels in this word");
        
    }
    return foundVowels
} */

/* function vowelsString(word) {
    let foundVowels = []
    for (const char of word) {
        for (const vowel of vowelsArray) {                              //with normal sintax function and with two for..of            
            if (char === vowel) {                                          DOCUMENTATOMI SU INTERNET HO LETTO CHE C'E' ANCHE
                foundVowels.push(char)                                      QUESTA ALTERNATIVA
            }
        }

    }
    return foundVowels
    
} */
const vowelsString = (word) => {
    let foundVowels = []
    for (i = 0; i < word.length; i++) {
        const char = word[i]
        for (j = 0; j < vowelsArray.length; j++) {                       //with sintax arrow function
            const vowels = vowelsArray[j]
            if (char === vowels) {
                foundVowels.push(char)
            }
        }
    }
    if (foundVowels.length === 0) {
        console.log("there aren't vowels in this word");

    }
    return foundVowels
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsString(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)