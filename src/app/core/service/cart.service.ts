import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../interfaces/carrito';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  carrito: ProductoCarrito[] = [];
  totalCarrito: number = 0;
  subtotalCarrito: number = 0;
  envioCarrito: number = 2000;

  constructor(){
    const guardado = localStorage.getItem("carrito");
    if(guardado){
      this.carrito = JSON.parse(guardado);
      this.calcularTotal()
    }
  }

  agregarAlCarrito(producto:Producto,cantidad:number){
    //Reviso si el producto existe en el carrito
    const index = this.carrito.findIndex(item => item.producto.nombre === producto.nombre);
    if(index === -1){
      //Si es un producto nuevo creo el elemento producto y lo pongo en el carrito
      const productoActual:ProductoCarrito = {
        cantidad: cantidad,
        producto: producto
      }
      this.carrito.push(productoActual);
    } else {
      //Si el producto ya existe, modifico el carrito para agregarle las unidades correspondientes
      this.carrito[index].cantidad = this.carrito[index].cantidad + cantidad;
    }
    console.log(this.carrito)
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  eliminarProducto(nombre: string){
    this.carrito = this.carrito.filter(item => item.producto.nombre !== nombre);
    this.guardarLocalStorage()
    this.calcularTotal()
  }

  vaciarCarrito(){
    this.carrito = [];
    this.guardarLocalStorage();
    this.calcularTotal();
  }

  cambiarCantidad(){
    this.guardarLocalStorage();
    this.calcularTotal();
  }

  guardarLocalStorage(){
    localStorage.setItem("carrito",JSON.stringify(this.carrito))
  }

 calcularTotal(){
  this.subtotalCarrito = 0; 
  this.envioCarrito = 2000;
  this.totalCarrito = 0;
  this.carrito.forEach(item => {
  this.subtotalCarrito = this.subtotalCarrito + item.cantidad * item.producto.precio
  this.totalCarrito = this.subtotalCarrito + this.envioCarrito
  })
 }

}

