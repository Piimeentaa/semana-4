//Array para Object 
//Escreva uma função que receba um array 2d e retorne um objeto com cada par de elementos do array como um par chave-valor.
const arr = [['fruta','maçã'],['cor','amarelo'],['animal','cachorro']]
function exercicio(arr){
const obj = {}
for(let i of arr){
    obj[i[0]] = i[1]
    // console.log(index[1]);
    }
    return obj;
}
// console.log(exercicio(arr));

Object.entries(arr);
console.log(arr);