function getCount(objects) {
    let result = objects.filter(x => x.x == x.y).length;

    return result;
}
