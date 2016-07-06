////var any=document.getElementById('any');
////any.style.backgroundColor='skyblue';
//console.log($('#any').css('background-color','skyblue'));
//$('#click').click(function(){
//    console.log($('.third>input').val());
//
//});
//
$('input[type="submit"]').click(function(){

    var countErrors=0;
    if (!loginCheck()){
        countErrors++;
    }
    if (!passCheck()){
        countErrors++;
    }
    if (!confirmCheck()){
        countErrors++;
    }
    if (!pNumbCheck()){
        countErrors++;
    }
    if (!emailCheck()){
        countErrors++;
    }
    return countErrors==0;
});
function countErrorsCheck(arg,label,pMessage,countErrors){
    if(countErrors>0){
        arg.css('border-color','red');
        label.css('color','red');
        return false;
    }else{
        arg.css('border-color','green');
        label.css('color','green');
        pMessage.text('');
        return true;
    }
}
function emptyCheck(arg,pMessage,txt){
    if(arg.val()==''){
        pMessage.text(txt);
        return true;
    }else{
        return false;
    }
}
function loginCheck(){
    var login=$('#log');
    var pMessage=$('#log~p');
    var label=$('#parLog>label');
    var countErrors=0;
    var txt='Не введен логин';

    if(emptyCheck(login,pMessage,txt)){
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
    return countErrorsCheck(login,label,pMessage,countErrors);
}
function passCheck(){
    var password=$('#pass');
    var pMessage=$('#pass~p');
    var label=$('#parPass>label');
    var countErrors=0;
    var txt='Не введен пароль';

    if(emptyCheck(password,pMessage,txt)){
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
            if(password.val().search(/^[1-9]+$/)==1){
                pMessage.html(pMessage.text()+'<br/>'+'Простой пароль');
                countErrors++;
            }
            if(password.val().search(/^[a-zA-Z]+$/)==1){
                pMessage.html(pMessage.text()+'<br/>'+'Я знаю ты можешь лучше');
                countErrors++;
            }
        }
    }
    return countErrorsCheck(password,label,pMessage,countErrors);

}
function confirmCheck(){
    var confirm=$('#confirm');
    var password=$('#pass');
    var pMessage=$('#confirm~p');
    var label=$('#parConfirm>label');
    var countErrors=0;
    var txt='Не введено подтверждение пароля';

    if(emptyCheck(confirm,pMessage,txt)){
        countErrors++;
    }else{
        if(confirm.val()!=password.val()){
            pMessage.html(pMessage.text()+'<br/>'+'Повторите пароль правильно');
            countErrors++;
        }
    }
    return countErrorsCheck(confirm,label,pMessage,countErrors);
}
function pNumbCheck(){
    var pNumb=$('#telnum');
    var pMessage=$('#telnum~p');
    pMessage.text('');
    var label=$('#parTelx>label');
    var countErrors=0;
    var txt='Не введен номер телефона';

    if(emptyCheck(pNumb,pMessage,txt)){
        countErrors++;
    }else{
        if(pNumb.val().length!=13){
            pMessage.html(pMessage.text()+'<br/>'+'Введено не верное количество цифр');
            countErrors++;
        }else{
            if(pNumb.val().indexOf('+380')!=0){
                pMessage.html(pMessage.text()+'<br/>'+'Номер должен начинаться с \"+380\"');
                countErrors++;
            }
        }
        if(pNumb.val().search(/^[1-9]$/)==-1){
            pMessage.html(pMessage.text()+'<br/>'+'Номер должен состоять из цифр');
            countErrors++;
        }
    }
    return countErrorsCheck(pNumb,label,pMessage,countErrors);
}
function emailCheck(){
    var email = $('#email');
    var pMessage = $('#email~p');
    var label = $('#parEmail>label');
    var countErrors=0;
    var txt='Не введен e-mail';

    if(emptyCheck(email,pMessage,txt)){
        countErrors++;
    }else{
        if((email.val().length<6)&&(email.val().length>30)){
            pMessage.text('Введена некорректная длина мыла');
            countErrors++;
        }
        if(email.val().indexOf('.')-email.val().indexOf('@')<2){
            pMessage.html(pMessage.text()+'<br/>'+'Убедитесь что ваше мыло содержит' +
            ' \"@\" и \".\" и они расположенны правильно')
        }
        //if(email.val().search(/^[a-zA-Z1-9@_-]+$/)==-1){
        //    alert('working');
        //}
    }
    return countErrorsCheck(email,label,pMessage,countErrors);
}