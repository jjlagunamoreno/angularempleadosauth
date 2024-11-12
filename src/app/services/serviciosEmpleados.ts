import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ServiceEmpleados {
    constructor(private _http: HttpClient) { }

    // MÉTODO PARA REALIZAR EL LOGIN
    loginEmpleado(userName: string, password: string): Observable<any> {
        const request = "Auth/Login";
        const url = environment.apiUrlEmpleados + request;

        // ESTRUCTURA DEL BODY PARA LA PETICIÓN
        const body = {
            userName: userName,
            password: password
        };

        // CABECERAS DE LA PETICIÓN
        const headers = new HttpHeaders().set("Content-type", "application/json");

        // DEVOLVEMOS EL RESULTADO DE LA PETICIÓN POST
        return this._http.post(url, JSON.stringify(body), { headers: headers }).pipe(
            catchError(err => {
                // MANEJO DE ERRORES
                console.error("Error en la petición POST: ", err);
                return throwError(() => new Error("Credenciales inválidas"));
            })
        );
    }
}
