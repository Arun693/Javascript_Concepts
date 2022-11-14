
//class approach of creating object blueprint
class testClass {
    constructor(height, length) {
      this.height = height;
      this.length = length;
    }
    
    getheight(){
      return this.height;
    }
  }
  
  let test = new testClass(10,20);
  
  console.log(test.getheight())
  
//class approach of creating object blueprint
const arrowFn = function(height, length) {
    this.height = height;
    this.length = length;
    this.getheight = function(){
        return this.height;
    }
}

let test2 = new arrowFn(100,200);
console.log(test2.getheight());

let num = 1;
let num2 = num;
num = 3;
console.log(num, num2);

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result = words.filter(word => word.length > 6);
words[3] = ['exuberanttttt'];
console.log(result);