// Declarativas 
function miFuncion() {
    return 3;
}
miFuncion(); // se manda allamar asi

// Expresivas
var a = 2;
var b = 3;
var mifuncion = function(a,b){
    var resultado = a + b;
    return resultado;
}
miFuncion(4,5); // se manda allamar asi


// Ejemplo
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`)
}
saludarEstudiantes("Edier")