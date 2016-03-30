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
var a=0, b=2;
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
//log=+prompt("Введите логин");
//if(log="Админ"||"админ"){
//    pass=+prompt("Введите пароль");
//}else if(log!="Админ"||"админ"){
//    alert("Я вас не знаю");
//}else{
//    alert("Вход отменен");
//}
//if(pass="Чёрный Властелин"){
//    alert("Добро пожаловать!")
//}else if(pass!="Добро пожаловать!"){
//    alert("Я вас не знаю")
//}else{
//    alert("Вход отменен")
//}

var sex,series,act,question,car;
sex=+prompt("Ваш пол?(м/ж)");
if(sex=("м"||"М")){
    series=+prompt("Серия паспорта");
    act=+prompt("Номер паспорта");
    question=+prompt("Вы водитель?1-да2-нет");
}else{
    alert("Простите, вы не человек");
}if(question="1"){
    car=+prompt("Введите две буквы номерного знака");
}else{
    alert("Спасибо, ваши данные учтены");
}
alert(sex+series+act+car);
