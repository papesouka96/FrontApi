import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { env } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient : HttpClient) { }
 /*  /recuperation/ */
  getUsers(){
    return this.httpClient.get(`${env.apiUrl}/getAll`)
  }
   /*  /changement de role/ */
  changeRole(id:any,user: User)
  {
    
    return this.httpClient.patch<User>(`${env.apiUrl}/update/${id}`, user)
  }
 /*  /recuperation/ */
  postUser(user: User) {
    return this.httpClient.post<User>("http://127.0.0.1:3000/api/getAll", user);
  }
}
