function isPositive(number) {
    if (number == 0) {
        throw new Error("Zero Error");
    }

    if (number < 0) {
        throw new Error("Negative Error");
    }

    return "YES";
}
