function validar_nombre_usuario(nombre) {
/* contante para validar  que sea solo letra */
    const pattern = new RegExp('^[0-9]+$', 'i');
    if (pattern.test(nombre)) {
        return false 
        /* metedo if para verificar primer espacio y ultimo */
    }else if (nombre.charAt(0) == " "){
        return false
    }else if (nombre.slice(-1) == " "){
        return false
        /* Metodo para comparar mayuscula al principio */
    }else if(nombre != capitalize(nombre)) {
        return false
    }else{
        console.log(true)
        return true
    }
}
/* Funcion capitalize sirve para coger el primer digito y pasarlo a mayusculas con el metodo charat
 y el split para poner el resto de la palabra */
function capitalize(nombre) {
    return nombre.split(" ").map((item) => item.charAt(0).toUpperCase()+item.substring(1).toLowerCase()).join(" ");
   
   
}
function validar_edad_usuario(edad) {
    /* contante para verifir que sea numero */
    const pattern2 = new RegExp('^[A-Z]+$', 'i');
    /* metodo if para verificar que sea numero */
    if (pattern2.test(edad)) {
        console.log("letras")
        return false 
        /* metodo para validar la edad y numeros negativos */
    }else if (edad < 13 || edad > 110 ) {
        console.log("enor y mayor")
        return false
    }else{
        console.log(true)
        return true
    } 
}  

function validar_contrasena(contra) {
    /* contante para verificar numeros y letras y 
    variable para verificar el espacion minimo dew los caracteres  */
    const pattern3 = new RegExp('^[A-Z0-9]+$', 'i');
    var espacioMin = /^.{6,}/;
    if (!pattern3.test(contra)) {
        return false
    }else if(!espacioMin.test(contra)){
        return false
    }else{
        console.log(true)
        return true
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario; 