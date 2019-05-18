'use strict';
var input = document.getElementById('txt');
var btn = document.getElementById('btn');
btn.addEventListener('click', clickHandler);
function clickHandler() {
    var str = input.value;
    var res, i;
    str = str.split(/([-,+,/,*])/);
    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] === '+') {
            str[i + 1] = parseFloat(str[i - 1]) + parseFloat(str[i + 1]);
            res = str[i + 1];
        }
        if (str[i] === '-') {
            str[i + 1] = parseFloat(str[i - 1]) - parseFloat(str[i + 1]);
            res = str[i + 1];
        }
        if (str[i] === '/') {
            str[i + 1] = parseFloat(str[i - 1]) / parseFloat(str[i + 1]);
            res = str[i + 1];
        }
        if (str[i] === '*') {
            str[i + 1] = parseFloat(str[i - 1]) * parseFloat(str[i + 1]);
            res = str[i + 1];
        }
    }
    alert(res);
}

