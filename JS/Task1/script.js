'use strict';
var input = document.getElementById('txt');
var btn = document.getElementById('btn');
btn.addEventListener('click', clickHandler);

function clickHandler() {
    console.log(input.value)
    var str = input.value;
var ignore = ["?", "!", ":", ";", ",", ".", " ", "\t", "\r"];
var letters = {}, result;
var words = str.split(' ');
 
words.forEach(function (word) {
    word.split('').forEach(function (letter, i) {
        if (!letters[letter] && ignore.indexOf(letter) == -1 && -1 != word.indexOf(letter, i + 1)) {
            letters[letter] = 1;
        }
    });
});
 
result = str.split('').filter(function (v) {
    return !letters[v];
}).join('');
alert(result); //У о был собк
}

