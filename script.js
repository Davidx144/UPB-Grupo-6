// console.log("hola")

function validacion(valor){
    if (valor != valor.toLowerCase()){
        alert("El usuario debe estar en minusculas");
        return false;
    }
    if (valor.length < 6){
        alert("El usuario debe tener 6 caracteres como minimo");
        return false;
    }
    return true
}