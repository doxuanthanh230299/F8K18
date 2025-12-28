// Phần 1

// Bài 1
    const name = 'Do Thanh'
    const age = 26
    const isStudent = true

    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`Is student: ${isStudent}`)

// Bài 2
    let a = 5
    let b = 10
    a = 23
    b = 2
    console.log(`Giá trị của a: ${a}`);
    console.log(`Giá trị của b: ${b}`);

// Phần 2
/* Const khác let ở điểm là :
    Const là khai báo hằng số -> Không thay đổi được giá trị
    Let khai báo biến số -> Có thể thay đổi được giá trị

    Đoạn code sau đúng hay sai? Giải thích:
    "const x = 10;
    x = 20;"
    Đoạn code này sai bởi vì const khai báo hằng số
    nên khi thay đổi lại giá trị thì x = 20 chạy sẽ bị lỗi
*/

// Phần 3
    /*
        Xác định kiểu dữ liệu của các giá trị sau (ghi comment):
        100: Number
        True: Boolean
        [1, 2, 3]: Array (Object)
        { name: "An", age: 20 }: Object
        null: Null (Object)
        undefined: Undefined (Object)
    */
    const obj = {
        name: 'Đỗ Thành',
        age: 26,
        score: [10, 10, 10]
    }

    console.log(obj);

// Phần 4
    let typeCasting1 = "1000"
    typeCasting1 = Number(typeCasting1)
    console.log(`${typeCasting1} : ${typeof typeCasting1}`);
    let typeCasting2 = 1000
    typeCasting2 = String(typeCasting2)
    console.log(`${typeCasting2} : ${typeof typeCasting2}`);
    let typeCasting3 = true
    typeCasting3 = String(typeCasting3)
    console.log(`${typeCasting3} : ${typeof typeCasting3}`);

// Phần 5
/*
    Boolean(0) : false
    Boolean(1) : true
    Boolean("") : false
    Boolean("hello") : true
    Boolean(null) : false
    Boolean([]) : true
*/

// Phần 6
    const numbers = [4, 3, 1, 5, 1];
    console.log(`Phần tử đầu tiên: ${numbers[0]}`);
    console.log(`Phần tử cuối: ${numbers[numbers.length - 1]}`);
/*
Vì sao khi gán: thì a và numbers lại liên quan đến cùng một vùng nhớ?
    numbers là kiểu dữ liệu tham chiếu -> biến chỉ giữ địa chỉ trỏ tới vùng nhớ đó
    -> gán a = numbers thì a và numbers sẽ trỏ tới cùng một vùng nhớ
*/

