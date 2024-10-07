function  pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType =  sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var s1 = pizzaOven("deep dish", "traditional", "mozzarella",["pepperoni", "sausage"]);
var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(s1);
console.log(s2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function randomPizza(arr){
    var random=Math.random()*arr.length;
    var i=0
    if (random<=5){ 
        return i=Math.floor(random);
    }else{
        return i=Math.ceil(random);
    }
}
var menu = ["capricciosa","escalop","turck","peperoni","bolognese","mexicana"];
console.log(menu[randomPizza(menu)]);