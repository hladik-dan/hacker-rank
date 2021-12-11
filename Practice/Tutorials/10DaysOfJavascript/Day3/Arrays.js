function getSecondLargest(numbers) {
    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;

    for (let number of numbers) {
        if (number < first) {
            continue;
        }

        first = number;
    }

    for (let number of numbers) {
        if (number < second || number >= first) {
            continue;
        }

        second = number;
    }

    return second;
}
