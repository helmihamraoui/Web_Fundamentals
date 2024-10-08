function removePopap(element){
    var popap=document.querySelector(element)
    popap.remove()
}
function indexselect(element){
    var index=document.getElementById(element).selectedIndex 
    return index
}
function calculetemp(index){
    var arr=["temp","temp1","temp2","temp3","temp4","temp5","temp6","temp7"]
    var nbr=""
    for(var i=0; i<arr.length;i++){
        nbr = document.getElementById(arr[i])
        if (index==1){
            nbr.innerText=Math.floor((nbr.innerText)*1.8+32)
        }else if(index==0){
            nbr.innerText=Math.ceil(Number((nbr.innerText)-32)/1.8)
        }
    }
}
function afficher(){
    alert("loading weather report...")
}
