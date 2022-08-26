/*
Función que reciba un arreglo de 5 números, después de 5 segundos, esa función va a entrgar la suma de todos los núeros que hay dentro de ese arreglo
*/

//Declarando la principal
function principal (numeros, funcionSecundaria){
    setTimeout(function (){
        let suma=0
        numeros.forEach(function(numero){
            suma=suma+numero
        })
        funcionSecundaria(suma)
    }, 5000)
}

//Llamar a la principal 
let arreglo=[1,2,3,4,5]
principal(arreglo, function(suma){
    console.log("La suma fue: "+suma)
})