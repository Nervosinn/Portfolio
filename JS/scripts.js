//string
console.log("Lucas é uma String");
//numbers 45 inteiro, 12.5 real ou float, 
console.log(45 + 12.5);
//object
console.log({
    nome: "Lucas",
    idade: 24,
    estudar: function(){
        console.log('anda rapaz, o sucesso não cai na sua porta');
    }
})
//array
console.log(["Nescau","Erva","Carne","Batata Frita"]);
/*var é global e local,
const e let são locais,
const=não pode receber alteração durante o código e vai ser sempre o valor inicial, 
typeof=envia o tipo de dado da váriavel para o devtools
hoisting= eleva variável de um bloco e atualiza valor do mesmo*/
var pokemon="Cyndaquil";
console.log(pokemon);
let pokeball="GreatBall";
console.log(pokeball);
//declaration ou declaração
var age
//assignment ou atribuição de valores
age = 24
//agrupamento de declarações
let name, type, isHuman

name="Lucas"
type="Strength"
isHuman=true
/*múltiplos argumentos na função
console.log(name, age, type, isHuman);*/
/*concatenando valores
console.log('o ' + name + ' tem ' + age + ' anos ');*/
//interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos`);


