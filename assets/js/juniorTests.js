// 1. Invertir un string
const array = 'pato';
const array2 = array.split('').reverse().join('')
console.log(array2)

// 2. Cuantas veces se repite un caracter

const texts = 'askdjhfaskjdfhasiduasdljfasdkjfhDFKjhSDiofDL';
const char = 'a';
let counter = 0;

// solucion 1
/* for (const text of texts) {
    if(text === char)
    counter++
}
console.log(counter); */

// solucion 2
/* const texts2 = texts.split('');
texts2.forEach(str => {
	if (str === char) {
        counter++
	}
});
console.log(counter); */

// solucion 3
const texts2 = texts.split('');
texts2.filter(str => str === char && counter++ );
console.log(`The number of equal chars is ${counter}`);

// 3.distancia de hamming
const string1 = 'carrosaz'
const string2 = 'caraotas'

let distance  = 0

for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
        distance++
    }
}
console.log(`The number of unequal distance is ${distance}`);

// 4. Contador de palabras
const words = '            hello my name is Derwin       ';
const result  = words.trim().split(' ');
const wordsCounter  = result.length;

console.log(`The number of words is ${wordsCounter}`);

// 5. Contador de numeros
const randomStr = 'aas2d33df332mmasd98asd11';
const randomStr2 = randomStr.split('')
let contador = 0

randomStr2.filter(str => !isNaN(str) && contador++)
console.log(`randomStr contain ${contador} numbers`);