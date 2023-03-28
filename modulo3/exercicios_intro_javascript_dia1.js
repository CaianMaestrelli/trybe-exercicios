//Exercicio 1
let a = 5;
let b = 10;

let soma = a + b;
console.log(soma)

let sub = a - b;
console.log(sub);

let div = a / b;
console.log(div);

let mult = a * b;
console.log(mult);

let rest = b % a;
console.log(rest);

//Exercicio 2
let num1 = 10;
let num2 = 20;

if (num1 > num2){
    console.log(num1)
}
else{
    console.log(num2)
}

//Exercicio 3
let num4 = 20;
let num5 = 40;
let num6 = 60;

if (num4 > num5 && num4 > num6){
    console.log(num4)
}
else if (num5 > num4 && num5 > num6){
    console.log(num5)
}
else {
    console.log(num6)
}

//Exercicio 4
if (resultado >= 0){
    console.log(true)
}
else if (resultado <=0)
    console.log(false)
else{
    console.log(zero)
}

//Exercicio 5
let lado1 = 100
let lado2 = 40
let lado3 = 40

if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
    if ((lado1 + lado2 + lado3) === 180) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
else {
    console.log("Erro - Angulo invalido")
}

//Exercicio 6
let pecaXadrez =  ;
switch (pecaXadrez) {
    case 'Peao':
        console.log('Peões se movem somente para frente, uma casa por vez.');
        break;
    
    case 'Bispo':
        console.log('mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça.');
        break;

    case 'Torre':
        console.log ('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.');
        break;

    case 'Cavalo':
        console.log ('O cavalo move-se por duas casas horizontalmente ou verticalmente.');
        break;

    case 'Rainha':
        console.log ('Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.');
        break;

    case 'Rei':
        console.log ('O rei pode se mover para qualquer casa adjacente.');
        break;
    }

//Exercicio 7

//Exercicio 8
let numA = ;
let numB = ;
let numC = ;

if (numA || numB || numC = % 0) {
    console.log(true)
}
else {
    console.log(false)
}

//Exercicio 9
let var1 =
let var2 =
let var3 =

if (var1 || var2 || var3 = %1){
    console.log (true)
}
else {
    console.log(false)
}

//Exercicio 10
let custo =
let venda =

if (custo >= 0 && venda >= 0) {
    let custoTotal = custo * 1.2;
    let lucroTotal = (venda - custo) * 1000;
    console.log(lucroTotal); 
} else {
    console.log ('Error, os valores nao podem ser negativos!');
};

//Exercicio 11
let INSS;
let IR;

let salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11;
} else {
    INSS = 570.88;
}

let salarioBase = salarioBruto - INSS;

if (salarioBase <= 1903.98) {
    IR = 0;
} else if (salarioBase <= 2826.65) {
    IR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    IR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    IR = (salarioBase * 0.225) - 636.13;
} else {
    IR = (salarioBase * 0.275) - 869.36;
};

console.log('salario:' + (salarioBase - IR));