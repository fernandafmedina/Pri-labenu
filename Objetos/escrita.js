const fulano = {
    nome: "Gabriel",
    apelidos: ["Biel", "Gabs", "Sabrinoca"]
}

function imprimeMensagem (objeto) {
       console.log (`"Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}"`)

}

imprimeMensagem(fulano)

const fulano2 = {
    ...fulano,
    apelidos: ["Gabi", "Neném", "Vinhado"]
}

imprimeMensagem(fulano2)

const pessoa1 ={
    nome: "Fernanda",
    idade: "26",
    profissao:"Estudante" ,

}

const pessoa2 ={
    nome: "Edgar",
    idade: "27",
    profissao:"Engenheiro" ,
    
}

function retornaArray (objeto){
    const array = [objeto.nome, objeto.idade, objeto.profissao]
    return array 
}

console.log(retornaArray(pessoa1))
console.log(retornaArray(pessoa2))
 //-------------------------------------------

let carrinho = []

const fruta1 = {
    nome: "Acerola",
    disponibilidade: true, 
}

const fruta2 = {
    nome: "Maracujá",
    disponibilidade: true, 
}

const fruta3 = {
    nome: "Carambola",
    disponibilidade: true, 
}

function colocaNoCarrinho (objeto1,objeto2,objeto3){
    carrinho.push(objeto1.nome)
    carrinho.push(objeto2.nome)
    carrinho.push(objeto3.nome)
    return carrinho
}
console.log(colocaNoCarrinho(fruta1,fruta2,fruta3))

function verificaDisponibilidade (fruta){
   const disponivel = {
       ...fruta,
       disponibilidade: !true
   }
   return disponivel
}

console.log(verificaDisponibilidade(fruta3) )

// DUVIDA, EU SÓ CONSEGUI FAZER DO JEITO ACIMA PARA QUE FUNCIONASSE, MAS NO EXERCICIO PEDE PARA CHAMAR A CONST DO CARRINHO QUANDO FAÇO ISSO
// FICA EM BRANCO O CONSOLE, ABAIXO ESTÁ A FORMA QUE TENTEI PARA CHAMAR O CARRINHO

// function colocanoCarrinho (objeto1,objeto2,objeto3){
//     carrinho =carrinho.push(objeto1.nome)
//     carrinho = carrinho.push(objeto2.nome)
//     carrinho = carrinho.push(objeto3.nome)
// }
// console.log(carrinho)

// DESAFIO 

function perguntaInfos (){
   const name = prompt ("Olá qual seu nome?")
   const work = prompt ("E qual sua profissão?")
   const age = prompt ("Quantos anos você tem?")
   const saudacao = {
       nome : name, 
       profissao: work, 
       idade: age,
   }
   return saudacao 
}

//console.log (perguntaInfos())

const filme1 = {
    lancamento: 1971,
    nome: "Laranja Mecânica"
}
const filme2 = {
    lancamento: "2014",
    nome: "Interestelar"
}

function confereFilme (obj1,obj2){
    const lancaAntes = obj1.lancamento < obj2.lancamento
    const lancaJunto = obj1.lancamento === obj2.lancamento
    console.log(` O primeiro filme foi lançado antes do segundo? ${lancaAntes}` )
    console.log (`O primeiro filme foi lançado no mesmo ano do segundo? ${lancaJunto}`)
}
console.log ( `O primeiro filme é: ${filme1.nome}, o segundo filme é: ${filme2.nome}`)
confereFilme(filme1, filme2)