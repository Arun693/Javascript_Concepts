//Q : Given a 32-bit signed integer, reverse digits of an integer.
//Input: 123 Output: 321

let input = 123;
let inputArray = input.toString().split('');
console.log(inputArray);
let output = [];
for (let i = inputArray.length-1;i>=0;i--) {
    output.push(inputArray[i]);
}
let outputInt;
output.map((a)=> {
    if (outputInt) outputInt = outputInt + a.toString();
    else outputInt = a.toString();
})
console.log(parseInt(outputInt,10));