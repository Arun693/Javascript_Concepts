//Prototype and proto chain basis:

//Example:1
const personProto = {
    greet () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personProto);

const user = new Person('John');
user.greet();

Person.prototype.greet = function(){
    console.log('override');
}

const user2 = new Person('Thomas');
user2.greet();
