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