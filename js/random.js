//Problem 1 : Polifill for native array filter method.
//filter method : 1. filter given array with a function return true. 2. optional this context passing.

Array.prototype.filterr = function(fn, thisC) {
    if (!this || !this.length) throw TypeError;
    if (typeof fn !== "function") throw TypeError;
    let result = [];
    for ( let i = 0; i<this.length;i++) {
        let item = this[i];
        if (fn.call(thisC, item)) {
            result.push(item);
        }
    }
    return result;
}

//Polyfill for bind:

// Function.prototype.bindd = function(context) {
//     this.apply(context);
//     return this;
// }

//Problem 2 : Polifill for native bind function :
// https://javascript.plainenglish.io/how-to-create-a-polyfill-3c924fa11417

Function.prototype.bindd = function(...args) {
    let context = this, restParam = args.splice(1);
  return function(...arg2) {
    context.apply(args[0], [...restParam, ...arg2]);
  }
}

const person = {
    name: "Levi",
    city: "Underground"
  }
  
  let printFullInformation = function(regiment) {
    console.log(this.name + " is from " + this.city + " assigned to " + regiment + " regiment");
  }

  let option1 = printFullInformation.bindd(person)
  option1("Scout");

  let option2 = printFullInformation.bindd(person, "Scout")
  option2();
