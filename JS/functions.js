//function anonymous
//function expressions
                                        
/*                                        
const sum = function(number1, number2) {//parameters
    total= number1+number2
    return total
}
sum(5,6)//arguments
let number1=357
let number2=467
console.log(`a soma é ${sum(number1, number2)}`)*/

/*
let phone="Samsung S20"
let charger="Turbo Charger"
const result= 'Resultado: ' + phone + ' está carregando com ' + charger + '!'


function chargePhone (phone,charger,result) {

    console.log("Bem vindo ao Tutorial!")
    console.log("Vamos aprender a carregar um celular em 3 passos! Está preparado ?")
    console.log("1 - Pegue seu celular e carregador.")
    console.log("2 - Encontre a tomada mais próxima, dê preferência a 220v.")
    console.log("3 - Insira o carregador na tomada e o conector no celular.")
    console.log(result)
}

chargePhone(phone,charger,result)
phone="iPhone 12 Pro Max"
charger="San Francisco"
Throw()*/
//Construct Function
/*
function Deposit(value){

    this.payment= value

}
const payment = new Deposit("You received $ 590,00")
console.log(payment)
*/
//type conversion (typecasting) quando nós fazemos de forma explicita uma manipulação de atributos
//type coersion=javascript fará forçadamente a manipulação de alguma maneira.
//.length=confere quantos caractéres(String) ou dígitos(Number) existem.
//.includes=Verifica na String se existe o atribudo inserido.
//.push=Adicionar um item no fim do Array
//.unShift=Adicionar um item no começo do Array
//.toFixed=Define um número de casas decimais.
//.pop=Remove item do fim do Array
//.shift=Remove item do começo do Array
//.slice=Pega alguns itens do Array e retorna como função PS: Não altera o Array    
//.replace=Troca caractér ou símbolo por outro
//toUpperCase=Transforma minúsculas em maiúsculas
//toLowerCase=Transforma maiúscula em minúscula
//.split=Divide String em subString e retorna em Array
//.join=Adiciona todos elementos do Array em uma String, com separador específico
/*
let phrase ="o i"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phrase)
console.log(myArray)
console.log (phraseWithUnderscore)*/
//Declarando array com construtor
//Transformando uma cadeia de caracteres em elementos de um array. let word = "Manipulação" console.log(Array.from(word))
let myArray = ('a','b','c','d','e','f')
let myArray = new Array('bola', 'luva', 'uniforme', 'chuteira')