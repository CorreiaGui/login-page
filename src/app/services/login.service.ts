import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(name: string, passrowd: string){
    return this.httpClient.post<LoginResponse>("/login", {name, passrowd}).pipe(tap(data => {
      sessionStorage.setItem("auth-token", data.token);
      sessionStorage.setItem("username", data.name);
    }))
  }
}
