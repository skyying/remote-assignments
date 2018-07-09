// tasks: 
// try using at least two ways to create a matching object as a parameter of calculate function.


function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}



// 4 ways to create a valid object

// 1. add property by "." dot
let dataTypeA = {};
dataTypeA.n1 = 5;
dataTypeA.n2 = 5;
dataTypeA.op = "+";
console.log("First way", calculate(dataTypeA));



// 2. add property by []
var dataTypeB = {};
dataTypeB["n1"] = 5;
dataTypeB["n2"] = 5;
dataTypeB["op"] = "+";
console.log("Second way", calculate(dataTypeB));



// 3. create a object literal
var dataTypeC = {
    n1: 5,
    n2: 5,
    op: "+"
}
console.log("Third way", calculate(dataTypeC));



// 4. Create a object with define property
// define a function to add property
const defineProp = (obj, key, value) => {
    var config = {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
    };

    Object.defineProperty(obj, key, config);
};

let dataTypeD = Object.create( Object.prototype );
defineProp(dataTypeD, "n1", 5);
defineProp(dataTypeD, "n2", 5);
defineProp(dataTypeD, "op", "+");
console.log("Fourth way", calculate(dataTypeD));


