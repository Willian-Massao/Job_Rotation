let palindromo = "subinoonibus"; // subi no onibus
let frase = "me contrata";
function invert(frase){
    let fraseInvertida = "";
    for(let i = frase.length - 1; i >= 0; i--){
        fraseInvertida += frase[i];
    }
    return fraseInvertida;
}

console.log(invert(frase));
console.log(invert(palindromo));