// P1

// 1
    const name = 'Do Thanh'
    const age = 26
    const isStudent = true

    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Is student: ${isStudent}`)

// 2
    let a = 5
    let b = 10
    a = 23
    b = 2
    console.log(`Giá trị của a: ${a}`);
    console.log(`Giá trị của b: ${b}`);

// P2
/* Different between const and let:
    Const declare constant that can not be reassigned
    Let declare variables that can be reassigned

    When did we use const?
    We use const by default for any value that is not intended to be reassigned

    Is the following code correct or incorrect? Explain:
    "const x = 10;
    x = 20;"
    Those code is wrong cause "const" is declare constant that can not be reassigned.
    So x can not be reasigned
*/

// P3
    /*
        Determine the data type of the following values (write comment):
        100: Number
        True: Boolean
        [1, 2, 3]: Array (Object)
        { name: "An", age: 20 }: Object
        null: Null (Object)
        undefined: Undefined (Object)
    */
    const student = {
        name: 'Đỗ Thành',
        age: 26,
        score: [10, 10, 10]
    }

    console.log(student);

// P4
    let typeCasting1 = "1000"
    typeCasting1 = Number(typeCasting1)
    console.log(`${typeCasting1} : ${typeof typeCasting1}`);
    let typeCasting2 = 1000
    typeCasting2 = String(typeCasting2)
    console.log(`${typeCasting2} : ${typeof typeCasting2}`);
    let typeCasting3 = true
    typeCasting3 = String(typeCasting3)
    console.log(`${typeCasting3} : ${typeof typeCasting3}`);

// P5
/*
    Boolean(0) : false
    Boolean(1) : true
    Boolean("") : false
    Boolean("hello") : true
    Boolean(null) : false
    Boolean([]) : true
*/

// P6
    const numbers = [4, 3, 1, 5, 1];
    console.log(`Phần tử đầu tiên: ${numbers[0]}`);
    console.log(`Phần tử cuối: ${numbers[numbers.length - 1]}`);
/*
    Why do 'a' and 'numbers' refer to the same memory location when assigned?

    'Numbers' is a reference data type -> the variable only holds the address pointing to that memory location.

    > Assigning 'a' = 'numbers' means 'a' and 'numbers' will point to the same memory location.
*/

