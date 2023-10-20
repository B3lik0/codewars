function spinWords(string) {
    return string.split(" ").map(word => {
        if (word.length >= 5)
            return word.split("").reverse().join("")
        else
            return word
    }).join(" ")
}

//best practice
function spinWords(string) {
    return string.split(" ").map(word => {
        return (word.length >= 5 ? word.split("").reverse().join("") : word)
    }).join(" ")
}

function spinWords(string) {
    return string
        .split(" ")
        .map(word => word.length >= 5 ? word.split("").reverse().join("") : word)
        .join(" ")
}