var count = 1;
var array = []

for(let i = 0; i < 4; i++) {
    array[i] = []
    for (let j =0; j < 5;  j++){
        array[i][j] = count
        count++
    }
}

console.log(array);