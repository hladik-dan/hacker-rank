function getMaxLessThanK(n, k) {
    let result = 0;

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            let and = i & j;
            if (and >= k || and < result) {
                continue;
            }

            result = and;
        }
    }

    return result;
}
