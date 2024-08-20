class CentroReciclaje {
    constructor(nombre) {
        this.nombre = nombre;
        this.materiales = [];
    }
    agregarDetallesC(material) {
        this.materiales.push(material);
    }
}
class MaterialReciclable {
    constructor(nombreM) {
        this.nombre = nombreM;
    }
    agregarDetalles() {
        console.log("Se agregó un nuevo material reciclable: " + this.nombre);
    }
}
// instancias
document.querySelector('#detalles').addEventListener("click", () => {
    let nombreCentro = document.querySelector('#nombreCentro').value;
    let nombreMaterial = document.querySelector('#nombreMaterial').value;
    
    let centro = new CentroReciclaje(nombreCentro);
    let material = new MaterialReciclable(nombreMaterial);
    
    centro.agregarDetallesC(material);
    material.agregarDetalles();

    document.querySelector('#resultado').value
});

/* document.querySelector('#nombreCentro').addEventListener("click", () => {
    let centro = new CentroReciclaje();
    centro.agregarDetallesC();
    console.log(centro.materiales);
    document.querySelector('#resultado').innerText = centro
})
document.querySelector('#nombreMaterial').addEventListener("click", () => {
    let material = new MaterialReciclable();
    material.agregarDetalles();
    document.querySelector('#resultado2').innerText = material
}) */
