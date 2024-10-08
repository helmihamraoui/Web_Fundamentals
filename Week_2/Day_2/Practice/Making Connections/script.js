function removerequestes(id){
    var element = document.querySelector(id)
    element.remove()
}
function nbrReqetes(id){
    var nomber = document.querySelector(id)
    nomber.innerText=Number(nomber.innerText)-1
}
function nbrConnections(id) {
    var nbr=document.querySelector(id)
    nbr.innerText=Number(nbr.innerText)+1
}
function replace(id){
    var name = document.querySelector(id)
    name.innerText='lion'

}