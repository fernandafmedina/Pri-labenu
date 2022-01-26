const Joana = {
    nome: "Joana",
    idade: "16",
    animal: "Cachorro"
  
  }
  
  console.log (`O nome da pessoa é ${Joana.nome}, ela tem ${Joana.idade} anos e gosta muito de ${Joana.animal}`)

  const Rafael ={
      ...Joana,
      nome: "Rafael",
  }


  console.log (`O nome da pessoa é ${Rafael.nome}, ela tem ${Rafael.idade} anos e gosta muito de ${Rafael.animal}`)

