

/*
function solution(number){

    if(number < 0) {
        return 0;
    }

    let sum = 0;
    for(let i = 1; i < number; i++) {
        if(i % 3 === 0 || i % 5 ===  0) {
            sum += i
        }
    }
    return sum
}

 */
/*
var hanoi = function(disks) {

let minSteps = 2;

    minSteps= 2**disks - 1
return minSteps;
};
 */
/*
function findNb(m) {
    let n = 1;
    let sum = 0;

    while (sum < m) {       //сума не має перевищувати об'єм
        sum += n * n * n;   //сума кубів має дорівнювати m
        if (sum === m) {    // вона дорівнює, тоді мені потрібна кількість кубів за умовою
            return n;
        }
        n++;
    }

    return -1;
}
 */
/*

function isPrime(num) {

    if (num <= 1) {
        return false;
    }

    // Перевірка, чи є число простим
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

 */
/*
function highAndLow(numbers){
  let a = numbers.split(" ");

let minNumber = Math.min(...a);
let maxNumber = Math.max(...a);
  return maxNumber + " " +  minNumber;
  }
 */
/*
function descendingOrder(n){
  let str  = n.toString();

let arr = str.split('');

 arr.sort();
 arr.reverse();

let result  = arr.join('');

return parseInt(result,10);
}
 */

/*

 */