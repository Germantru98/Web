'use strict';
var str = prompt("Введите строку");
str = str.split(/([-,+,/,*])/);
var res,i;
for(i = 0;i<=str.length-1;i++)
{
    if (str[i]==='+')
    {
        str[i+1] = parseFloat(str[i-1])+parseFloat(str[i+1]);
        res = str[i+1];
    }
    if(str[i]==='-')  
    {
        str[i+1] = parseFloat(str[i-1])-parseFloat(str[i+1]);
        res = str[i+1];
    }
    if(str[i]==='/')  
    {
        str[i+1] = parseFloat(str[i-1])/parseFloat(str[i+1]);
        res = str[i+1];
    }
    if(str[i]==='*')  
    {
        str[i+1] = parseFloat(str[i-1])*parseFloat(str[i+1]);
        res = str[i+1];
    }    
}
alert(res);
