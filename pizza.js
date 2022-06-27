function pizzaOven(tipoCorteza,tipoSalsa,quesos,salsas){
    var pizzahorneada = {};
    pizzahorneada.tipoCorteza = tipoCorteza;
    pizzahorneada.tipoSalsa = tipoSalsa;
    pizzahorneada.quesos = quesos;
    pizzahorneada.salsas = salsas;
    return pizzahorneada;
};

var pizza_orden1 = pizzaOven("estilo Chicago","tradicional",["mozzarella"],["pepperoni", "salchicha"]);
var pizza_orden2 = pizzaOven("lanzada a mano","marinara",["mozzarella", "feta"],["champiñones", "aceitunas", "cebollas"]);
var pizza_orden3 = pizzaOven("masa borde grueso","napolitana con picante",["chedar"],["tomate", "albahaca", "pimentón"]);
var pizza_orden4 = pizzaOven("extra delgada","aceite de oliva",["mozzarella", "feta","queso crema", "cuajada rayada"],["maíz dulce", "pimentón dulce asado", "cebollas caramelizadas"]);
console.log("La orden de la pizza 1 es:",pizza_orden1,"\nLa orden de la pizza 2 es: ",pizza_orden2,"\nLa orden de la pizza 3 es: ",pizza_orden3,"\nLa orden de la pizza 4 es: ",pizza_orden4);