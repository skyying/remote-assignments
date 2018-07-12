

// with Math.max
const max = (...numbers) => {
    return numbers.reduce((max, val) => Math.max(val, max), Number.MIN_VALUE);
}


//without Math.max
const max = (...numbers) => {
    return numbers.reduce((max, val) => val > max ? val : max, Number.MIN_VALUE);
}


// console.log(max(1, 2, 3, 4, 5));
