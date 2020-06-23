/*
Metode endsWith () menentukan apakah string berakhir dengan karakter dari string yang ditentukan.

Metode ini mengembalikan true jika string berakhir dengan karakter, dan false jika tidak.

Catatan: Metode endsWith () peka huruf besar-kecil.
*/

//Periksa apakah string diakhiri dengan "universe"
var str = "Hello world, welcome to the universe.";
var n = str.endsWith("universe."); // true

/*Periksa apakah string diakhiri dengan "world", 
dengan asumsi string tersebut panjangnya 11 karakter:*/
var str = "Hello world, welcome to the universe.";
var n = str.endsWith("world", 11); // true