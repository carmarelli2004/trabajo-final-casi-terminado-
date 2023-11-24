import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from 'src/app/core/constant/categorias';
import { Producto } from 'src/app/core/interfaces/producto';
import { CartService } from 'src/app/core/service/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage  {
agregarAlCarrito: any;
clase1: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;
condicion: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
    ) {
    activatedRoute.params.subscribe(params => {
      this.buscarProducto(params['nombre']);
    })
  }

  cantidad = 1;

  buscarProducto(nombreProductoABuscar:string){
    CATEGORIAS
    for (let i = 0; i < CATEGORIAS.length; i++) {
      const productoActual = CATEGORIAS[i];
        if(productoActual.nombre === nombreProductoABuscar){
          this.producto = productoActual;
        }
        //console.log(productoActual.nombre, nombreProductoABuscar, productoActual.nombre === nombreProductoABuscar)
    }
  }


  producto:Producto = {
    imagen: 'dsgdfbgs',
    nombre: 'Nombre producto',
    descripcion: 'Descripcion',
    precio: 500,
    id: 1
  }

}
