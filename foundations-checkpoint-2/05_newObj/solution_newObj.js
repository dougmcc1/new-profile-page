function newObj(obj) { //accept an object

    obj.prototype=Object.create(newObj.prototype);
    return obj;

/*
from readme

function Hello() {
  this.hello = "hello";
}

Hello.prototype.sayHello = "Hello";

INPUT: var returnValue = newObj(Hello);

OUTPUT:
// returnValue === {};
// returnValue's internal prototype aka .\__proto__ is: {sayHello: "Hello"}

*/
}

