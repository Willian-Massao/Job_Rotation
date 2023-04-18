const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let fibonacci = [0, 1], i = 0;
let MaxNum = 10;
let soma = 0;

while(i < MaxNum){
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
    i++;
}

readline.question('Digite um numero: ', escolha => {
    if (fibonacci.includes(parseInt(escolha))) {
        console.log(`O número ${escolha} está nos primeiros 50 numeros na sequencia de fibonacci.`);
      } else {
        console.log(`O número ${escolha} não está nos primeiros 50 numeros na sequencia de fibonacci.`);
      }
    readline.close();
});