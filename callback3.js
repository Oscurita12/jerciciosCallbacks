//Declarando la principal 
function principal(nombre,funcionsecundaria){
    console.log("Hola "+nombre)
    funcionsecundaria()
}

//Llamar a la principal 
principal("Juan",function(){
    console.log("Ya desayunó?")
})