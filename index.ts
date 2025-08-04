// 1) Quali sono i tipi primitivi principali in TypeScript?

// I tipi primitivi principali di Typescript sono : -string, -boolean, -number, -null, -undefined -any

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const firstName: string = "Federico";
const age: number = 26;
const isStudyingTS: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

const sayHello = (name: string, prefix?: string): string => {
    return (prefix || "Ciao") + " " + name;
};

console.log(sayHello("Federico"));
console.log(sayHello("Louis", "Buonasera"));

// 4) Specifica il tipo di ritorno della seguente funzionetc:
// const sum = (a: number, b: number) => { return a + b }

const sum = (a: number, b: number): number => {
    return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const prezzoIva = (input: number): number => {
    const iva = input * 0.22;
    return input + iva;
};

console.log(prezzoIva(100));
console.log(prezzoIva(1965));
console.log(prezzoIva(33.2));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatLength = (s1: string, s2: string): number => {
    return s1.length + s2.length;
};

console.log("Mario", "Rossi", concatLength("Mario", "Rossi"));

// 7) Cos'è un Type Union e come si scrive?
// Un Type Union permette ad un valore ai avere più di un tipo

let number1: string | number;

number1 = "Ciao";
number1 = 324;

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let var1: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type dayOfTheWeek = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

let tupla: [string, string, string, number, number];

// 12) Qual è la differenza tra type e interface?

// In TypeScript, interface e type servono entrambi a definire strutture di dati. Di solito si usa interface per descrivere oggetti e
// strutture che potrebbero essere estese, come modelli di dati o classi. type invece è più flessibile e si usa
// quando servono unioni, intersezioni o tipi più complessi. Per oggetti semplici vanno bene entrambi, ma interface è spesso la scelta più leggibile e organizzata.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Persona {
    firstname: string;
    lastname: string;
    age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface Utente {
    email: string;
    telefono?: string;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Studente {
    nome: string;
    voto: number;
}

const studenti: Studente[] = [
    { nome: "Anna", voto: 28 },
    { nome: "Luca", voto: 30 },
];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
    marca: string;
    modello: string;
}

interface Auto extends Veicolo {
    porte: number;
    cc: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const miaAuto: Auto = {
    marca: "Ford",
    modello: "Fiesta",
    porte: 5,
    cc: 1000,
};

console.log(miaAuto);

// 18) Cosa sono i Generics in TypeScript?

// I Generics sono una dei tipi che vengono passati come argomento per le interfaccie

// 19) È possibile avere più tipi generici in un'interfaccia?

// SI!
interface Coppia<A, B> {
    primo: A;
    secondo: B;
}

const dati: Coppia<string, number> = {
    primo: "Punti",
    secondo: 42,
};
const dati2: Coppia<number, number> = {
    primo: 4123,
    secondo: 42,
};

// 20) Crea un'interfaccia generica per una risposta API.

interface ApiResponse<D> {
    success: boolean;
    data: D;
    error?: string;
}

const rispostaUtente: ApiResponse<{ nome: string; eta: number }> = {
    success: true,
    data: { nome: "Marco", eta: 25 },
};
