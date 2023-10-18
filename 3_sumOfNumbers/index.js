function getSum(a, b) {
    if (a === b) return a
    let arr
    if (a > b)
        arr = Array.from({ length: Math.abs(b - a) + 1 }, (_, i) => b + i);
    if (b > a) {
        arr = Array.from({ length: Math.abs(b - a) + 1 }, (_, i) => a + i);
    }
    return arr.reduce((a, b) => a + b, 0)
}

//best practice
function getSum(a, b) {
    if (a === b) return a;
    const [min, max] = [Math.min(a, b), Math.max(a, b)];
    return ((max - min + 1) * (min + max)) / 2;
}