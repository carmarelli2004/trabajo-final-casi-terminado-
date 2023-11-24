import { Component, inject } from '@angular/core';
import { PerfilService } from '../core/service/perfil.service';
import { Perfil } from '../core/interfaces/perfil';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})

export class Tab2Page {
  PerfilService = inject(PerfilService);

  perfil:Perfil = {
    nombre:"",
    direccion:"",
    telefono:""
  }
  router: any;
 
  guardarDatosPerfil(){
    this.PerfilService.guardarDatos(this.perfil);
  }

}
