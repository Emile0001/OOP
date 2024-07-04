//old School procedural programming

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + overtime * rate;
}

console.log(getWage(baseSalary, overtime, rate));

//OOP

//Object literal

let employee = {
    baseSalary2: 40000,
    overtime2: 20,
    rate2: 40,

    getWage2: function () {
        return this.baseSalary2 + this.overtime2 * this.rate2;
    },
};

console.log(employee.getWage2());

// Factory Function

function calcSum(num1, num2) {
    return {
        num1: num1,
        num2: num2,
        total: function calcTotal() {
            return this.num1 + this.num2;
        },
    };
}
const result = calcSum(1, 2);
console.log(result); // Logs the object
console.log(result.total()); // Logs the sum, which is 3

//Constructor Function

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.total = function () {
        return this.num1 + this.num2;
    };
}
const calc = new Calculator(1, 2);

console.log(calc.total());
