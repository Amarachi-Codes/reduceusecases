// reduce to a single value
const numbers = [1, 2, 3, 4, 5];

//conventional
function sum(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        sum+=numbers[i];
    }return sum
}console.log(sum(numbers));


//sum the values in an object array

let obj = [{ n: 5 }, { n: 9 }, { n: 13 }, { n: 25 }, { n: 40 }];

//flattering an arry of arrays

let mulNumbers = [
    [3, 5],
    [1, 7],
    [12, 9],
  ]; //=> [3,5,1,7,12,9]


  //counting an instances in an object

let clubs = [
    "Chelsea",
    "Arsenal",
    "Chelsea",
    "Totteham",
    "Inter",
    "Inter",
    "Chelsea",
  ];

  //remove duplicate;

const arr = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 5, 1, 4];