// CHALLENGE9
// SPIRAL

function spiral(param1) {
    let matriks = [];
    let count = 0;

    for (var i = 0; i < param1; i++) {
        matriks[i] = []
        for (var j = 0; j < param1; j++) {
            matriks[i][j] = count;
            count++;
        }
    }
    console.log(matriks);


    let x = 0; y = 0;
    let batasAtas = param1;
    let batasBawah = 0;

    let result = []
    while (result.length < param1 * param1) {

        for (; x < batasAtas; x++) {
            result.push(matriks[y][x]);
        }
        x--;
        y++;

        for (; y < batasAtas; y++) {
            result.push(matriks[y][x]);
        }
        y--;
        x--;

        for (; x >= batasBawah; x--) {
            result.push(matriks[y][x]);
        }
        x++;
        y--;

        for (; y > batasBawah; y--) {
            result.push(matriks[y][x]);
        }

        x++;
        y++;
        batasAtas--;
        batasBawah++;

    }

    console.log(result);

}

spiral(5);
spiral(6);
spiral(7);