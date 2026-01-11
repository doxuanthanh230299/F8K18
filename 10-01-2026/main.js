// Ex1
const isPrimeNumber = (n) => {
    if (typeof n !== "number" || isNaN(n) || n % 1 !== 0)
        return "Invalid value";
    if (n <= 1) return false;
    let count = 0;
    for (i = 1; i <= n; i++) {
        if (n % i === 0) count++;
        if (count > 2) break;
    }
    if (count > 2) return false;
    return true;
};

console.log(isPrimeNumber(19));
console.log(isPrimeNumber(NaN));
console.log(isPrimeNumber(8));
console.log(isPrimeNumber(-9));

// Ex2
const isPerfectNumber = (n) => {
    if (typeof n !== "number" || isNaN(n) || n % 1 !== 0)
        return "Invalid value";
    if (n <= 1 || n % 2 !== 0) return false;
    let totalDivisor = 0;
    for (i = 2; i <= n; i++) {
        if (n % i === 0) {
            totalDivisor += n / i;
        }
    }
    if (totalDivisor !== n) return false;
    return true;
};

console.log(isPerfectNumber(NaN));
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(496));
console.log(isPerfectNumber(3));
