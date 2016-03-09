//var a,b,summ;
//a=+prompt("Введите число 1");
//b=+prompt("put your finger in your ass, please");
//a='8787897897';
//b=76786876;
//summ=a+b;
//alert(summ);
//console.log(summ);
//var a,b,c,d;
//a=+prompt("Введите число 1");
//b=+prompt("Введите число 2");
//if(a>b){
//    c="a>b";
//}else if(a<b){
//    c="a<b";
//}else if(a=b){
//    c="a=b";
//}
//alert("Результат: "+c);
var a,b;
a=+prompt("Choose day of week");
if(a==1){
    b="Monday";
}else if(a==2){
    b="Tuesday";
}else if(a==3){
    b="Wednesday";
}else if(a==4){
    b="Thursday";
}else if(a==5){
    b="Friday";
}else if(a==6){
    b="Saturday";
}else if(a==7){
    b="Sunday"
}else if(a>7||a<1){
    b="Choose normal day, bitch";
}
alert("Result: "+b);
Var a,b,c,d,summ;
a=+promt("Put a number");
b=a%10;
c=(a%100-b):10;
d=(a-10*b-c):100;
summ=b+c+d;
alert("Result "+summ);
