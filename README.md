// SCHEMA PER L'ESERCIZIO

function getArrayOfRandomNumberBetween (minRange, maxRange, number) {
    // dichiaro una variabile bombsArray vuota che memorizzerà i numeri generati casualmente 

    // ciclo while che si ripeterà finche la lunghezza dell'array non raggiunge il valore di number

    // creo una variabile n alla quale assegnero il valore di un numero intero casuale compreso tra 1 e 100 (gioco facile) usando la funzione getRandomIntInclusive

    // eseguo console.log (bombsArray.includes(n)): stampo su console se il numero n è già presente nell'array, in questo modo verifico se un numero generato casualmente è duplice

    // dichiarazione condizionale if
        // - SE n non è già presente nell'array
            // push n nell'array bombe
        // - ALTRIMENTI     
            // non devo pushare il numero
    // return array di numeri generati
}

// FUNZIONE PER GENERARE NUMERO RANDOM

// function getRandomIntInclusive(min, max) {
// 	min = Math.ceil(min)
// 	max = Math.floor(max)
// 	return Math.floor(Math.random() * (max - min + 1) + min) 
    
//     // The maximum is inclusive and the minimum is inclusive
// }


// DENTRO EVENT CLICK per ogni CELLS

// prendo il numero della casella

			// - SE il numero della casella è presente nell'array di bombe
			// - aggiungialo la classe bg-red
			// - game over
			// - ALTRIMENTI
			// - incrementiamo il punteggio
			// - aggiungo la classe bg-blue
			// - SE utente ha vinto
			// - stampiamo hai vinto con il punteggio