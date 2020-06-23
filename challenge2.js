function deretkaskus(n) {
    let hasil = [];
    let length = n * 3;
    for (let i = 3; i <= length; i += 3) {
        if (i % 5 == 0 && i % 6 == 0) {
            hasil.push("KASKUS");
        } else if (i % 6 == 0) {
            hasil.push("KUS");
        } else if (i % 5 == 0) {
            hasil.push("KAS");
        } else {
            hasil.push(i);
        }
    }
    return hasil;
}


console.log(deretkaskus(10));




