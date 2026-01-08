// Lesson 1
const getTriangle = (a, b, c) => {
    if (
        typeof a !== "number" ||
        typeof b !== "number" ||
        typeof c !== "number" ||
        isNaN(a) ||
        isNaN(b) ||
        isNaN(c)
    )
        return "Invalid value";
    if (a <= 0 || b <= 0 || c <= 0) return "The sides must be greater than 0.";

    const isTriangle = a + b > c || a + c > b || b + c > a;
    const isEqTriangle = a === b && a === c;
    const isIsoTriangle = a === b || a === c || b === c;
    const isRightTriangle =
        a * a + b * b === c * c ||
        a * a + c * c === b * b ||
        b * b + c * c === a * a;

    if (!isTriangle) return "This isn't triangle";
    if (isEqTriangle) {
        return "This is equilateral triangle";
    }
    if (isIsoTriangle) {
        if (isRightTriangle) return "Isosceles right triangle";
        return "This is isosceles triangle";
    }
    if (isRightTriangle) {
        return "This is right triangle";
    }

    return "This is triangle";
};

// Lesson 2
const isPerfectSquare = (value) => {
    if (typeof value !== "number" || isNaN(value)) return "Invalid value";
    if (
        value ** 0.5 % 2 === 0 ||
        value ** 0.5 % 3 === 0 ||
        value ** 0.5 % 5 === 0 ||
        value ** 0.5 % 7 === 0
    )
        return "This is perfect square";
    return "This isn't perfect square"
};
