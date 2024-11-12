import { Component } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public _service: ServiceEmpleados) { }

  get isAuthenticated(): boolean {
    return !!this._service.token; // Verifica si el token está presente
  }
}
