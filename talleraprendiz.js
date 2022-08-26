//Declarando la función
function crearAprendiz(nombre,planeta,edad,estatura,clasificarAprendiz) {
    let datosAprendiz= {
        nombre: nombre,
        planeta: planeta,
        edad: edad, 
        estatura: estatura
    }
    clasificarAprendiz(datosAprendiz)
}

//Llamando la función
crearAprendiz('Clara','Medallocity',14,1.57, function(aprendiz){
    if(aprendiz.edad<15) {
        console.log("Usted se va para la clase de fuerza")
    }
    else {
        console.log("Usted se va para la clase de sable de luz")
    }
})