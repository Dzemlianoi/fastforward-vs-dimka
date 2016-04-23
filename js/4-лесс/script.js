
//function tableAdd(rows,cols){
//    cols=cols||4;
//    var result="";
//    for(var i=1;i<=rows;i++){
//        for(var j=1;j<=cols;j++){
//            result+=j*i+" ";
//        }
//        result+="\n";
//    }
//    return result;
//}
//var test=7,test1=4;
//console.log(tableAdd(test));

//function week(a){
//    switch (a){
//        case 1:
//            return "Monday";
//            break;
//        case 2:
//            return "Tuesday";
//            break;
//        case 3:
//            return "Wednesday";
//            break;
//        case 4:
//            return "Thursday";
//            break;
//        case 5:
//            return "Friday";
//            break;
//        case 6:
//            return "Saturday";
//            break;
//        case 7:
//            return "Sunday";
//            break;
//        default:
//            return "Put correct number";
//    }
//}
//
//console.log(week(-4));
//
//function minOf(a,b){
//    return(a<b)? a:b;
//}
//console.log(minOf(4,2));

//function pow(num, power){
//    if(power!=1){
//        return num*pow(num,power-1);
//    }else{
//        return num;
//    }
//}
//console.log(pow(4,3));

//function summ(num){
//    if(num!=1){
//        return num+summ(num-1);
//    }else{
//        return num;
//    }
//}
//console.log(summ(100));

//function pow(x, n){
//    var result=1;
//
//    for (var i=0;i < n;i++){
//        result*=x;
//    }
//    return result;
//}
//
//x=prompt("x?", '');
//n=prompt("n?", '');
//
//if (n < 0){
//    alert('Степень '+n+'не поддерживается, ' +
//    'введите целую степень, большую 0');
//}else{
//    alert (pow(x, n));
//}

//var a=12;
//console.log(a.toFixed(5));

//var b="bghklww333";
//console.log(parseInt(b));

//var a='hello world,lol';
//console.log(a.substring(2,6));
//console.log(a.indexOf('ol'));
//
//var arr=[145,'allo',12,'hello'], result='';
//console.log(arr);
//var a=arr.pop();
//console.log(a);
//console.log(arr);
//var b=arr.pop();
//console.log(b);
//console.log(arr);
//
//arr.push('соло');
//console.log(arr);

//for (key in arr){
//    result+=arr[key]+' ';
//}

//alert (arr);

//function reverse(arr){
//    var a=arr.length;
//
//    if(a>1){
//        for (var i=1;i<a;i++){
//            var b=arr.pop();
//            arr.unshift(b);
//        }
//        return arr;
//    }else{
//        alert('Rly?!');
//        return null;
//    }
//}
//var arr=[145,'allo',12,'hello'];
//console.log(reverse(arr));


function reverse(arr,arr1){
    var firstPart=arr.length;
    var secondPart=arr1.length;

    for (var i= 0,result=0;i<firstPart;i++){
        for (var j=0;j<secondPart;j++){
            if ((typeof arr[i] == 'string') && (typeof arr1[j]== 'string')) {
                if (arr[i].toLowerCase() === arr1[j].toLowerCase()) {
                    result++;
                    break;
                }
            }else{
                if (arr[i] === arr1[j]) {
                    result++;
                    break;
                }
            }
        }
    }
    return result;
}
var arr=[145,'allo',12,'hello',145];
var arr1=['ALLO','13','allo','world',145];
console.log(reverse(arr,arr1));

//совпадение в любом регистре в любом месте 1б, в одном регистре и любом месте 2б, и то, и то - 3б.

