function findAverage(array) {
    if (array.length === 0) return 0;
    return (array.reduce((a, b) => a + b, 0) / array.length)
}

//best practice

function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((a, b) => a + b, 0) / array.length
}