# CURSO BASICO DE JAVASCRIPT

## Por: Edier Dario Bravo Bravo

Es un lenjuaje dinamico, es decir no se necesita hacer una compilacion antes de probar el codigo. Se utiliza en desarrollo front-end y tambien en back-end con algunos frameworks como Node.js y Next.js. Tiene características como la programación orientada a objetos, funciones y herencia basada en prototipos.

JS es Backwards Compatible, es decir que es compatible con versiones anteriores, aunque no se puedan usar las nuevas caracteristicas automaticamente en nuestro proyecto, Para solucionar esto está [Babel](https://platzi.com/blog/que-es-babel/), que permite usar las nuevas características del lenguaje, pero lo transforma a una versión que el navegador pueda entender.

## Componentes principales

- Data que guardamnos en memoria
- Tareas (funciones) que haremos con esta data

## Valores 

```
/* Numericos */
40

/* String */
"Edier Bravo"

/* Boleanos */
true
false

/* Vacios */
null
undefined

/* Array u objeto*/
[1,2,3]

/* Objeto */
{nombre: "Diego"}

/* Para ver que tipo de dato es Valor */
typeof Valor
```

## Variables

```
// Para definir variables se usa la palabra var
var nombre = "Edier";

// Declarar
var edad;
// inicializar
edad = 30;

// Decalrar e Inicializar
var elementos = ["Computadora", "Celular"];
var persona = {
    nombre,
    edad
}
```

## Funciones

**Declarativas**

```
function miFuncion() {
    return 3;
}

miFuncion();
```

**Expresivas**

```
var mifuncion = function(a,b){
    return a+b;
}

miFuncion();
```

## Scope

El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript. En otras palabras, determina que valor tendrá la variable dependiendo dónde se encuentre.
