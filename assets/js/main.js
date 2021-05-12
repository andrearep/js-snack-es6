/* Snack 1:
Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
- nome
- peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const bici = [

    {
        nome: "Graziella",
        peso: 15
    },

    {
        nome: "Corsa",
        peso: 5
    },

    {
        nome: "mountain-bike",
        peso: 35
    },

    {
        nome: "corsa ultra light",
        peso: 2
    },

    {
        nome: "elettrica",
        peso: 30
    },
]
let { peso: pesoBiciLeggera, nome: nomeBiciLeggera } = bici[0];

console.log(pesoBiciLeggera);


for (let i = 1; i < bici.length; i++) {
    if (pesoBiciLeggera > bici[i].peso) {
        nomeBiciLeggera = bici[i].nome;
        pesoBiciLeggera = bici[i].peso;
    }
}

console.log(`La bici più leggera è la ${nomeBiciLeggera} con un po di soli ${pesoBiciLeggera} Kg`);



/* Snack2:
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

const squadre = [

    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Cagliari",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "Torino",
        puntiFatti: 0,
        falliSubiti: 0
    }

];

function randomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
let squadreFalli = [];
for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomNumber(1, 100);
    squadre[i].falliSubiti = randomNumber(1, 100);

    let { nome: nomeSquadra, falliSubiti: falli } = squadre[i];
    let temp = [nomeSquadra, falli];

    squadreFalli.push(temp);
    console.log(squadreFalli);
}

/* Snack 3:
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
 */

//gunzioni per trasformare un array in una stringa e viceversa
function stringToArray(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        array.push(string[i])
        console.log(array);
    } return array;
}

function arrayToString(array) {
    string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    } return string;

}

//funzione con filter

function elementselector(string, a, b) {
    //controllo dei valori inseriti nella funzione
    if (a > b || b > string, length || isNaN(a) || isNaN(b) || !isNaN(string)) {
        return false;
    } else {
        arrayReal = stringToArray(string);
        let arraySelector = arrayReal.filter((letter, index) => {
            if (index > a && index < b) {
                return true;
            } else {
                return false;
            }
        });
        arraySelector = arrayToString(arraySelector)
        return arraySelector;
    }
}


//funzione con forEach
/* function elementselector(stringa, a, b) {

    //controllo dei valori inseriti nella funzione
    if (a > b || b > stringa, length || isNaN(a) || isNaN(b) || !isNaN(stringa)) {
        return false;
    } else {
        let arrayReal = stringToArray(stringa);
        arrayReal.forEach((element, index) => {

            if (index > a && index < b) {
                arraySelector += element;
            }
        });
    } return arraySelector;

}*/
let arrayProva = elementselector("ciaociao", 2, 6);
if (arrayProva) {
    console.log(`la parte di array selezionato è "${arrayProva}"`);
} else {
    alert("errore dati inseriti nella funzione sbagliati")
}
