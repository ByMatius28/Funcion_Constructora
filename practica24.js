'use strict'

function Producto(nombre, precio, talla) {
    this.nombre = nombre;
    this.precio = precio;
    this. talla = talla;   
}

let producto1 = new Producto ("Camiseta", 22.50,"M");
let producto2 = new Producto ("Jean", 25, "L");
let producto3 = new Producto ("Camisa", 18.50,"S");

function mostrarDescripcion(producto) {
    alert (`Nombre: ${producto.nombre}`)
    alert (`Precio: ${producto.precio}`)
    alert (`Talla: ${producto.talla}`)
}

mostrarDescripcion(producto1);
mostrarDescripcion(producto2);
mostrarDescripcion(producto3);