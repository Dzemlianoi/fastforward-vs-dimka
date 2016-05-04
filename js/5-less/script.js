//obj = {};
//arr=[];
//first = {
// name:'Вас',
// surname:'Пушкин',
// age:25,
// lol:function (){
// return (this.age>=18);
// }
//};
//second = {
// name:'Василий',
// surname:'Пупкин',
// age:19,
// lol:function (){
// return (this.age>=18);
// }
//};
//third = {
// name:'Петя',
// surname:'Ложкин',
// age:13,
// lol:function (){
// return (this.age>=18);
// }
//};
//lol = {
// __construct:function(name,surname,age){
// this.surname=surname;
// this.name=name;
// this.age=age;
// },
//
// lol:function (){
// return (this.age>=18) ;
// }
//};
//
//var a = new lol('Вася','Пупкин',18);
//
//console.log(a.age);
//
//
//arr.push(first);
//arr.push(second);
//arr.push(third);
//
//var resultarr=[];
//
//for (var i=0; i<arr.length;i++){
// if (arr[i].lol()){
// var name_vs_surname=arr[i].name+' '+arr[i].surname;
// resultarr.push(name_vs_surname);
// }
//}
//
//console.log(resultarr[0]+'\n'+resultarr[1]);


//var arr=['lol','fifth','col1','method'];
//
//var str=arr.join(';');
//
//var strg='lol;func;col;row;pars'.split(';');
//console.log(strg.length);

//var i=0;
//function minus(){
//    var needed_p=document.getElementById('calc');
//    if (needed_p.innerText!=0){
//        needed_p.innerText-=1
//    }else{
//        alert('Че ты жмешь, ска, уже и так 0');
//    }
//}
//function plus(){
//    var needed_p=document.getElementById('calc');
//    needed_p.innerText=+needed_p.innerText+1;
//}

room1= {
    long:6,
    width:7,
    height:2,
    floor:2,
    bool:true,
    square:function () {
        return this.long * this.width;

    },
    checkHeight:function(){
        var check=this.square()*0.05;
        if(this.height<=check){
            return this.square()*0.1;
        }else{
            return 0;
        }
    },
    checkBool:function(){
        if(this.bool){
            return this.square()*0.2;
        }else{
            return 0;
        }
    },
    checkFloor:function(){
        if((this.floor<=2)||(this.floor>=5)){
            return this.square()*0.15;
        }else{
            return 0;
        }
    },
    index:function(){
        return this.square()-this.checkHeight()-this.checkBool()-this.checkFloor();
    }
};


room2={
    long:6,
    width:5,
    height:2,
    flor:2,
    bool:false,
    square:function () {
        return this.long * this.width;

    },
    checkHeight:function(){
        var check=this.square()*0.05;
        if(this.height<=check){
            return this.square()*0.1;
        }else{
            return 0;
        }
    },
    checkBool:function(){
        if(this.bool){
            return this.square()*0.2;
        }else{
            return 0;
        }
    },
    checkFloor:function(){
        if((this.floor<=2)||(this.floor>=5)){
            return this.square()*0.15;
        }else{
            return 0;
        }
    },
    index:function(){
        return this.square()-this.checkHeight()-this.checkBool()-this.checkFloor();
    }
};
console.log(room1.index(),room2.index(),Math.max(room1.index(),room2.index()));
//room3={
//    long:5,
//    width:7,
//    height:1.5,
//    flor:4,
//    bool:true
//};
//room4={
//    long:3,
//    width:2,
//    height:1,
//    flor:7,
//    bool:false
//};
//room5={
//    long:4.5,
//    width:4,
//    height:2.5,
//    flor:8,
//    bool:true
//};
//room6={
//    long:6,
//    width:7,
//    height:2,
//    flor:5,
//    bool:false
//};
//room7={
//    long:6,
//    width:4.3,
//    height:1.9,
//    flor:9,
//    bool:false
//};
//room8={
//    long:5,
//    width:3,
//    height:2,
//    flor:2,
//    bool:true
//};
