//var flag=1;
//function actionTextarea(){
//    var textArea=document.getElementsByTagName('textarea')[0];
//    var hideButton=document.getElementsByClassName('but2')[0];
//    var showButton=document.getElementsByClassName('but1')[0];
//    if(flag==1){
//        textArea.style.display='none';
//        hideButton.setAttribute('disabled','');
//        showButton.removeAttribute('disabled');
//        flag=0;
//    }else{
//        textArea.style.display='inline-block';
//        hideButton.removeAttribute('disabled');
//        showButton.setAttribute('disabled','');
//        flag=1;
//    }
//}
var flag=0;

function hideContent(){
    var quantity=document.getElementsByClassName('shit').length;
    for (var i=0;i<quantity;i++){
        document.getElementsByClassName('shit')[i].style.display='none';
    }
}
document.addEventListener("DOMContentLoaded", hideContent());

function showHideContent(id){
    var content=document.getElementById(id+'-content');
    if(content.style.display=='none'){
        content.style.display="block";
        flag++;
        changeByFlag();

    }else{
        content.style.display="none";
        flag--;
        changeByFlag();
    }
}
function changeByFlag(){
    var divText = document.getElementById('hide-show-all');
    if(flag==0) {
        divText.innerText = "Показать все";
    }else{
        divText.innerText = "Скрыть все";
    }
}
function showHideAll(){
    var divText=document.getElementById('hide-show-all');
    var quantity=document.getElementsByClassName('shit').length;
    if((divText.innerText=="Скрыть все")){
        divText.innerText="Показать все";

        for (var i=0;i<quantity;i++){
            document.getElementsByClassName('shit')[i].style.display='none';
        }
    }else{
        divText.innerText="Скрыть все";
        for (var j=0;j<quantity;j++){
            document.getElementsByClassName('shit')[j].style.display='block';
        }
    }
}

