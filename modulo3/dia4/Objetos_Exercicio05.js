let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim'
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for (let key in info){
    if (key === 'recorrente' && info[key] === 'sim' && info2[key] === 'sim'){
        console.log('Ambos recorrentes');
    }else {
        console.log(info[key] + ' e ' + info2[key]);
    }
  }