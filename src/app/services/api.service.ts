import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './../classes/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private address = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getUser(param: string) { // No configurado
    return this.http.get(`${this.address}user/${param}`);
  }

  getUsers() {
    return this.http.get(`${this.address}user/`);
  }


  login(mail: string, password: string) {
    return this.http.post(`${this.address}user/${mail}`, { password });
  }
}
