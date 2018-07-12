
const max = (...numbers) => {
    return numbers.reduce((max, val) => Math.max(val, max), Number.MIN_VALUE);
}


// max(1, 2, 4, 5), should return 5,
// max(5, 2, 7, 1, 6); should return 7

