var count = 0;
var array = []

for(let i = 0; i < 5; i++) {
    array[i] = []
    for (let j =0; j < 4;  j++){
        array[i][j] = count
        count++
    }
}

console.log(array);