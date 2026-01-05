// Lesson 1
const classifyScore = (score) => {
    if (typeof score !== "number" || score < 0 || score > 10) {
        console.log("Invalid score. Please enter a value between 0 and 10.");
        return;
    }

    if (score >= 9) {
        console.log("Excellent");
    } else if (score >= 8) {
        console.log("Very Good");
    } else if (score >= 6.5) {
        console.log("Good");
    } else if (score >= 5) {
        console.log("Average");
    } else {
        console.log("Weak");
    }
};

// Lesson 2
const getDaysInMonth = (month) => {
    if (typeof month !== "number" || month < 1 || month > 12) {
        console.log("Invalid month. Please enter a value from 1 to 12.");
        return;
    }

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("This month has 31 days.");
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            console.log("This month has 30 days.");
            break;

        case 2:
            console.log("This month has 28 days.");
            break;

        default:
            console.log("Invalid month.");
    }
};

// // Lesson 3
const n = 1999
const evenOddCheck = n % 2 === 0 ? "Even" : "Odd";
console.log('N is:', evenOddCheck);


// // Lesson 4
const age = 27
const ticketPrice = age < 13 ? 100000 * 0.5 : 100000;
console.log('Ticket price: ', ticketPrice);

// Lesson 5
const toFahrenheit = (value) => value * 1.8 + 32;

// Lesson 6
const getElectricityBill = (value) => {
    if (typeof value !== "number" || value <= 0) {
        return "Invalid electricity consumption";
    }
    if (value <= 50) {
        return value * 1678;
    } else if (value <= 100) {
        return 50 * 1678 + (value - 50) * 1734;
    } else if (value <= 200) {
        return 50 * 1678 + 50 * 1734 + (value - 100) * 2014;
    } else {
        return 50 * 1678 + 50 * 1734 + 100 * 2014 + (value - 200) * 2536;
    }
};
