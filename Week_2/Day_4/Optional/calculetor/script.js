var display=document.getElementById('display');
var nb="";
var nb1="";
var op="";
function press(id){
    nb+=id
    display.innerHTML=nb
}
function clr(){
    display.innerHTML=0
}
function setOP(operation){
    op=operation
    console.log(op)
    nb1=nb
    nb=""
}
function calculate(){
    var a=parseFloat(nb1)
    var b=parseFloat(nb)
    if(op=='+'){
        res=a+b
    }else if(op=='/'){
        res=a/b
    }else if(op=='-'){
        res=a-b
    }else if(op=='*'){
        res=a*b
    }else if (op==''){
        clr()
    }
    display.innerHTML=res
}