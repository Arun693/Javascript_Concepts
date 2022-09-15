//Basics of call/apply/bind.


//1. Create your own polyfil for bind method.
let nameObj  = {
    name : 'Basics of JS'
}

function helloWorld() {
    console.log(this.name);
}

Function.prototype.customBind = function(obj) {
    let context = this;
    return function() {
        context.apply(obj);
    }
}

let callFn = helloWorld.customBind(nameObj);
callFn(); // console output : Basics of JS

//2. call method

helloWorld.call(nameObj); //console output : Basics of JS

//3. apply method

let userName = {
    firstName : 'Sachin',
    lastName: 'Tendulkar'
}

function printUserInfo(city, sports) {
    console.log('Hi I am '+this.firstName+' '+this.lastName+' from '+city+'.I am a '+sports+' player.')
}

printUserInfo.apply(userName,['Mumbai', 'cricket']);
//console output : Hi I am Sachin Tendulkar from Mumbai.I am a cricket player.