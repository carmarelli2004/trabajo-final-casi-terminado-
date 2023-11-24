import { Component, inject } from '@angular/core';
import { CartService } from '../core/service/cart.service';
import { PerfilService } from '../core/service/perfil.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  
  perfilService = inject(PerfilService);

  constructor(public cartService:CartService) {}


  crearMensaje():string{
    let parteProductos = '';
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `- ${productoCarrito.producto.nombre} - ${productoCarrito.cantidad}
`;
      parteProductos = parteProductos + mensajeProducto;
    })
    const primeraParte = "https://wa.me/+5493412781600?text=";
    const segundaParte = `Hola, me gustaría hacer un pedido:
${parteProductos}

Mis datos:
- Nombre: NOMBRE
- Dirección: DIRECCIÓN

Notas:
`;
    const mensaje = encodeURI(primeraParte+segundaParte);
     return mensaje;
  }

  realizarPedido(){
    window.open(this.crearMensaje(), '_blank');
    this.cartService.vaciarCarrito();
  }

}
