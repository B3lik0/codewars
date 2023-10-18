function likes(names) {
    let pluralLabel = "like this"
    let singularLaber = "likes this"
    if (names.length == 0) return "no one likes this";
    if (names.length === 1) return `${names[0]} ${singularLaber}`;
    if (names.length === 2) return `${names[0]} and ${names[1]} ${pluralLabel}`;
    if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} ${pluralLabel}`;
    if (names.length > 3)
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

function likes(names) {
    const labels = ["no one likes this", "likes this", "like this"];
    switch (names.length) {
        case 0:
            return labels[0];
        case 1:
            return `${names[0]} ${labels[1]}`;
        case 2:
            return `${names[0]} and ${names[1]} ${labels[2]}`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} ${labels[2]}`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others ${labels[2]}`;
    }
}