import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private httpClient: HttpClient) { }

  public getProveedor() {
    return this.httpClient.get('https://localhost:7067/api/Proveedor')
  }

  public getProveedorByCodigo(codigo: string) {
    return this.httpClient.get('https://localhost:7067/api/Proveedor/getProveedoresByCodigo?codigo='+codigo)
  }
}
