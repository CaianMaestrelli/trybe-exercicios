let divisores = 1;
let numeroConferido = 31;

for (let number = 2; number <= numeroConferido; number += 1){
    if (numeroConferido % number === 0) divisores += 1;
}

if (divisores === 2) {console.log(numeroConferido + ' e primo');
}else {console.log(numeroConferido + ' nao e primo');
}