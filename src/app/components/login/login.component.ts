import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Login } from '../../models/login';

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
  ) { }

  async onLogin(): Promise<void> {
    const usuario = this.cajaUsuario.nativeElement.value.trim();
    const password = this.cajaPassword.nativeElement.value.trim();

    if (!usuario || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const loginData = new Login(usuario, password);

    try {
      const token = await this._service.loginEmpleado(loginData);
      console.log("Token recibido:", token);
      localStorage.setItem('authToken', token); // Guardamos el token en localStorage
      alert("Inicio de sesión exitoso.");
      this._router.navigate(['/perfil']); // Navegamos al perfil
    } catch (error) {
      alert("Usuario o contraseña incorrectos.");
      console.error("Error en el inicio de sesión:", error);
    }
  }
}
