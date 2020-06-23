// CHALLLENGE 5
// STRING MANIPULATION

function stringManipulation(word){
    if(word.charAt(0).toLowerCase() == 'a' ||
    word.charAt(0).toLowerCase() == 'i' ||
    word.charAt(0).toLowerCase() == 'u' ||
    word.charAt(0).toLowerCase() == 'e' ||
    word.charAt(0).toLowerCase() == 'o'){
        return word;
    }else{
        return word.slice(1) + word.charAt(0) + 'nyo'
    }
}

console.log(stringManipulation('ayam'));
console.log(stringManipulation('bebek'));

function sentenceManipulation(sentence){
    let words = sentence.split(' ');
    let result = [];
    for (var i = 0; i < words.length; i++) {
        result.push(stringManipulation(words[i]));
    }
    console.log(result.join(' '));


}

sentenceManipulation('ibu pergi ke pasar bersama aku');