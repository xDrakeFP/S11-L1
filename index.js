// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi principali di Typescript sono : -string, -boolean, -number, -null, -undefined -any
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var firstName = "Federico";
var age = 26;
var isStudyingTS = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var sayHello = function (name, prefix) {
    return (prefix || "Ciao") + " " + name;
};
console.log(sayHello("Federico"));
console.log(sayHello("Louis", "Buonasera"));
// 4) Specifica il tipo di ritorno della seguente funzionetc:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoIva = function (input) {
    var iva = input * 0.22;
    return input + iva;
};
console.log(prezzoIva(100));
console.log(prezzoIva(1965));
console.log(prezzoIva(33.2));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatLength = function (s1, s2) {
    return s1.length + s2.length;
};
console.log("Mario", "Rossi", concatLength("Mario", "Rossi"));
// 7) Cos'è un Type Union e come si scrive?
// Un Type Union permette ad un valore ai avere più di un tipo
var number1;
number1 = "Ciao";
number1 = 324;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var var1;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla;
var studenti = [
    { nome: "Anna", voto: 28 },
    { nome: "Luca", voto: 30 },
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var miaAuto = {
    marca: "Ford",
    modello: "Fiesta",
    porte: 5,
    cc: 1000,
};
console.log(miaAuto);
var dati = {
    primo: "Punti",
    secondo: 42,
};
var dati2 = {
    primo: 4123,
    secondo: 42,
};
var rispostaUtente = {
    success: true,
    data: { nome: "Marco", eta: 25 },
};
