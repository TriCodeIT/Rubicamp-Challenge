/*
includes()
Cek apakah string berisi string / karakter yang ditentukan
*/

//Check if a string includes "world"
var str = "Hello world, welcome to the universe.";
var n = str.includes("world"); //true

//Periksa apakah string termasuk "world", memulai pencarian di posisi 12:
var str = "Hello world, welcome to the universe.";
var n = str.includes("world", 12); //false