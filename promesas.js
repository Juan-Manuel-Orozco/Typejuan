let almacen = {
    Frutas : ["Banana","Manzana","Fresa","Mora"],
    liquidos : ["Agua","Helado"],
    Elementos: ["Cono","Vaso","Pitillo"],
    Adiciones :["Chocolate","Chispas","Gomitas"],
};
let orden = (fruit_name, call_production) => {
    setTimeout(function(){
        console.log (`${stocks.fruits[fruit_name]}was selected`)
        call_production();
    }, 2000)
};
let produccion = () => {
    setTimeout(()=>{
        console.log("Production has started")
            setTimeout(()=>{
                console.log("the fruit has been chopped")
            },2000)
    },1000)
};
order (0, production);