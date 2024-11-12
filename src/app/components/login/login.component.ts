import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/serviciosEmpleados';
import { Login } from '../../models/login'; // Importa el modelo

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild("cajaUsuario") cajaUsuario!: ElementRef;
  @ViewChild("cajaPassword") cajaPassword!: ElementRef;

  constructor(
    private _service: ServiceEmpleados,
    private _router: Router
  ) {}

  onLogin(): void {
    const usuario = this.cajaUsuario.nativeElement.value.trim();
    const password = this.cajaPassword.nativeElement.value.trim();

    if (!usuario || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crea un objeto Login con los datos del formulario
    const loginData: Login = {
      userName: usuario,
      password: password
    };

    this._service.loginEmpleado(loginData).subscribe({
      next: response => {
        console.log("Respuesta del servidor:", response);

        // Guardar el token y redirigir
        this._service.token = response.response;
        localStorage.setItem('authToken', response.response);
        alert("Inicio de sesión exitoso");
        this._router.navigate(['/perfil']);
      },
      error: err => {
        alert("Usuario o contraseña incorrectos");
        console.error(err);
      }
    });
  }
}
