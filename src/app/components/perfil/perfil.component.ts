import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from '../../services/serviciosEmpleados';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public empleados: any[] = []; // Array para almacenar los empleados

  constructor(private _service: ServiceEmpleados) { }

  ngOnInit(): void {
    // Verificamos si el token está disponible en el servicio
    if (this._service.token) {
      this._service.getPerfilEmpleado().subscribe({
        next: response => {
          console.log("Empleados obtenidos:", response);
          this.empleados = response; // Guardamos la lista de empleados en el array
        },
        error: err => {
          console.error(err);
          alert("No se pudieron obtener los empleados. Verifica tu conexión.");
        }
      });
    } else {
      alert("No estás autenticado. Por favor, inicia sesión.");
    }
  }
}
