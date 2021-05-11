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
