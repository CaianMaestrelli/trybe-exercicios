let n = 7;
let meio = (n + 1) / 2;
let controleEsquerda = meio;
let controleDireita = meio;
let simbolo = '*';

for (let linha = 1; linha <= meio; linha += 1){
    let linhaSaida = " ";
    for (let coluna = 1; coluna <= n; coluna += 1){
        if (coluna == controleEsquerda || coluna == controleDireita || linha == meio){
            linhaSaida += simbolo;
        } else {
            linhaSaida += ' ';
        }
    }
    controleEsquerda -= 1;
    controleDireita += 1;

    console.log(linhaSaida)
}