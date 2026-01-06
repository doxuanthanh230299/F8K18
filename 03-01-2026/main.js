// Lesson 1
const getStudentLevel = (score) => {
    if (typeof score !== "number" || score < 0 || score > 10) {
        return "Invalid score. Please enter a value between 0 and 10.";
    }

    if (score >= 9) {
        return "Excellent";
    } else if (score >= 8) {
        return "Very Good";
    } else if (score >= 6.5) {
        return "Good";
    } else if (score >= 5) {
        return "Average";
    } else {
        return "Weak";
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
            return "This month has 31 days."
            break;

        case 4:
        case 6:
        case 9:
        case 11:
            return "This month has 30 days."
            break;

        case 2:
            return "This month has 28 days."
            break;

        default:
            return "Invalid month."
    }
};

// // Lesson 3
const isEvenOrOdd = n => n % 2 === 0 ? "Even" : "Odd";


// // Lesson 4
const getTicketPrice = age => age < 13 ? 100000 * 0.5 : 100000;

// Lesson 5
const toFahrenheit = (value) => value * 1.8 + 32;

// Lesson 6
const getElectricityBill = (value) => {
    if (typeof value !== "number" || value < 0) {
        return "Invalid electricity consumption";
    }
    if (value === 0) {
        return 0;
    } else if (value <= 50) {
        return value * 1678;
    } else if (value <= 100) {
        return 50 * 1678 + (value - 50) * 1734;
    } else if (value <= 200) {
        return 50 * 1678 + 50 * 1734 + (value - 100) * 2014;
    } else {
        return 50 * 1678 + 50 * 1734 + 100 * 2014 + (value - 200) * 2536;
    }
};
