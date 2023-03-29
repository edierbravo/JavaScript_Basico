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

lo que esta en el scope global se puede acceder desde cualquier lugar, pero algo que esta solo en el scope local solo se puede acceder de donde se declara.

![Scope](https://github.com/edierbra/JavaScript_Basico/blob/master/images/scope.png?raw=true)

```
// scope global
var nombre = "JavaScript"

function saludar(){
    var saludo = "Hola"
    console.log(`${saludo} ${nombre}`)
}

saludar()
```

## Hoisting

Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones.

El código permanece igual, solo es una interpretación del motor de JavaScript. En el caso de las variables solamente sucede cuando son declaradas con var.

El tema de Hoisting solo sucede con las declaraciones de variables y funciones, por lo que se** recomienda declarar las variables y las funciones lo más arriba posible del código**, para evitar errores. También, el tema de hoisting ya está solucionado con las nuevas formas de declarar variables con let y const.

**Ejemplo con variables:**

Al digitar las siguientes la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada aún, JavaScript crea esta variable antes de declararla y le asigna un valor de undefined.

```
console.log(nombre) // undefined
var nombre = "Andres"
```

Lo que JavaScript está haciendo sería lo siguiente:

```
// Hoistin: Declara y asigna undefined
var nombre = undefined
console.log(nombre) // undefined
nombre = "Andres"
```

**Ejemplo con funciones:**

La respuesta del siguiente codigo es "Hola", porque al invocar una función que no está declarada, JavaScript la eleva y por eso podemos invocar una función antes de declararla.

```
console.log( saludar() )

function saludar() {
  return "Hola"
}
```

Pero, lo que realmente sucede es que JavaScript guarda la función en memoria en la fase de creación de un contexto de ejecución, no asigna undefined como con las variables.

```
// Hoisting: Declara la función antes de ser invocada
function saludar() {
  return "Hola"
}

console.log( saludar() ) // "Hola"
```

## Coercion:

**Coercion implicita**

La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado. Al momento de compilar el código, el motor de JavaScript, si encuentra alguna incoherencia (una suma de un número con un string), el motor lo interpreta a su manera y arroja un valor que puede ser erróneo.

```
4 + "7" // "47"
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 // false
```

**Coercion explicita**

La coerción explícita es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente.

```
Number("47") // 47
String(51) // "51"
Boolean(1) // true
```

## Truthy and Falsy

Los valores truthy y falsy son valores verdaderos y falsos cuando se realiza una coerción de cualquier tipo a booleano, respectivamente. Esto es importante para manejar condicionales, ya que una estructura condicional evalúa si un valor es verdadero o falso en un contexto booleano.

**Falsy**

Un valor falsy es aquel que es falso en un contexto booleano

```
// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false
```

También puedes realizar una coerción implícita con el operador de negación (!), pero solo es para que la conozcas, no es recomendable.

```
// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false
```

**Truthy**

Un valor truthy es aquel que es verdadero en un contexto booleano, son todos los valores que no sean falsy, que especificamos en la anterior sección.

```
// Coersión explícita
Boolean([]) // true
Boolean({}) // true
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true
```

## Operadores: Asignación, Comparación y Aritméticos.

**Operador aritmetico**

Los operadores aritméticos se utilizan para efectuar operaciones matemáticas.

```
// Suma
2 + 3 // 5
// Resta
5 - 3 // 2
// Multiplicación
4 * 2 // 8
// División
6 / 2 // 3
```

Recuerda que no existe la división entre 0. En ese caso JavaScript devolverá el valor Infinity.

**Operador de residuo**

El operador de residuo (`%`), el signo de porcentaje, devuelve el residuo de una división.

```
//Residuo
21 % 5 // 1
```

**Operador de concatenacion**

El operador de concatenación consiste en unir dos o más strings.

```
"Hola " + "Platzi" // "Hola Platzi"
```

**Operador de incremento y decremento**

El operador de incremento (`++`) y decremento (`--`) consiste en aumentar o disminuir una unidad a una variable, respectivamente. Estos operadores se pueden emplear antes y después de la variable.

```
variable++
variable--
++variable
--variable
```

Sin embargo, si se emplea antes o después, el comportamiento es diferente. Si está previamente, el valor de la variable aumenta y devuelve el valor nuevo. Si está después, el valor de la variable aumenta, pero devuelve el valor anterior.

```
var a = 3
var b = 3

console.log(a++) //3
console.log(++b) //4
console.log(a) //4
console.log(b) //4
```

**Operadores de asignación**

El operador de asignación (`=`) consiste en asignar un valor a una variable.

```
var saludo = "Hola Mundo"
```

**Operadores de asignación combinada**

En ciertos casos, reasignarás la misma variable más otro valor. Estas variables pueden utilizarse como acumuladores o contadores.

```
var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) // 3
```

![Asignacion combinada](https://github.com/edierbra/JavaScript_Basico/blob/master/images/asignacionCombinada.png?raw=true)

**Operadores de comparación**

Un operador de comparación compara dos o más valores y devuelve un valor lógico (verdadero o falso).

- Igualdad por valor (`==`): compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.
- Igualdad por valor y tipo de dato (`===`): compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.
- Desigualdad por valor (`!=`)
- Desigualdad por valor y tipo de dato (`!==`)
- Menor que (`<`)
- Mayor que (`>`)
- Menor 0 igual que (`<=`)
- Mayor o igual que (`>=`)


**Operadores logicos**

-  AND (`&&`): Expresion1 && Expresion2
- OR (`||`): `Expresion1 && Expresion2`
- Negacion(`!`): `!Expresion`

## Condicionales

**if**

Un condicional evalúa si una expresión o condición es verdadera

```
if (edad >= 18){
    console.log("Puedes conducir")
}
```

**else**

La palabra reservada else evalúa cuando la expresión del `if` es falsa, pero no es obligatorio colocarlo.

```
if (edad >= 18){
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}
```

**else if**

Se usa la pañabra reservada `else if` para validar diferentes condiciones. Sin embargo, JavaScript evalúa la primera condición, luego a la segunda, y así sucesivamente.

```
if (condicion1){
   // Bloque 1
} else if (condicion2){
    // Bloque 2
} else if (condicion3){
   // Bloque 3
} else {
    // Bloque else
}
```

**Operador ternario**

El operador ternario consiste en evaluar en una sola linea si una expresión es verdadera o falsa. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (`?`), si es así ejecuta el “Bloque verdadero”, caso contrario (`:`), ejecuta el “Bloque falso”.

```
condicion ? Bloque verdadero : Bloque falso
```

Ejemplo:

```
function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}
```

```
var age = 16;

var url = age > 18 ? (
    alert("OK, puedes continuar."),
    // alert devuelve "undefined", pero será ignorado porque
    // no es el último valor separado por comas del paréntesis
    "continue.html" // el valor a ser asignado si age > 18
) : (
    alert("Eres menor de edad!"),
    alert("Disculpa :-("),
    // etc. etc.
    "stop.html" // el valor a ser asignado si !(age > 18)
);
```

## Switch

La estructura `switch` es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

El siguiente codigo  se lee: evalúa (`switch`) la variable expresion, en el caso de que sea igual a uno (`case 1`), entonces ejecuta el bloque 1 y termina (`break`), en el caso de que sea igual a dos (`case 2`), entonces ejecuta el bloque 2 y termina (`break`), si no se cumple ninguna, ejecuta un bloque por defecto (`default`).

```
switch (expresion) {
    case 1: 
        // Bloque 1
        break;
    case 2: 
        // Bloque 2
        break;
    default: 
        // Bloque por defecto
        break;
}
```

## Array

Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

```
var miarray = ["Andres", "Ramiro", "Silvia"] // Se crea un array
var longitud = miarray.length // Tamaño del array
miarray[1] // acceder al elemento 1 que tiene como contenido "Ramiro"
nombres[1] = "Platzi" // Reemplaza Ramiro por "Platzi"
```

**Metodos**

- push

    El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

    ```
    var array = [1,2,3]
    array.push(4,5)
    console.log(array) // [ 1, 2, 3, 4, 5 ]
    ```

- unshift

    El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

    ```
    var array = [3,4,5]
    array.unshift(1,2)
    console.log(array) // [ 1, 2, 3, 4, 5 ]
    ```

- pop

    El método pop extrae y elimina el elemento del final del array original.

    ```
    var array = [1,2,3,4]
    var lastElement = array.pop()
    console.log(lastElement) // 4
    console.log(array) // [ 1, 2, 3 ]
    ```

- shift

    El método shift extrae y elimina el elemento del inicio del array original.

    ```
    var array = [1,2,3,4]
    var firstElement = array.shift()
    console.log(firstElement) // 1
    console.log(array) // [ 2, 3, 4 ]
    ```

- indexOf

    El método indexOf muestra el índice del elemento especificado como argumento.

    ```
    var array = [1,2,3,4]
    var index = array.indexOf(2)
    console.log(index) // 1
    ```
- splice

    El metodo splice permite eliminar y reemplazar elementos dentro de un array

    Estructura:

    ```
    splice(posicion inicial, posicion final, item1, item2, ...) 
    // los item1, item 2, ... son los que 
    // voy a remmplazar en los elementos eliminados
    ```

    splice(posicion inicial)

    ```
    var array = [0,1,2,3,4,5];
    var a = array.splice(1);
    console.log(a); // [1,2,3,4,5]
    console.log(array); // 0
    ```

    splice(posicion inicial, posicion final)

    ```
    var array = [0,1,2,3,4,5];
    var a = array.splice(3,2);
    console.log(a); // [3,4]
    console.log(array); // [0,1,2,5]
    ```

    splice(posicion inicial, posicion final, item1, item2, ...)

    ```
    var array = [0,1,2,3,4,5];
    var a = array.splice(2,10,11,12);
    console.log(a); // [2,3,4,5]
    console.log(array); // [0,1,11,12]
    ```



## Loops

Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

**For**

Estructura:

```
for (condición) {
    // Bloque de código
}
```

Ejemplo:

```
for (var num = 1; num <= 10; num++) {
  console.log(num) // 1 2 3 4 5 6 7 8 9 10
}
```

**for … of**

Estructura:

```
for (for (var elemento of array){
    //Bloque de código
}) {
    // Bloque de código
}
```

Ejemplo:

```
var array = [5, 4, 3, 2, 1]

for (var elemento of array) {
  console.log(elemento); // 5 4 3 2 1
}
```

**while**

Estructura:

```
while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}
```

Ejemplo:

```
var numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}
```

## Objetos

Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves (`{}`) y separados por comas.

En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

```
var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
}
```

Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

**Ejemplo:**

Objeto

```
var miauto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDeAuto: fuction(){
        consolo.log(`Auto ${this.modelo} ${this.annio}`) // Auto Corolla 2020, this hace referencia a mismo objeto y tampien se puede reemplazrlo por el nombre del objeto que en este caso es miauto
    }
}
```

Aceder a propiedades de un objeto

```
miauto.marca; // aceder a la propiedad marca con notacion de puntos

miauto.detalleDeAuto(); // aceder a la propiedad detalleDeAuto con notacion de punto, se usa () por que la propiedad es una funcion, al no hacerlo la salida es: f detalleDeAuto()

miauto["marca"]; // aceder a la propiedad marca con notacion de corchetes

miauto["detalleDeAuto"](); // aceder a la propiedad detalleDeAuto con notacion de corchetes, se usa () por que la propiedad es una funcion, al no hacerlo la salida es: f detalleDeAuto()
```

Añadir propiedades de un objeto

```
miAuto["color"] = "rojo" // notacion corchete
miAuto.color = "rojo" // notacion punto
```

Modificar propiedades de un objeto

```
miAuto["marca"] = "Ford" // notacion corchete
miAuto.marca = "Ford" // notacion punto
```

Eliminar propiedades de un objeto

```
delete miAuto["marca"] // notacion corchete 
delete miAuto.marca // notacion punto
```

## Objects: Función constructora

```
// Constructor
function auto(marca, modelo, annio){ 
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.annio}.`)
    }
}

// Crear un auto
var autoNuevo = new auto("Toyota", "Model 3", 2020); 
// Crear otro auto
var autoNuevo = new auto("Tesla", "Model Y", 20215);
```

## Metodos de recorrido de Arrays

Array de ejemplo:

```
// Array de objetos
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];
```

**Metodo filter**

El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

```
// El resultado se guardan en articulosFiltrados
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});
console.log(articulosFiltrados)

/* [
  { nombre: 'Libro', costo: 320 },
  { nombre: 'Teclado', costo: 500 }
] */
```

**Metodo map**

El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

```
// El resultado se guardan en nombreArticulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});
console.log(nombreeArticulos)

/* 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/
```

**Metodo find**

El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined

```
// Metodo find: el resultado se guardan en encuentreArticulo
var encuentreArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});
console.log(encuentreArticulo)

/* 
{ nombre: 'Laptop', costo: 20000 }
*/
```

**Metodo forEach**

El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

```
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

/* 
{ nombre: 'Bici', costo: 3000 }
{ nombre: 'TV', costo: 2500 }
...
{ nombre: 'Audifonos', costo: 1700 }
*/
```

**Metodo some**

El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

```
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos)

// true
```

# Recomendaciones:

Tomar los siguientes cursos en Platzi

- Fundamentos de JavaScript
- V8 y el navegador
- ECMAScript 6+

# No pares de aprender ❤️❤️❤️❤️