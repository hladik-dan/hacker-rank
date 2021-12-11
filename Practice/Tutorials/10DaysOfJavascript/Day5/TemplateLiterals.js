function sides(_, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];


    let squareRoot = Math.sqrt(Math.pow(perimeter, 2) - 16 * area);
    let result1 = (perimeter + squareRoot) / 4;
    let result2 = (perimeter - squareRoot) / 4;

    return [result1, result2].sort();
}
