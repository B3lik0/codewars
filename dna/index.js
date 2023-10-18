function DNAStrand(dna) {
    let DNA = dna.split("")
    const dictionary = {
        "A": "T",
        "T": "A",
        "G": "C",
        "C": "G"
    }
    return DNA.map(letter => dictionary[letter]).join("")
}