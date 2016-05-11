////var any=document.getElementById('any');
////any.style.backgroundColor='skyblue';
//console.log($('#any').css('background-color','skyblue'));
//$('#click').click(function(){
//    console.log($('.third>input').val());
//
//});
//
//(loginCheck())&&(passCheck())&&(confirmCheck())&&
$('input[type="submit"]').click(function(){
    if((pNumbCheck())){
        return true;
    }else{
        return false;
    }
}
);

function loginCheck(){
    var login=$('#log');
    var pMessage=$('#log~p');
    var label=$('#parLog>label');
    var countErrors=0;
    if(login.val()==''){
        pMessage.text('Не введен логин');
        countErrors++;
    }else{
        if((login.val().length>12)||(login.val().length<6)){
            pMessage.html('Недопустимая длина логина'+'\n');
            countErrors++;
        }
        if(login.val().search(/^[a-zA-Z1-9]+$/)==-1){
            pMessage.html(pMessage.text()+'<br/>'+'Введены недопустимые символы');
            countErrors++;
        }
    }
    if(countErrors>0){
        login.css('border-color','red');
        label.css('color','red');
        return false;
    }else{
        return true;
    }
}
function passCheck(){
    var password=$('#pass');
    var pMessage=$('#pass~p');
    var label=$('#parPass>label');
    var countErrors=0;
    if(password.val()==''){
        pMessage.text('Не введен пароль');
        countErrors++;
    }else{
        if((password.val().length>12)||(password.val().length<6)){
            pMessage.html('Недопустимая длина пароля'+'\n');
            countErrors++;
        }
        if(password.val().search(/^[a-zA-Z1-9]+$/)==-1){
            pMessage.html(pMessage.text()+'<br/>'+'Введены недопустимые символы');
            countErrors++;
        }else{
            //if(password.val().search(/^[a-zA-Z]+$/)==-1){
            //    pMessage.html(pMessage.text()+'<br/>'+'Простой пароль');
            //    countErrors++;
            //}else{
            //    if(password.val().search(/^[1-9]+$/)==-1){
            //        pMessage.html(pMessage.text()+'<br/>'+'Я знаю ты можешь лучше');
            //        countErrors++;
            //    }
            //}
        }



    }
    if(countErrors>0){
        password.css('border-color','red');
        label.css('color','red');
        return false;
    }else{
        return true;
    }
}
function confirmCheck(){
    var confirm=$('#confirm');
    var password=$('#pass');
    var pMessage=$('#confirm~p');
    var label=$('#parConfirm>label');
    var countErrors=0;
    if(confirm.val()==''){
        pMessage.text('Повторите пароль');
        countErrors++;
    }else{
        if(confirm.val()!=password.val()){
            pMessage.html(pMessage.text()+'Повторите пароль правильно');
            countErrors++;
        }
    }

    if(countErrors>0){
        confirm.css('border-color','red');
        label.css('color','red');
        return false;
    }else{
        return true;
    }
}
function pNumbCheck(){
    var pNumb=$('#telnum');
    var pMessage=$('#telnum~p');
    var label=$('#parTel>label');
    var countErrors=0;
    if(pNumb.val()==''){
        pMessage.text('Номер телефона не введен');
        countErrors++;
    }else{
        if(pNumb.val().length!=13){
            pMessage.text('Введено не верное количество цифр');
            countErrors++;
        }else{
            if(pNumb.val().search(/^[1-9]$/)==-1){
                alert('lol');
            }else{
                if(pNumb[0]!='+'){
                    alert('shit');
                }
            }
        }
    }

    if(countErrors>0){
        pNumb.css('border-color','red');
        label.css('color','red');
        return false;
    }else{
        return true;
    }
}
function emailCheck() {
    var email = $('#email');
    var pMessage = $('#email~p');
    var label = $('#parEmail>label');
    var countErrors = 0;

    if(countErrors>0){
        pNumb.css('border-color','red');
        label.css('color','red');
        return false;
    }else{
        return true;
    }
}