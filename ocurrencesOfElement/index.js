function deleteNth(arr, n) { //FIXME:
    let numReps = {}
    let positions = []
    arr.forEach(element => {
        numReps[element] = (numReps[element] || 0) + 1
    })

    Object.keys(numReps).map((value, key) => {
        console.log(key, value, numReps[value])
    })
    // return valores

}

console.log(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3))