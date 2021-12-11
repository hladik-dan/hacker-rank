function reverseString(s) {
    let result = s;

    try {
        result = s.split("").reverse().join("");
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(result);
    }
}
