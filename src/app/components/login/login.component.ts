import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/serviciosEmpleados';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("cajaUsuario") cajaUsuario!: ElementRef;
  @ViewChild("cajaPassword") cajaPassword!: ElementRef;

  constructor(private _service: ServiceEmpleados) { }

  onLogin(): void {
    const usuario = this.cajaUsuario.nativeElement.value.trim();
    const password = this.cajaPassword.nativeElement.value.trim();

    if (!usuario || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // LLAMAMOS AL SERVICIO PARA REALIZAR EL LOGIN
    this._service.loginEmpleado(usuario, password).subscribe({
      next: response => {
        console.log("Respuesta del servidor:", response);
        alert("Inicio de sesión exitoso");
      },
      error: err => {
        alert("Usuario o contraseña incorrectos");
        console.error(err);
      }
    });
  }
}
