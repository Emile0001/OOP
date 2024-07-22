// The simplest way to create an object is using an object literal
const circle = {
    radius: 1,
    draw: function () {},
};

// To create multiple objects with the same structure and behavior (methods), use a factory or a constructor.

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {},
    };
}

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {};
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object.
const x = {};
x.constructor; // returns Object()

// In JavaScript, functions are objects. They have properties and methods.
Circle.name; // returns 'Circle'
Circle.length; // returns number of arguments (1)
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function
Circle.apply({}, [1]); // to call the Circle function with an array of arguments

// Value types are copied by their value, reference types are copied by their reference.
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined, and null
// Reference types are: Object, Function, and Array

// JavaScript objects are dynamic. You can add/remove properties:
circle.location = {};
circle["location"] = {};

delete circle.location;

// To enumerate the members in an object:
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle); // returns an array of keys

// To see if an object has a given property
if ("location" in circle) {
    // do something
}

// Abstraction means hiding the complexity/details and showing only the essentials.
// We can hide the details by using private members. Replace "this" with "let".

function Circle(radius) {
    // Public member
    this.radius = radius;

    // Private member
    let defaultLocation = {};

    // Private method
    let computeOptimumLocation = function () {
        // ...
    };

    this.draw = function () {
        computeOptimumLocation();
        console.log("draw");
    };

    // To define a getter/setter, use Object.defineProperty():
    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value) throw new Error("Invalid location.");
            defaultLocation = value;
        },
    });
}

// Prototypes and inheritance

// Adding a method to the prototype
Circle.prototype.move = function () {
    console.log("move");
};

// Inheritance
function Shape() {}
Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Method overriding
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log("duplicate circle");
};

// ES6 Classes

class Shape {
    duplicate() {
        console.log("duplicate");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log("draw");
    }

    // Method overriding
    duplicate() {
        super.duplicate();
        console.log("duplicate circle");
    }
}

// Static methods
class MathHelper {
    static square(n) {
        return n * n;
    }
}

MathHelper.square(4); // 16
