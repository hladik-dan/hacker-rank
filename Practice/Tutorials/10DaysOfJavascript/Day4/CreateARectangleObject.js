function Rectangle(length, width) {
    let rectangle = {
        length: length,
        width: width,
        area: length * width,
        perimeter: (length + width) * 2,
    };

    return rectangle;
}
