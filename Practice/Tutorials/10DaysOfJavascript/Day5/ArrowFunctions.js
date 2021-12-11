function modifyArray(numbers) {
    return numbers.map(number => number * ((number % 2) ? 3 : 2));
}
