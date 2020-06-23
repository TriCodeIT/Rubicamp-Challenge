function checkPrime(n){
    if(n <2){
        return false;
    }
    for (let i =2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true
}

function indexPrime(index){
    let counter = 0;
    let number = 2;
    while(counter < index){
        if(checkPrime(number)){
            counter++;
        }
        number++;
    }
    return number - 1;
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));

