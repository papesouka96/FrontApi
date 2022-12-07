import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { env } from 'src/env'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  nom: unknown;
  users: any;
  user: any;
  firstName: any;

  constructor(private httpClient : HttpClient) { }

  getUsers(){
    return this.httpClient.get(`${env.apiUrl}/getAll`)
  };

  changeRole(id:any,user: User){
   
    return this.httpClient.patch<User>(`${env.apiUrl}/update/${id}`,user);
  };


  deleteId(id:any,user: User){
   
    return this.httpClient.delete<User>(`${env.apiUrl}/delete/${id}`);
  };


  modifUsers(id:any,user: User){
   
    return this.httpClient.patch<User>(`${env.apiUrl}/update/${id}`,user);
  }
}


