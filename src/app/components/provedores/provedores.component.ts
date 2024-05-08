import { Component } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { Proveedor } from '../../models/proveedor';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.component.html',
  styleUrl: './provedores.component.css'
})
export class ProvedoresComponent {

  public proveedor: any;

  constructor(private serviceProveedores: ProveedoresService){
    this.getAllProveedores();
  }

  getAllProveedores() {
    this.serviceProveedores.getProveedor().subscribe((request) => {
      
    })
  } 

  addProveedor(){
    this.serviceProveedores.getProveedor().subscribe((request) => {
      this.proveedor = request;
    })

  }
}