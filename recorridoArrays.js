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


// Metodo filter: el resultado se guardan en articulosFiltrados
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

// Metodo map: el resultado se guardan en nombreArticulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

// Metodo find: el resultado se guardan en encuentreArticulo
var encuentreArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

// Metodo forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});