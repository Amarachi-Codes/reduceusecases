// reduce to a single value
const numbers = [1, 2, 3, 4, 5];

//conventional
function sum(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum+=numbers[i];
    }return sum
}
// console.log(sum(numbers));

//reduce function

const sumUp = (numbers)=>{
    return numbers.reduce((acc, curValue)=> acc + curValue, 0)
}
// console.log(sumUp(numbers));

//sum the values in an object array

let obj = [{ n: 5 }, { n: 9 }, { n: 13 }, { n: 25 }, { n: 40 }];

const sumObj = (obj)=>{
    return obj.reduce((acc,curValue)=> acc + curValue.n, 0)
}
// console.log(sumObj(obj));

//flattering an arry of arrays

let mulNumbers = [
    [3, 5],
    [1, 7],
    [12, 9],
  ]; //=> [3,5,1,7,12,9]

 const oneArr = (mulNumbers)=>mulNumbers.reduce((acc, curValue)=>{
        return acc.concat(curValue)
 },[])

 console.log(oneArr(mulNumbers));

  //remove duplicate;

const arr = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 5, 1, 4];

const removeDuplicate = arr.reduce((acc, curValue)=>{
    if( acc.indexOf(curValue) === -1){
        acc.push(curValue)
    }return acc;
}, [])
console.log(removeDuplicate);