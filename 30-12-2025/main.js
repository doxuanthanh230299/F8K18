// Task 1
const classA = ["An", "Binh", "Chi"];
const classB = classA;
classB[0] = "An Updated";
console.log(`Class A: ${classA}`);
/*
Explanation:
    classA -> 0x01
    classB = classA -> classB -> 0x01
    Both variables reference the same array, so updating classB also updates classA.
    classA and classB both point to the same memory address (0x01).
*/

// Task 2
let x = "10";
let y = 2;
console.log(x + y); // Result 1
console.log(x - y); // Result 2
console.log(x * "3"); // Result 3
console.log("Hello" - y); // Result 4

/*
Explanation:
    x = "10" -> string
    y = 2 -> number
    
    
    - Result 1:
    If either operand is a string, JavaScript performs string concatenation.
    y is implicitly converted to a string "2".
    Result: "10" + "2" -> "102

    - Result 2:
    The - operator is numeric-only:
    JavaScript forces both operands to be numbers.
    x was converted to 10.
    Result: 10 - 2 -> 8

    - Result 3:
    The * is also numeric-only:
    JavaScript forces both operands to be numbers.
    x was convered "10" -> 10, "3" -> 3
    Result: 10 * 3 -> 30

    - Result 4:
    The - operator is numeric-only:
    JavaScript forces both operands to be numbers.
    "Hello" can not be convered to number -> NaN
    Result: NaN - 2 -> NaN
*/

// Task 3
// Case 1
age = 9;
mathScore = 10;
isVIP = false;

canEnter = (age >= 10 && mathScore > 7) || isVIP;
console.log(canEnter);

// Case 2
age = 9;
mathScore = 10;
isVIP = true;

canEnter = (age >= 10 && mathScore > 7) || isVIP;
console.log(canEnter);
/*
!(age < 10) is the same as age >= 10
Explanation:
    age < 10 means the age is less than 10
    !(age < 10) means the age is not less than 10 -> age >= 10
    */

// Task 4
const laptop = {
  brand: "Dell",
  price: 1000,
  spec: { ram: "8GB", ssd: "256GB" },
};

const myLaptop = laptop;
myLaptop.brand = "Apple";

const mySpec = laptop.spec;
mySpec.ram = "16GB";

console.log(laptop.brand); // laptop.brand value is "Apple"
console.log(laptop.spec.ram); // laptop.spec.ram value is "16GB"

/*
Explanation:
    laptop -> 0x01
    myLaptop = laptop -> myLaptop -> 0x01
    -> myLaptop.brand = "Apple" changes laptop.brand

    laptop.spec -> 0x02
    mySpec = laptop.spec -> mySpec -> 0x02
    -> mySpec.ram = "16GB" changes laptop.spec.ram
    Objects and nested objects are reference types,
    so all variables pointing to the same memory address share the same data.
*/
