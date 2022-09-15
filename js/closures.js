//Q : Understand closures with examples:

//Example : counter :

function counterProvider() {
    var count = 0;
    this.increaseCount = function() {
        count ++;
        console.log(count);
    }
   this.decreaseCount = function() {
        count --;
        console.log(count);
    }
}


let counter1 = new counterProvider();
counter1.increaseCount();
counter1.decreaseCount();