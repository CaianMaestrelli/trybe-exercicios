let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function novoTurno(obj, key, value) {
    obj[key] = value;
}

novoTurno(lesson2, 'turno', 'noite');
console.log(lesson2);

function listaKeys(obj) {
    return Object.key(obj);
}

console.log(listaKeys(lesson1));

function tamanhoObj(obj) {
    return Object.key(obj).length;
}

console.log(tamanhoObj(lesson1));

function retornoValues(obj) {
    return Object.values(obj);
}
console.log(retornoValues(lesson1));

let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
});

console.log(allLessons);

function getNumberOfStudents(lessons) {
    let totalEstudantes = 0;  
    let keys = Object.keys(lessons);

    for (let index = 0; index < keys.length; index += 1) {
        totalEstudantes += lessons[keys[index]].numeroEstudantes;
    }
    return totalEstudantes;
}
console.log(getNumberOfStudents(allLessons));


function valorKeyNumber(obj, number) {
    return Object.values(obj)[number];
}
console.log(valorKeyNumber(lesson1, 2));


function verifyPair(obj, key, value) {
    let entradas = Object.entries(obj);
    let valor = false;
    for (let index in entradas) {
        if (entradas[index][0] === key && entradas[index][1] === value) valor = true;
    }
    return valor;
}
console.log(verifyPair(lesson2, 'professor', 'Carlos'));

