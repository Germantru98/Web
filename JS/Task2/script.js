'use strict';
var str = prompt("Введите строку");
str = str.split(/([-,+,/,*])/);
var res,i;
for(i = 0;i<str.length;i++)
{
    if (str[i]==='+')
    {
        res = parseFloat(i-1)+parseFloat(i+1);
    }
    if(str[i]==='-')  
    {
        res = parseFloat(str[i-1])-parseFloat(str[i+1]);
    }
    if(str[i]==='/')  
    {
        res = parseFloat(i-1)/parseFloat(i+1);
    }
    if(str[i]==='*')  
    {
        res = parseFloat(i-1)*parseFloat(i+1);
    }
}
alert(res);
