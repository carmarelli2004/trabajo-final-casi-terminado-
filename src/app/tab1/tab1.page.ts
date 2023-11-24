import { Component } from '@angular/core';
import { Producto } from '../core/interfaces/producto';
import { CATEGORIAS } from '../core/constant/categorias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  categorias:Producto[] = CATEGORIAS

}
