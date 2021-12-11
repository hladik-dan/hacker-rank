function isVowel(letter) {
    switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
        default:
            return false;
    }
}

function isConsonant(letter) {
    return !isVowel(letter);
}

function vowelsAndConsonants(string) {
    for (let letter of string) {
        if (!isVowel(letter)) {
            continue;
        }

        console.log(letter);
    }

    for (let letter of string) {
        if (!isConsonant(letter)) {
            continue;
        }

        console.log(letter);
    }
}
