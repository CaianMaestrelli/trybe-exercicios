//Passo 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
    console.log (numbers[index]);
}

//Passo 2

let resultado = 0;
for (let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];
}
console.log(resultado)

//Passo 3

for (let index = 0; index < numbers.length; index += 1) {
}
let mediaAritimetica = resultado / numbers.length;

//Passo 4

if (mediaAritimetica > 20) {
    console.log('Valor maior que 20')
}
else if (mediaAritimetica < 20){
    console.log('Valor menor que 20')
}else {
    console.log('Valor igual a 20')
}
//Passo 5

let maiorNumero = numbers[0];
for (let index = 1; index< numbers.length; index += 1){
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}
console.log(maiorNumero);

//Passo 6

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        resultado += 1;
    }
}

if (resultado === 0) {
    console.log('nenhum valor impar encontrado');
} else {
    console.log(resultado)
}