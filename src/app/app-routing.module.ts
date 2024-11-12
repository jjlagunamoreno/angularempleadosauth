import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: "", component: HomeComponent }, // Ruta predeterminada
  { path: "login", component: LoginComponent }, // Ruta para el login
  { path: "perfil", component: PerfilComponent }, // Nueva ruta para el perfil
  { path: '**', component: NotfoundComponent } //Ruta por defecto para el resto
  // de posibilidades, pondríamos un componente 404-Not Found para el usuario

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
