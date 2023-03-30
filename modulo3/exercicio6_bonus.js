let n = 5;
let simbolo = '*';
let addLinha = ' ';
let addLinhaPosition = n - 1;

for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1){
    for (let colunaIndex = 0; colunaIndex < n; colunaIndex += 1){
        if (colunaIndex < addLinhaPosition){
            addLinha = addLinha + ' '; 
        }else {
            addLinha = addLinha + simbolo;
        }
    }
    console.log(addLinha);
    addLinha = ' ';
    addLinhaPosition -= 1;
};