function roman (n) {
    const number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const romawi = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    
    let hasil = ''

    for (var i = number.length - 1; i >= 0; i--) {
        while (n >= number[i]){
            n = n - number[i];
            hasil = hasil + romawi[i];
        }
    }
    return hasil;
}

console.log("Script Testing untuk Konversi Romawi");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       |", roman(4));
console.log("9     | IX       |", roman(9));
console.log("13    | XIII     |", roman(13));
console.log("1453  | MCDLIII  |", roman(1453));
console.log("1646  | MDCXLVI  |", roman(1646));

function roman2 (n) {
    const dictionary = { M : 1000, CM : 900, D : 500, CD : 400, C: 100, XC : 90, L : 50, XL : 40, X : 10, IX : 9, V : 5, IV : 4, I : 1}
    
    let hasil = ''

    for (key in dictionary) {
       
        while (n >= dictionary[key]){
            n = n - dictionary[key];
            hasil = hasil + key;
        }
    }
    return hasil;
}

console.log("Script 2 Testing untuk Konversi Romawi");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       |", roman2(4));
console.log("9     | IX       |", roman2(9));
console.log("13    | XIII     |", roman2(13));
console.log("1453  | MCDLIII  |", roman2(1453));
console.log("1646  | MDCXLVI  |", roman2(1646));
