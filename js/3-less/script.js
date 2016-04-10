//a=prompt("Put text");
//a1=a.length;
//for(var i= 0,j=0;i<a1;i++){
//    if((a[i]=="j")||(a[i]=="J")){
//        j++;
//    }
//}
//alert("Количество встречаеміх "+j);

//a=prompt("Put text");
//a1=a.length;
//for(var i= 0,j=0;i<a1;i++){
//    if((a[i]==".")||(a[i]=="!")||(a[i]=="?")){
//        for(var k= i+1; k< a.length;k++) {
//            if ((a[k] == ".") || (a[k] == "!") || (a[k] == "?")) {
//                i++;
//            }else{
//                break;
//            }
//        }
//        j++;
//    }
//}
//alert("Количество предложений "+j);

//function sayHi(name){
//    alert("Hello "+name+"!");
//}
//name=prompt("name");
//sayHi(name);
//function lvlup(num){
//    alert("Квадрат числа: "+(num*num));
//}
//my_num=+prompt("num");
//lvlup(7);

//function lvl(num,power){
//
//    if((power==0)&&(num==0)){
//        alert("go fuck yourself!")
//    }else{
//        var result=1;
//        if(power>0){
//            for(var i=0;i<power;i++){
//                result*=num;
//            }
//        }else{
//            for (var k = 0; k > power; k--) {
//                result /= num;
//            }
//        }
//        alert("Ваше число "+num+"в степени "+power+":"+result);
//    }
//}

//function modulePower(numbur,pow){
//    var result=1;
//    for(var i=0;i<pow;i++){
//        result*=numbur;
//    }
//    return result;
//}
//
//function lvl(num,power){
//    if((power==0)&&(num==0)){
//        alert("go fuck yourself!")
//    }else{
//        if(power>0){
//            result=modulePower(num,power);
//        }else{
//            result=1/modulePower(num,-power);
//        }
//        alert("Ваше число "+num+"в степени "+power+":"+result);
//    }
//}
//lvl(5,-2);

//function percentCalc(money,month){
//    var result_sum=money;
//    if((month>0)&&(money>0)){
//        for(var i=0;i<month;++i){
//            result_sum*=1.03;
//        }
//        alert("Ваша сумма: "+result_sum);
//    }else{
//        alert("Choose correct quantity of month or money")
//    }
//}
//percentCalc(20000, 1);

//function percentCalc(money,month){
//    var result_sum=money;
//    if((money>0)&&(month>0)) {
//        for (var i = 0; i < month; ++i) {
//            if (month < 4) {
//                result_sum *= 1.03;
//            } else if (month < 7) {
//                result_sum *= 1.06
//            } else if (month < 10) {
//                result_sum *= 1.09
//            } else {
//                result_sum *= 1.12
//            }
//        }
//    }else{
//            result_sum="Put correct quantity of months or money"
//    }
//    return result_sum;
//}
//console.log(percentCalc(20000,3));

function percentCalc(money,month){
    var result_sum=monney;
    if((money>0&&month>0)){

    }else{

    }
}