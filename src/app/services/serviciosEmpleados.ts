import { Injectable } from "@angular/core";
import { Login } from "../models/login"; // Modelo Login
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class ServiceEmpleados {
    public token: string = '';

    constructor(private _http: HttpClient) { }

    loginEmpleado(user: Login): Observable<any> {
        const json = JSON.stringify(user);
        const headers = new HttpHeaders().set("Content-type", "application/json");
        const request = "auth/login";
        const url = environment.apiUrlEmpleados + request;
        return this._http.post(url, json, { headers: headers });
    }

    getPerfilEmpleado(): Observable<any> {
        const request = "api/empleados/perfilempleado";
        const url = environment.apiUrlEmpleados + request;
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this._http.get(url, { headers: headers });
    }

}
