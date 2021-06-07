import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usarname: string;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post("https://localhost:8444/login", { "username": username, "password": password })
      .pipe(catchError(this.errorHandler))
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post("https://localhost:8444/signup", { "username": username, "email": email, "password": password })
      .pipe(catchError(this.errorHandler))
  }

  forgotPassword(username: string): Observable<any> {
    console.log(username)
    return this.http.post("https://localhost:8444/forgotPassword", { "username": username })
      .pipe(catchError(this.errorHandler))
  }

  changePassword(username: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.post("https://localhost:8444/changePassword", { "username": username, "password": oldPassword, "newPassword": newPassword })
      .pipe(catchError(this.errorHandler))
  }

  addNewClient(id: string, name: string, lastName: string, phone: string): Observable<any> {
    return this.http.post("https://localhost:8444/addClient", { "clientName": name, "id": id, "lastName": lastName, "phoneNumber": phone })
      .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    console.log(error)
    return throwError(error.error.message)
  }
}
