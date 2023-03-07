/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
numeri da indovinare sono stati individuati.
*/

/* 
- Creare ciclo random con 5 numeri casuali.
- Imposto timer di 10 sec
- Dopo 10 secondi i numeri scompaiono 
- l'utente deve inserire i numeri che ha visto precedentemente
- Dopo aver inserito i 5 numeri, indicare quanti e quali numeri sono stati indovinati
*/ 


let playEl = document.getElementById('play');

let textEl = document.getElementById('text');

let showNumberEl = document.getElementById('show-number');

let btnResultEl = document.getElementById('btn-result');

let inputEL = document.getElementById('input');

let textResultEl = document.getElementById('text-result');


playEl.addEventListener('click', function() {


    // - Creare ciclo random con 5 numeri casuali.
    
    // genero array di numeri
    let arrRand = [];
    // genero numeri random
    while(arrRand.length < 5){
        let random = Math.floor(Math.random() * 10) + 1;
        if(arrRand.indexOf(random) === -1) arrRand.push(random);
    }
        showNumberEl.innerHTML = arrRand;


        
     
        
        // - Imposto timer di 10 sec
        let secondLeft = 3;
        
        // imposto intervallo di tempo
        let intervalTime = setInterval (count, 1000);
        
        console.log(intervalTime)
        
        
        
        
        
        // Dichiaro la funzione da chiamare dentro la timing function
        function count() {
            
            textEl.innerHTML = secondLeft;
            // controllo se sono passati i 10 secondi
            if (secondLeft <= 0) {
                
                //stampo in pagina finito il tempo
                textEl.innerHTML = 'Il tempo è finito, ricordi i numeri? Inseriscili qui sotto';
                
                clearInterval(intervalTime);
              
                
            }

            secondLeft--;

            if (secondLeft < 0) {
                showNumberEl.innerHTML = '';
            }
        }
             

});


let numberCorrectEl = (arrRand = inputEL); 


// - Dopo aver inserito i 5 numeri, indicare quanti e quali numeri sono stati indovinati

btnResultEl.addEventListener('click', function() {

    textResultEl.innerHTML = numberCorrectEl;
});
    






    



