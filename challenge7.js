//CHALLENGE 7
//WEIRD MULTIPLY - RECURSIVE

function weirdMultiply(number) {
    let numberString = number.toString();
    if (numberString.length == 1) return number;
    let total = 1;
    for (var i = 0; i < numberString.length; i++) {
        total *= (numberString[i])
    }

    return weirdMultiply(total);
}



console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));