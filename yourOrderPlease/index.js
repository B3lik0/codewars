function order(words) {
    let arr = Array.from({ length: words.length })
    let newWords = words.split(" ")
    for (let i = 0; i < newWords.length; i++) {
        arr[i] = newWords.find(el => el.includes(i + 1))
    }
    return arr.join(" ").trim()
}

//best practice
function order(words) {
    return words
        .split(" ")
        .sort((a, b) => a.match(/\d/) - b.match(/\d/))
        .join(" ");
}