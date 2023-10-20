function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < alphabet.length; i++) {
        if (string.toLowerCase().indexOf(alphabet[i]) < 0) {
            return false
        }
    }
    return true
}

function isPangram(string) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet.split("").every(letter => string.toLowerCase().includes(letter))
}
