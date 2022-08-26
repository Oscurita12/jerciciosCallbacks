//Declarando la función sumar
function sumar(numero1, numero2, callback) {

    let suma=numero1+numero2
    callback(suma)
}

//Llamar a la función sumar 
sumar(5,10,function(parametro){
    console.log("La suma es: "+parametro)
})