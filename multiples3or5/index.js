function solution(number) {
    const multiples = [3, 5];
    let sum = 0;
    if (number <= 0 || number == 1) return 0;
    for (let i = 1; i < number; i++) {
        if (multiples.some((multiple) => i % multiple === 0)) {
            sum += i;
        }
    }
    return sum;
}