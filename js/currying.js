//Basics of javascript currying

//1. Currying using bind method
let multiply = function(x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3); //output : 6
multiplyByTwo(5); //output : 10

let multiplyByThree = multiply.bind(this, 3);

multiplyByThree(6); //output : 18
multiplyByThree(9); //output : 27

//currying using closures

let closureMultiply = function(x) {
    return function(y) {
        console.log(x*y);
    }
}

let multiplyBy2 = closureMultiply(2);
multiplyBy2(3);  //output : 6
multiplyBy2(5);  //output : 10

let multiplyBy3 = closureMultiply(3);
multiplyBy3(6); //output : 18
multiplyBy3(9); //output : 27