function findNb(m) {
    let n = 0, sum = 0
    while (sum < m) {
        n++
        sum += n ** 3
    }
    return sum === m ? n : -1
}

function findNb(m) {
    let n = 0, sum = 0
    while (sum < m) {
        n++
        sum += Math.pow(n, 3)
    }
    return sum === m ? n : -1
}

