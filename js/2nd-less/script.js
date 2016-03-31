/**
 * Created by Дима on 27.03.2016.
 */
"use strict";

//var a=1;
//var a;
//console.log(a);
//
//var name="Dima",admin;
//admin=name;
//console.log(admin + name);
//var a=0, b=2;
//if(!a){
//    console.log(b);
//}else{
//    alert("smthing wrong");
//}
//(!a)?console.log(b):alert("smtihng wrong");
//if(a<3){
//    alert("Child");
//}else if(a<0){
//    alert("a u spermatozoon?")
//}else if(a<18){
//    alert("Teenager");
//}else if(a<40){
//    alert("Man")
//}else if(a<100){
//    alert("Grandpa")
//}else{
//    alert("A u alive?")
//}
//(a<3)?alert("Child"):
//    (a<18)?alert("Teenadger"):
//        (a<40)?alert("Man"):
//            (a<100)?alert("Grandpa"):
//                alert("a u alive?");

//-------------------Домашка-----------------

//var log,pass;
//    log=prompt("Введите логин");
//if (log==("Админ"||"админ")){
//    pass=prompt("Введите пароль");
//    if (pass=="Чёрный Властелин"){
//        alert("Добро пожаловать!")
//    }else if(pass===0) {
//        alert("Вы - "+log+".Но Вход отменен");
//    }else{
//        alert("Вы - "+log+'.Но вы ввели не ввели пароль ');
//    }
//}else if(log===0) {
//    alert("Вход отменен");
//}else{
//    alert("Я вас не знаю");
//}


//var sex,series,act,question,car,result='';
//sex=prompt("Ваш пол?(м/ж)");
//if(sex=="м"|| sex=="М"){
//    result="Ваш пол: "+sex+"\n";
//
//    series=prompt("Серия паспорта");
//    result+="Серия паспорта: "+series+"\n";
//
//    act=+prompt("Номер паспорта");
//        if(act>0&&act<999999){
//            result+= "Серия паспорта"+act+"\n";
//            question=+prompt("Вы водитель?\n1-да\n2-нет");
//            if(question===1){
//                car=prompt("Введите две буквы номерного знака");
//                result+="Номерной знак: "+car;
//                alert(result);
//            }else{
//                alert("Спасибо, ваши данные учтены,но вы не водитель\n"+result);
//            }
//        }else{
//            alert("Введите коректный номер!\n"+result);
//        }
//}else{
//    alert("Простите, вы не человек");
//}



//var i=0;
//while(i==0){
//    var a;
//    a=+prompt("Введите число");
//    if((a%12==0) &&(a!=0)){
//        i++;
//    }
//}
//var a=+prompt('Введите число от 1-25');
//var result=1;
//if (a>0 && a<26) {
//    for (var i=1; i <= a; i++) {
//        result*=i;
//    }
//    alert("Результат: "+result);
//}
//var a=+prompt("Put a number between 3-99");
//if(a>=3&&a<=99){
//    var count_div=0;
//    for(var start=1; start<=a;start++){
//        if(a%start==0){
//            count_div++;
//        }
//    }
//    if(count_div>2) {
//        alert("Number isn`t simple");
//    }else{
//        alert("Number is simple");
//    }
//}else{
//    alert("Put correct number");
//}

//var a=+prompt("Put a number");
//if(a>=3&&a<=99){
//    var result="Divisions of your number=";
//    for(var i=1;i<a;i++){
//        if(a%i==0){
//            result+=i+",";
//        }
//    }
//    alert(result);
//}else{
//    alert("Put a correct number");
//}

var a=+prompt("Put a number between 3-99");
if(a>=3&&a<=99){
    var result_summ= 0,result_add=1;
    for(var i=1;i<=a;i++){
        if(a%i==0){
            if(i%2==0){
                result_summ+=i;
            }else{
                result_add*=i;
            }
        }
    }
    alert("Сумма четных делителей:"+result_summ+"\n"+"Произведение нечетных делителей:"+result_add+"\n");
}else{
    alert("Put a correct number");
}