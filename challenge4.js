function indexPrime(param1) {
    let n = 2;
    let i = 0;
    while (i < param1) {
        let isprime = true;
        for (let a = 2; a <= Math.sqrt(n); a++){
            if (n % a === 0) 
            isprime = false;
        }
        if (isprime) {
            i++;
        }
        n++;
    }
    return n - 1;
}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))


