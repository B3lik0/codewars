function rgb(r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    let colors = [r, g, b];
    let result = "";
    const dictionary = {
        "0": "0",
        "1": "1",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5",
        "6": "6",
        "7": "7",
        "8": "8",
        "9": "9",
        "10": "A",
        "11": "B",
        "12": "C",
        "13": "D",
        "14": "E",
        "15": "F",
    };
    for (let color of colors) {
        let primero = Math.trunc(color / 16);
        let segundo = color % 16;
        result += dictionary[primero] + dictionary[segundo];
    }

    return result;
}

//best practice
function rgb(r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    const red = r.toString(16).toUpperCase().padStart(2, "0");
    const green = g.toString(16).toUpperCase().padStart(2, "0");
    const blue = b.toString(16).toUpperCase().padStart(2, "0");
    return red + green + blue;
}