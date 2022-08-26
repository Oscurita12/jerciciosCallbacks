//Declarando a saludar 
function Saludar() {
    setTimeout(function(){
        console.log("Hola")
        //Llamando a despedir 
        Despedir()
    }, 2000)
}

function Despedir (){ //Estoy declarando a despedir
    console.log("Adiós")
}

Saludar() //Llamando a saludar 
