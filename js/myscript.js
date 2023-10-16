console.log('CAMPOMINATO')

// richiamo elemento btn play dal DOM
const btnGiocaElement = document.querySelector('.btn-play');
console.log(btnGiocaElement);

// richiamo elemento grid dal DOM 
const gridElement = document.querySelector('.grid');
console.log(gridElement);

// SCELTA DI GIOCO "FACILE" 100 celle

btnGiocaElement.addEventListener('click', function () {
    console.log('clicca', btnGiocaElement)

    // richiamo elemento select dal DOM con il valore 
    let selectDifficultyElement = document.getElementById('game-difficulty').value;
    console.log(selectDifficultyElement);

    if (selectDifficultyElement == 0) {
        // assegno stringa vuota in modo tale che ad ogni click non si generano griglie multiple
        gridElement.innerHTML = '';

        // for per creare le 100 celle ed assegnarli il numero statico
        for (let i = 0; i < 100; i++) {
            const indexCellNumber = i + 1;
            console.log(indexCellNumber);

            const htmlCell = document.createElement('div');
            console.log(htmlCell);

            gridElement.appendChild(htmlCell);
            htmlCell.classList.add('grid-cell');
        }

        // recupero le cell create con js dal DOM => diventa un array
        const cellDOMElement = document.querySelectorAll('.grid-cell');
        console.log(cellDOMElement);

        // ciclo for per assegnare ad ogni cella l'event listener click (bg-lightblue)
        for (let k = 0; k < cellDOMElement.length; k++) {
            const currentCellElement = cellDOMElement[k];
            console.log(currentCellElement);


            // aggiungo evento click ad ogni cell
            currentCellElement.addEventListener('click', function () {

                currentCellElement.classList.add('bg-blue');
                console.log('ho cliccato sulla casella numero:', k + 1);
            })
        }
    }

    // SCELTA DI GIOCO "INTERMEDIO" 81 celle

    else if (selectDifficultyElement == 1) {

        // assegno stringa vuota in modo tale che ad ogni click non si generano griglie multiple
        gridElement.innerHTML = '';

        // tolgo la classe none a grid element
        // gridElement.classList.remove('d-none');

        // for per creare le 100 celle ed assegnarli il numero statico
        for (let i = 0; i < 81; i++) {
            const indexCellNumber = i + 1;
            console.log(indexCellNumber);

            const htmlCell = document.createElement('div');
            console.log(htmlCell);

            gridElement.appendChild(htmlCell);
            htmlCell.classList.add('grid-cell-81');
        }

        // recupero le cell create con js dal DOM => diventa un array
        const cellDOMElement = document.querySelectorAll('.grid-cell-81');
        console.log(cellDOMElement);

        // ciclo for per assegnare ad ogni cella l'event listener click (bg-lightblue)
        for (let k = 0; k < cellDOMElement.length; k++) {
            const currentCellElement = cellDOMElement[k];
            console.log(currentCellElement);


            // aggiungo evento click ad ogni cell
            currentCellElement.addEventListener('click', function () {

                currentCellElement.classList.add('bg-blue');
                console.log('ho cliccato sulla casella numero:', k + 1);
            })
        }

    // SCELTA DI GIOCO "DIFFICILE" 49 celle

    } else if (selectDifficultyElement == 2) {

        // assegno stringa vuota in modo tale che ad ogni click non si generano griglie multiple
        gridElement.innerHTML = '';

        // tolgo la classe none a grid element
        // gridElement.classList.remove('d-none');

        // for per creare le 100 celle ed assegnarli il numero statico
        for (let i = 0; i < 49; i++) {
            const indexCellNumber = i + 1;
            console.log(indexCellNumber);

            const htmlCell = document.createElement('div');
            console.log(htmlCell);

            gridElement.appendChild(htmlCell);
            htmlCell.classList.add('grid-cell-49');
        }

        // recupero le cell create con js dal DOM => diventa un array
        const cellDOMElement = document.querySelectorAll('.grid-cell-49');
        console.log(cellDOMElement);

        // ciclo for per assegnare ad ogni cella l'event listener click (bg-lightblue)
        for (let k = 0; k < cellDOMElement.length; k++) {
            const currentCellElement = cellDOMElement[k];
            console.log(currentCellElement);


            // aggiungo evento click ad ogni cell
            currentCellElement.addEventListener('click', function () {

                currentCellElement.classList.add('bg-blue');
                console.log('ho cliccato sulla casella numero:', k + 1);
            })
        }
    }
})

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














